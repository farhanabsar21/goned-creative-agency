import OurService from "@/components/OurService";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Brands />
      <OurService />
      <Testimonials />
    </div>
  );
}

export default App;
