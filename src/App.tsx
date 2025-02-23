import OurService from "@/components/OurService";
import Hero from "./components/Hero";
import AboutUs from "@/components/AboutUs";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import OurBlogs from "@/components/OurBlogs";
import FollowUs from "@/components/FollowUs";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Brands />
      <OurService />
      <Testimonials />
      <OurBlogs />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
