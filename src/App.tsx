import './App.css';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import PrincipalMessage from '@/sections/PrincipalMessage';
import VisionMission from '@/sections/VisionMission';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Infrastructure from '@/sections/Infrastructure';
import Academics from '@/sections/Academics';
import Admissions from '@/sections/Admissions';
// import Facilities from '@/sections/Facilities';
import Activities from '@/sections/Activities';
import Gallery from '@/sections/Gallery';
import NewsEvents from '@/sections/NewsEvents';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <PrincipalMessage />
        <VisionMission />
        <WhyChooseUs />
        <Infrastructure />
        <Academics />
        <Admissions />
        {/* <Facilities /> */}
        <Activities />
        <Gallery />
        <NewsEvents />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
