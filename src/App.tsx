import './App.css';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import PrincipalMessage from '@/sections/PrincipalMessage';
import Faculty from '@/sections/Faculty';
import VisionMission from '@/sections/VisionMission';
import Academics from '@/sections/Academics';
import Admissions from '@/sections/Admissions';
// import Facilities from '@/sections/Facilities';
import Gallery from '@/sections/Gallery';
import CoCurricular from '@/sections/CoCurricular';
import NewsEvents from '@/sections/NewsEvents';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <PrincipalMessage />
        <Faculty />
        <VisionMission />
        <Academics />
        <Admissions />
        {/* <Facilities /> */}
        <Gallery />
        <CoCurricular />
        <NewsEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
