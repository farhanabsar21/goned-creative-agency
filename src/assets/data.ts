import { CardData, Testimonial } from "@/@types";
import adobeLogo from "@/assets/images/adobe_logo.png";
import airBnbLogo from "@/assets/images/airbnb_logo.png";
import atlassianLogo from "@/assets/images/atlassian_logo.png";
import githubLogo from "@/assets/images/gitHub_logo.png";
import guardianLogo from "@/assets/images/guardian_logo.png";
import microsoftLogo from "@/assets/images/microsoft_logo.png";
import netflixLogo from "@/assets/images/netflix_logo.png";
import postmanLogo from "@/assets/images/postman_logo.png";

import person01 from "@/assets/images/persons/person_1.jpg";
import person02 from "@/assets/images/persons/person_2.jpg";
import person03 from "@/assets/images/persons/person_3.jpg";
import person04 from "@/assets/images/persons/person_4.jpg";
import person05 from "@/assets/images/persons/person_5.jpg";

export const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creative meets strategy",
    desc: "Designing innovative solutions to propel your business forward",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Client-centered collaboration",
    desc: "Make data-driven decisions with real time insights",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1609421141185-8a4f37a5d063?q=80&w=2820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Results you can measure",
    desc: "Driving measurable results that showcase our impact on your success",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1541960071727-c531398e7494?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Agile and adaptive",
    desc: "Adaptive solutions that grow with your needs for ongoing improvement and performance",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1634891902392-d8e5bceb9e81?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Transparency and Trust",
    desc: "Fostering trust through clear communication and dependable service",
  },
];

export const heroTitles = [
  {
    id: 1,
    title: "Completely in your - control",
  },
  {
    id: 1,
    title: "Mastering Every Detail Impacts",
  },
  {
    id: 1,
    title: "Vision, Infinite Possibilities",
  },
];

export const cardData: CardData[] = [
  {
    id: 1,
    type: "solid",
    title: "Compensation Planning",
  },
  {
    id: 2,
    type: "image",
    backgroundImage:
      "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    type: "testimonial",
    userImage:
      "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "transforming business with the power of the cloud, our saas",
    name: "Henry Juanda",
    designation: "creative director",
  },
];

export const StatData = [
  {
    id: 1,
    value: "4.9",
    title: "Trustpilot",
  },
  {
    id: 2,
    value: ">5M",
    title: "Total Revenue",
  },
  {
    id: 3,
    value: "1200+",
    title: "Total Revenue",
  },
];

export const BrandsLogo = [
  {
    id: 1,
    image: adobeLogo,
    alt: "adobe",
  },
  {
    id: 2,
    image: airBnbLogo,
    alt: "air-bnb",
  },
  {
    id: 3,
    image: atlassianLogo,
    alt: "atlassian",
  },
  {
    id: 4,
    image: githubLogo,
    alt: "github",
  },
  {
    id: 5,
    image: guardianLogo,
    alt: "guardian",
  },
  {
    id: 6,
    image: microsoftLogo,
    alt: "microsoft",
  },
  {
    id: 7,
    image: netflixLogo,
    alt: "netflix",
  },
  {
    id: 8,
    image: postmanLogo,
    alt: "postman",
  },
];

export const customerFeedbacks: Testimonial[] = [
  {
    id: 1,
    image: person01,
    rating: 5,
    review:
      "Being able to see and adjust compensation in real-time has made a huge difference. We feel confident that we’re fair rewards.",
    name: "Jimmy Laneister",
    title: "Creative Director",
  },
  {
    id: 2,
    image: person02,
    rating: 4,
    review:
      "The platform has streamlined our team communication and project tracking. It's so much easier to stay on top of everything now.",
    name: "Elena Marks",
    title: "Project Manager",
  },
  {
    id: 3,
    image: person03,
    rating: 5,
    review:
      "Our productivity skyrocketed after adopting this tool. It’s intuitive, reliable, and has become an essential part of our workflow.",
    name: "David Chen",
    title: "Operations Lead",
  },
  {
    id: 4,
    image: person04,
    rating: 5,
    review:
      "Customer support is fantastic! They helped us set up the system and provided personalized advice that worked perfectly for our needs.",
    name: "Sophia Patel",
    title: "Customer Success Manager",
  },
  {
    id: 5,
    image: person05,
    rating: 4,
    review:
      "We appreciate the detailed analytics and reports. It’s given us actionable insights we didn’t have before.",
    name: "Carlos Martinez",
    title: "Data Analyst",
  },
];