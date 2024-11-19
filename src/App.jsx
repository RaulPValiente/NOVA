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

import Logo from './assets/token.png';
import Default from './assets/Default.svg';

function App() {
  return (
    <>
      <Banner />
      {/*<Navbar/>*/}
      <Header />
      <Data />
      {/*
      <MainProject 
        logoImage={Logo}
        productName="Project" 
        productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
        raisedAmount="$100,000"
        currentInvestors="275"
        minimumInvestment="$100"
        mainImage={Default}
      />
      */}
      <Projects />
      {/*
      <Quickstart/>
      */}
      <Apply />
      <Footer />
    </>
  );
}

export default App;
