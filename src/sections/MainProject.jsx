import { useMediaQuery } from '@react-hook/media-query';
import ArrowButton2 from '../components/ArrowButton2';
import { useState, useEffect } from 'react';

const MainProject = ({
  logoImage,
  productName,
  productDescription,
  raisedAmount,
  currentInvestors,
  minimumInvestment,
  mainImage,
  deadline, // Pasar el deadline como parámetro en formato ISO 8601 (e.g., "2024-12-15T23:59:59Z")
}) => {
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Estado para el tiempo restante
  const [timeLeft, setTimeLeft] = useState('');

  // Función para calcular el tiempo restante
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(deadline);
    const difference = end - now;

    if (difference <= 0) {
      return '0d 0h 0m 0s';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Actualizar el contador en vivo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [deadline]);

  // Diseño para tablet y móvil
  if (isTablet || isMobile) {
    const containerStyles = isTablet
      ? 'w-full max-w-[calc(100%-96px)] mx-auto h-auto'
      : 'w-full max-w-[calc(100%-32px)] mx-auto h-auto';

    const imageStyles = isTablet
      ? 'w-full max-h-[307px] object-cover rounded-t-[12px]'
      : 'w-full max-h-[272px] object-cover rounded-t-[12px]';

    return (
      <div
        className={`${containerStyles} bg-[#000505] rounded-[12px] custom-border mb-[96px] relative`}
      >
        {/* Imagen principal */}
        <div className="flex-1 overflow-hidden relative">
          <img src={mainImage} alt="Main Product" className={imageStyles} />
          {/* Contador flotante */}
          <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-lg border custom-border shadow">
            <p
              className={
                isMobile
                  ? 'text-white/70 text-xs font-normal leading-tight'
                  : 'text-white/70 text-sm font-normal leading-tight'
              }
            >
              Registration Ends in:
            </p>
            <p
              className={
                isMobile
                  ? 'text-white text-xs font-semibold leading-tight'
                  : 'text-white text-sm font-semibold leading-tight'
              }
            >
              {timeLeft}
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col px-6 pb-6 pt-[44px] relative">
          <div className="flex-1 flex justify-between items-start relative sm:pb-5 lg:pb-0">
            <div className="flex-1 relative">
              <img
                src={logoImage}
                alt="Logo"
                className="w-[96px] h-[96px] rounded-full absolute top-[-90px] left-[-16px] border-[12px] border-[#040105] shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
              />
            </div>
            
          </div>
          <div className="flex flex-1 flex-col mb-6 mt-6 sm:mt-0">
            <div className="mb-4">
              <p className="text-[22px] font-semibold leading-[27px] text-white">
                {productName}
              </p>
            </div>
            <div>
              <p className="text-sm font-normal leading-tight text-white/70">
                {productDescription}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:justify-between lg:space-x-4">
            <div className="flex justify-between w-full lg:flex-1 lg:h-12 lg:flex-col lg:items-center lg:justify-center lg:gap-[3px]">
              <span className="text-left lg:text-center text-white text-sm font-medium leading-tight">
                Raised
              </span>
              <span className="text-sm font-normal leading-tight text-white/70">
                {raisedAmount}
              </span>
            </div>
            <div className="flex justify-between w-full lg:flex-1 lg:h-12 lg:flex-col lg:items-center lg:justify-center lg:gap-[3px]">
              <span className="text-left lg:text-center text-white text-sm font-medium leading-tight">
                Current Investors
              </span>
              <span className="text-sm font-normal leading-tight text-white/70">
                {currentInvestors}
              </span>
            </div>
            <div className="flex justify-between w-full lg:flex-1 lg:h-12 lg:flex-col lg:items-center lg:justify-center lg:gap-[3px]">
              <span className="text-left lg:text-center text-white text-sm font-medium leading-tight">
                Minimum Investment
              </span>
              <span className="text-sm font-normal leading-tight text-white/70">
                {minimumInvestment}
              </span>
            </div>
          </div>
        </div>
        {/* Botón adicional para móvil */}
        <div className="flex justify-center mt-auto pb-6 lg:hidden">
          <ArrowButton2 url="#" text="Participate" />
        </div>
      </div>
    );
  }

  // Diseño para escritorio
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-12 md:px-16 lg:px-0 mb-24 custom-bg-color custom-border rounded-xl flex flex-col lg:flex-row">
      <div className="flex-1 p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
        <div className="h-auto flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div className="flex flex-col">
            <div className="text-white/70 text-base font-normal leading-normal">
              Registration Ends in:
            </div>
            <div className="text-white text-base font-semibold leading-normal">
              {timeLeft}
            </div>
          </div>
          <ArrowButton2 url="#" text="Participate Now" />
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <div className="w-[78px] h-[78px] rounded-full overflow-hidden">
            <img
              src={logoImage}
              alt="Product Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-white text-2xl font-semibold">
              {productName}
            </div>
            <div className="text-white/70 text-base font-normal leading-normal">
              {productDescription}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 mt-8">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="text-white text-base font-medium leading-normal">
              Raised
            </div>
            <div className="text-white/70 text-base font-normal leading-normal">
              {raisedAmount}
            </div>
          </div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black hidden sm:block"></div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-center text-white text-base font-medium leading-normal">
              Current Investors
            </div>
            <div className="text-white/70 text-base font-normal leading-tight">
              {currentInvestors}
            </div>
          </div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black hidden sm:block"></div>
          <div className="flex flex-col justify-center items-end gap-2">
            <div className="text-right text-white text-base font-medium leading-normal">
              Minimum Investment
            </div>
            <div className="text-white/70 text-base font-normal leading-normal">
              {minimumInvestment}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-auto lg:h-[520px] bg-[#011a1a]">
        <img
          src={mainImage}
          alt="Main Product Image"
          className="w-full h-full object-cover rounded-b-xl lg:rounded-b-none lg:rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default MainProject;
