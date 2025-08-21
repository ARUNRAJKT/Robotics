import Hero from "../sections/Hero";
import About from "../sections/About";
import Rentals from "../sections/Rentals";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Newsletter from "../sections/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rentals />
      <Services />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
