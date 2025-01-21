export interface Slide {
  id: number;
  image: string;
  title: string;
  desc: string;
}

export interface heroTitle {
  id: number;
  title: string;
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
export interface CardType {
  data: {
    id: number;
    type?: string;
    image?: string;
    title?: string;
    user?: string;
    designation?: string;
  };
}
