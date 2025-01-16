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
import SpaceBg from './components/SpaceBg';

import Logo from './assets/token.png';
import Default from './assets/card_image.svg';

function App() {
  return (
    <div className="relative" style={{ overflowX: 'clip' }}>
      {/* Fondo de estrellas */}
      <div className="absolute w-screen h-screen">
        <SpaceBg />
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
        deadline="2024-12-15T23:59:59Z"
      />
      <Projects />
      <Quickstart />
      <Apply />
      <Footer />
    </div>
  );
}

export default App;
