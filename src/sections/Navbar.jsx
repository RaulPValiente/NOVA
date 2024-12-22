import { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import logo from '../assets/logo.png';
import line from '../assets/line-h.svg';
import lineh from '../assets/lineh.svg';
import Telegram from '../assets/Telegram.svg';
import X from '../assets/X.svg';
import ConnectButton from '../components/ConnectButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta si estamos en móvil o tablet (max-width: 1024px)
  const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Bloquear/desbloquear el scroll del body según el estado del menú
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Desactiva el scroll
    } else {
      document.body.style.overflow = 'auto'; // Activa el scroll
    }
    return () => {
      document.body.style.overflow = 'auto'; // Limpieza al desmontar el componente
    };
  }, [isOpen]);

  // Detectar scroll y actualizar estado del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div
      className={`px-4 sm:px-12 py-4 sticky top-0 z-50 ${
        isOpen
          ? 'bg-[#000a0a]'
          : isScrolled
          ? 'bg-[#000a0a]/50 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center text-white relative z-20">
        {/* Logo de la Empresa */}
        <div className="text-lg font-bold z-20 w-[151px]">
          <img src={logo} alt="NOVA Real Chain" className="w-[99px] h-[32px]" />
        </div>

        {/* Si está en móvil o tablet, muestra el botón hamburguesa */}
        {isMobileOrTablet ? (
          <button className="text-white text-4xl z-20" onClick={toggleMenu}>
            {isOpen ? '✖' : '☰'}
          </button>
        ) : (
          <div className="flex items-center rounded-full border custom-border bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] px-[1px] gap-[1px]">
            <a
              href="#"
              className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] rounded-[60px] hover:bg-white/10"
            >
              Home
            </a>

            <a
              href="#"
              className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] bg-black/60 rounded-[60px] shadow border custom-border hover:bg-black"
            >
              RWA Launchpad
            </a>

            <div className="relative flex items-center group z-50">
              <a
                href="#"
                className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] z-50 rounded-[60px] hover:bg-white/10"
              >
                Other Products
              </a>

              <div className="absolute left-0 top-full mt-0 p-4 w-[182px] bg-[#040105] shadow-lg rounded-md hidden group-hover:block z-50 custom-border">
                <div className="flex flex-col gap-1">
                  <a
                    id="menu"
                    href="#"
                    className="block px-4 py-1.5 text-[13px] border-l-[1px] border-transparent text-white z-50 menu"
                  >
                    RWA Nodes
                  </a>
                  <img src={line} alt="" />
                  <a
                    id="menu"
                    href="#"
                    className="block px-4 py-2 text-[13px] border-l-[1px] border-transparent text-white z-50 menu"
                  >
                    RWA Real Estate
                  </a>
                  <img src={line} alt="" />
                  <a
                    id="menu"
                    href="#"
                    className="block px-4 py-2 text-[13px] border-l-[1px] border-transparent text-white z-50 menu"
                  >
                    RWA Miners
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] rounded-[60px] hover:bg-white/10"
            >
              About Us
            </a>

            <a
              href="#"
              className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] rounded-[60px] hover:bg-white/10"
            >
              News
            </a>
          </div>
        )}

        {/* Botón para conectar wallet solo en escritorio */}
        {!isMobileOrTablet && <ConnectButton isMobile={false} />}
      </nav>

      {/* Menú desplegable en móviles y tabletas */}
      {isMobileOrTablet && isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#000a0a] text-white flex flex-col justify-between z-1000 ${
            isMobile ? 'px-4' : isTablet ? 'px-12' : ''
          } ${isMobile || isTablet ? 'pt-[120px]' : ''}`}
        >
          {/* Parte superior */}
          <div className="flex flex-col items-center w-full">
            <ConnectButton isMobile={true} onClick={toggleMenu} />
            <img src={lineh} className="w-full" alt="" />
            <a
              href="#"
              className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal mt-4"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
  href="#"
  className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal 
  border-t-[1px] border-b-[1px] border-solid border-black/10
  bg-[radial-gradient(59.54%_231.23%_at_49.54%_115.28%,rgba(0,255,255,0.4)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(0,255,255,0.01)_0%,rgba(0,255,255,0.01)_100%)] 
  shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.10)]"
  onClick={toggleMenu}
>
  RWA Launchpad
</a>

            <a
              href="#"
              className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal"
              onClick={toggleMenu}
            >
              Marketplace
            </a>
            <a
              href="#"
              className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#"
              className="w-full py-2.5 px-5 text-center text-white text-base font-medium leading-normal"
              onClick={toggleMenu}
            >
              News
            </a>
          </div>

          {/* Parte inferior */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <img src={lineh} className="w-full" alt="" />
            <p className="text-[#f1ffff]/70 text-sm font-normal leading-tight">
              Join our community
            </p>
            <div className="flex gap-[6px] rounded-[30px] custom-border p-0.5 bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(204,204,204,0.09)_20.17%,rgba(0,0,0,0)_100%)] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.5)] backdrop-blur-[10px]">
              <div className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border">
                <img src={Telegram} alt="Telegram" />
              </div>
              <div className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border">
                <img src={X} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
