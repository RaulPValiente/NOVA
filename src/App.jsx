import './App.css';
import Banner from './sections/Banner';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import Data from './sections/Data';
import MainProject from './sections/MainProject';
import Projects from './sections/Projects';
import Quickstart from './sections/Quickstart';
import Apply from './sections/Apply';
import Footer from './sections/Footer';

import { useMediaQuery } from '@react-hook/media-query';

import Logo from './assets/token.png';
import Default from './assets/card_image.svg';
import BackgroundDesktop from './assets/rive/bg.mp4';
import BackgroundTablet from './assets/responsive/bg_tablet.png';
import BackgroundMobile from './assets/responsive/bg_mobile.png';

function App() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');

  return (
    <div className="relative"> {/* Forzamos overflow oculto en el eje X */}
      {/* Fondo dinámico */}
      <div className="absolute inset-0 -z-10 w-screen h-screen overflow-hidden">
        {isMobile ? (
          <img
            src={BackgroundMobile}
            alt="Background Mobile"
            className="absolute top-0 left-0 w-full h-screen object-none"
          />
        ) : isTablet ? (
          <img
            src={BackgroundTablet}
            alt="Background Tablet"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : (
          <video
            src={BackgroundDesktop}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover"
          />
        )}
      </div>

      {/* Contenido principal */}
      <Banner />
      <Navbar />
      <Header />
      <Data />
      
      <MainProject 
        logoImage={Logo}
        productName="Project" 
        productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
        raisedAmount="$100,000"
        currentInvestors="275"
        minimumInvestment="$100"
        mainImage={Default}
        deadline= "2024-12-15T23:59:59Z"
      />
      
      <Projects />
      <Quickstart />
      <Apply />
      <Footer />
    </div>
  );
}

export default App;
