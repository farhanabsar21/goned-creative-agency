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
export interface CardData {
  id: number;
  type: "solid" | "image" | "testimonial";
  backgroundColor?: string;
  backgroundImage?: string;
  icon?: React.ReactNode;
  title?: string;
  userImage?: string;
  quote?: string;
  name?: string;
  designation?: string;
}

export interface CardProps {
  card: CardData;
}

export interface Testimonial {
  id: number | string;
  image: string;
  rating: number;
  review: string;
  name: string;
  title: string;
}

export interface TestimonialProps {
  feedback: Testimonial;
}
