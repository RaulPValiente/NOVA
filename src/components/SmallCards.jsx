import PropTypes from 'prop-types';
import CircularButton from '../components/CircularButton.jsx'; // Importa el componente CircularButton

const SmallCards = ({ 
  imageSrc,
  logoSrc,  
  productTitle, 
  productDescription, 
  fundraisingGoal, 
  currentInvestors, 
  minimumInvestment 
}) => {
  return (
    <div className="flex flex-col w-[280px] sm:w-[351px] lg:w-[393.33px] h-[521px] bg-[#000505] rounded-[12px] custom-border">
      <div className="flex-1 min-h-[200px] overflow-hidden">
        <img 
          src={imageSrc}
          alt="Header"
          className="w-full h-full object-cover rounded-t-[12px]"
        />
      </div>
      <div className="flex-1 flex flex-col px-6 pb-6 pt-[44px] relative">
        <div className="flex-1 flex justify-between items-start relative">
          <div className="flex-1 relative">
            <img
              src={logoSrc}
              alt="Product Logo"
              className="w-[96px] h-[96px] rounded-full absolute top-[-90px] left-0 border-[12px] border-[#000505]"
            />
          </div>
          {/* Botón CircularButton */}
          <CircularButton url="#" text="Participate" />
        </div>
        <div className="flex flex-1 flex-col mb-6">
          <div className="mb-4">
            <p className="text-lg font-bold leading-[27px]">{productTitle}</p>
          </div>
          <div>
            <p className="text-white/70 text-sm font-normal leading-tight">
              {productDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:justify-between lg:space-x-4">
          {/* Fundraise Goal */}
          <div className="flex justify-between w-full lg:flex-1 lg:h-12 lg:flex-col lg:items-center lg:justify-center lg:gap-[3px]">
            <span className="text-left lg:text-center text-white text-sm font-medium leading-tight">
              Fundraise Goal
            </span>
            <span className="text-right lg:text-white/70 text-sm font-normal leading-tight">
              {fundraisingGoal}
            </span>
          </div>
          {/* Vertical line for desktop */}
          <div className="hidden lg:block h-[63px] relative">
            <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black"></div>
          </div>
          {/* Current Investors */}
          <div className="flex justify-between w-full lg:flex-1 lg:h-12 lg:flex-col lg:items-center lg:justify-center lg:gap-[3px]">
            <span className="text-left lg:text-center text-white text-sm font-medium leading-tight">
              Current Investors
            </span>
            <span className="text-right lg:text-white/70 text-sm font-normal leading-tight">
              {currentInvestors}
            </span>
          </div>
          {/* Vertical line for desktop */}
          <div className="hidden lg:block h-[63px] relative">
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black"></div>
          </div>
          {/* Minimum Investment */}
          <div className="flex justify-between w-full lg:flex-1 lg:h-12 lg:flex-col lg:items-center lg:justify-center lg:gap-[3px]">
            <span className="text-left lg:text-center text-white text-sm font-medium leading-tight">
              Minimum Investment
            </span>
            <span className="text-right lg:text-white/70 text-sm font-normal leading-tight">
              {minimumInvestment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Definición de las propiedades del componente
SmallCards.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  fundraisingGoal: PropTypes.string.isRequired,
  currentInvestors: PropTypes.string.isRequired,
  minimumInvestment: PropTypes.string.isRequired,
};

// Valor predeterminado para la prop imageSrc
SmallCards.defaultProps = {
  imageSrc: '../assets/responsive/coming_soon_tablet.svg',
};

export default SmallCards;
