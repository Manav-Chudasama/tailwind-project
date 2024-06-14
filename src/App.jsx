import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Products from "./Components/Products";
import Services from "./Components/Services";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
