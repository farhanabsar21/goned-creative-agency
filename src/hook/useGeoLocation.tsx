import { LocationData } from "@/@types";
import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const fetchLocationDetails = async (
    latitude: number,
    longitude: number
  ): Promise<void> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data: LocationData = await response.json();

      const city =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        data.address.county;
      const country = data.address.country;

      if (city && country) {
        setLocation(`${city}, ${country}`);
      } else {
        throw new Error("Location details incomplete");
      }

      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(timeZone);
    } catch (err) {
      setError("Failed to get location details");
      throw err;
    }
  };

  const handleGeolocation = (): void => {
    setIsLoading(true);
    setError("");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          try {
            await fetchLocationDetails(
              position.coords.latitude,
              position.coords.longitude
            );
            setIsLoading(false);
          } catch {
            setIsLoading(false);
          }
        },
        (err: GeolocationPositionError) => {
          setError(
            "Please enable location services or enter your location manually"
          );
          setIsLoading(false);
          return err;
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGeolocation();
  }, []);

  return { isLoading, error, location, timezone };
};

export default useGeolocation;
