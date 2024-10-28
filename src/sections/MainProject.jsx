import PropTypes from 'prop-types';
import arrowIcon from '../assets/arrow-right.svg/';

const MainProject = ({
  logoImage,
  productName,
  productDescription,
  raisedAmount,
  currentInvestors,
  minimumInvestment,
  mainImage,
}) => {
  return (
    <div className="w-[1200px] max-w-[1200px] h-[520px] custom-border rounded-xl mx-auto flex custom-bg-color mb-24">
      <div className="flex-1 p-8 border-r border-white/10 flex flex-col justify-between">
        <div className="h-[50px] flex justify-between items-start">
          <div className="h-[50px] flex-col justify-center items-start gap-0.5 inline-flex">
            <div className="text-white/70 text-base font-normal leading-normal">
              Registration Ends in: <br />
            </div>
            <div className="text-white text-base font-semibold leading-normal">
              Counter
            </div>
          </div>
          <div>
            <div className="h-11 px-4 py-2 bg-black/50 rounded-lg shadow border custom-border backdrop-blur-[20px] justify-start items-center gap-2 inline-flex">
              <div className="text-white text-[13px] font-medium leading-tight">
                Participate Now
              </div>
              <div className="h-4 justify-start items-center gap-2 flex">
                <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mr-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[78px] h-[78px] rounded-full overflow-hidden">
            <img 
              src={logoImage} 
              alt="Product Logo" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="h-[97px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-white text-2xl font-semibold">{productName}</div>
            <div className="self-stretch text-white/70 text-base font-normal leading-normal">
              {productDescription}
            </div>
          </div>
          <div className="h-[75px] justify-start items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-[3px] inline-flex">
              <div className="text-white text-base font-medium leading-normal">
                Raised
                <br />
                Quantity
              </div>
              <div className="text-white/70 text-base font-normal leading-normal">
                {raisedAmount}
              </div>
            </div>
            <div className="h-[63px] relative">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black"></div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-center gap-[3px] inline-flex">
              <div className="w-[71px] h-12 text-center text-white text-base font-medium leading-normal">
                Current
                <br />
                Investors
              </div>
              <div className="text-white/70 text-base font-normal leading-normal">
                {currentInvestors}
              </div>
            </div>
            <div className="h-[63px] relative">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-black via-[rgba(255,255,255,0.20)] to-black"></div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-end gap-[3px] inline-flex">
              <div className="text-right text-white text-base font-medium leading-normal">
                Minimum
                <br />
                Investment
              </div>
              <div className="text-white/70 text-base font-normal leading-normal">
                {minimumInvestment}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img 
          src={mainImage} 
          alt="Main Product Image" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

// Definición de las validaciones de propiedades
MainProject.propTypes = {
  logoImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  raisedAmount: PropTypes.string.isRequired,
  currentInvestors: PropTypes.string.isRequired,
  minimumInvestment: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
};

export default MainProject;
