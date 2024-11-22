import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import logo from '../assets/logo.png';
import line from '../assets/line-h.svg';
import lineh from '../assets/lineh.svg';
import Telegram from '../assets/Telegram.svg'; // Ruta del icono de Telegram
import X from '../assets/X.svg'; // Ruta del icono de Twitter

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Detecta si estamos en móvil o tablet (max-width: 1024px)
  const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)'); // Para detectar solo móvil
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)'); // Para detectar solo tablet

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-12 py-4 sticky top-0 z-50 bg-transparent">
      <nav className="flex justify-between items-center text-white relative z-20">
        {/* Logo de la Empresa */}
        <div className="text-lg font-bold z-20 w-[151px]">
          <img src={logo} alt="NOVA Real Chain" className="w-[99px] h-[32px]" />
        </div>

        {/* Si está en móvil o tablet, muestra el botón hamburguesa */}
        {isMobileOrTablet ? (
          <button
            className="text-white text-4xl z-20" // Hamburguesa dentro del navbar
            onClick={toggleMenu}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        ) : (
          <div className="flex items-center rounded-full border custom-border bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] px-[1px] gap-[1px]">
            <a href="#" className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] rounded-[60px] hover:bg-white/10">
              Home
            </a>

            <a href="#" className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] bg-black/60 rounded-[60px] shadow border custom-border hover:bg-black">
              RWA Launchpad
            </a>

            <div className="relative flex items-center group z-50">
              <a href="#" className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] z-50 rounded-[60px] hover:bg-white/10">
                Other Products
              </a>

              <div className="absolute left-0 top-full mt-0 p-4 w-[182px] bg-[#040105] shadow-lg rounded-md hidden group-hover:block z-50 custom-border">
                <div className="flex flex-col gap-1">
                  <a id="menu" href="#" className="block px-4 py-1.5 text-[13px] border-l-[1px] border-transparent text-white z-50 menu">
                    RWA Nodes
                  </a>
                  <img src={line} alt="" />
                  <a id="menu" href="#" className="block px-4 py-2 text-[13px] border-l-[1px] border-transparent text-white z-50 menu">
                    RWA Real Estate
                  </a>
                  <img src={line} alt="" />
                  <a id="menu" href="#" className="block px-4 py-2 text-[13px] border-l-[1px] border-transparent text-white z-50 menu">
                    RWA Miners
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] rounded-[60px] hover:bg-white/10">
              About Us
            </a>

            <a href="#" className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] rounded-[60px] hover:bg-white/10">
              News
            </a>
          </div>
        )}

        {/* Botón para conectar wallet en desktop */}
        {!isMobileOrTablet && (
          
          <button className="bg-black/60 text-white font-semibold py-2 px-4 rounded-[100px] custom-border w-[151px]">
            Conectar Wallet
          </button>
        )}
      </nav>

      {/* Menú desplegable en móviles y tabletas */}
      {isMobileOrTablet && isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#000a0a] text-white flex flex-col justify-between z-10 ${isMobile ? 'px-4' : isTablet ? 'px-12' : ''} ${isMobile || isTablet ? 'pt-28' : ''}`} // Ajustes de padding
        >
          {/* Parte superior: Botón "Conectar Wallet" y enlaces */}
          <div className="flex flex-col items-center w-full">
            <button
              className="px-6 py-3 text-white bg-black/60 font-semibold rounded-[100px] mb-4"
              onClick={toggleMenu}
            >
              Conectar Wallet
            </button>

            <img src={lineh} className='w-full' alt="" />

            {/* Elementos del navbar con los nuevos estilos */}
            <a href="#" className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal mt-4" onClick={toggleMenu}>
              Home
            </a>
            <a href="#" className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal" onClick={toggleMenu}>
              RWA Launchpad
            </a>
            <a href="#" className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal" onClick={toggleMenu}>
              Marketplace
            </a>
            <a href="#" className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#" className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal" onClick={toggleMenu}>
              News
            </a>
          </div>

          {/* Parte inferior: "Join our community" y botones de Telegram y Twitter */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <img src={lineh} className='w-full' alt="" />
            <p className="text-[#f1ffff]/70 text-sm font-normal leading-tight">Join our community</p>
            <div className="flex gap-[6px] rounded-[30px] custom-border p-0.5 bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(204,204,204,0.09)_20.17%,rgba(0,0,0,0)_100%)] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.5)] backdrop-blur-[10px]">
              {/* Botón de Telegram */}
              <div className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border">
                <img className="" src={Telegram} alt="Telegram" />
              </div>

              {/* Botón de Twitter */}
              <div className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border">
                <img className="" src={X} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
