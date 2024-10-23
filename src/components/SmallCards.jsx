import PropTypes from 'prop-types';

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
    <div className="flex flex-col w-[393.33px] custom-bg-color rounded-[12px] custom-border">
      <div className="flex-1 min-h-[248px] border-b border-white border-opacity-10">
        <img 
          src={imageSrc}
          alt="Header"
          className="w-full h-[100%] object-cover rounded-t-[12px]"
        />
      </div>
      <div className="flex-1 flex flex-col px-6 pb-6 pt-[44px] relative">
        <div className="flex-1 flex justify-between items-start relative">
          <div className="flex-1 relative">
            <img
              src={logoSrc}
              alt=""
              className="w-[96px] h-[96px] rounded-full absolute top-[-90px] left-0 border-[12px] border-[#040105] shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
            />
          </div>
          <button className="ml-auto custom-border bg-black/60 rounded-[60px] shadow">
            <p className="px-4 py-2 text-white text-[13px] font-medium leading-tight">
              Participate
            </p>
          </button>
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
        <div className="flex inline-block items-center justify-between space-x-4">
          <div className="flex-1 h-12 flex flex-col items-center justify-center gap-[3px]">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Fundraise Goal
            </span>
            <span className="text-white/70 text-sm font-normal leading-tight">
              {fundraisingGoal}
            </span>
          </div>
          <div className="h-[63px] relative">
            <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black"></div>
          </div>
          <div className="flex-1 h-12 flex flex-col items-center justify-center gap-[3px]">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Current Investors
            </span>
            <span className="text-white/70 text-sm font-normal leading-tight">
              {currentInvestors}
            </span>
          </div>
          <div className="h-[63px] relative">
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black"></div>
          </div>
          <div className="flex-1 h-12 flex flex-col items-center justify-center gap-[3px]">
            <span className="text-center text-white text-sm font-medium leading-tight">
              Minimum Investment
            </span>
            <span className="text-white/70 text-sm font-normal leading-tight">
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
  imageSrc: '../assets/Default.svg',
};

export default SmallCards;
