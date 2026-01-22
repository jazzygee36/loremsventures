import "./App.css";
import Header from "./components/header";
import ContactWhatsApp from "./pages/contact";
import Footer from "./pages/footer";
import HeroSection from "./pages/hero";
import HowItWorks from "./pages/how-it-works";
import PortfolioSection from "./pages/portfolio";
import ServicesSection from "./pages/services";
import Testimonials from "./pages/testimonial";
import WhyChooseUs from "./pages/why-choose-us";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
