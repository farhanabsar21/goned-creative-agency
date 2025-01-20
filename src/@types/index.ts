export interface Slide {
  id: number;
  image: string;
  title: string;
  desc: string;
}

export type LocationData = {
  address: {
    city?: string;
    town?: string;
    village?: string;
    county?: string;
    country?: string;
  };
};
