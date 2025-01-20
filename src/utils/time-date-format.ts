export const getFormatTime = (time: Date, timezone: string): string => {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: timezone || Intl.DateTimeFormat().resolvedOptions().timeZone, // Fallback to system's timezone
    }).format(time);
  } catch (err) {
    console.error(`Invalid timezone: ${timezone}`);
    return "Invalid Timezone";
  }
};

export const getLocation = (location: string) => {
  return location.split(",")[0].trim();
};

export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return `(${currentYear})`;
};
