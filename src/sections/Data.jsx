import Rive from '@rive-app/react-canvas';
import { useMediaQuery } from '@react-hook/media-query';
import tvl from '../assets/rive/tvl.riv';
import users from '../assets/rive/users.riv';
import apy from '../assets/rive/apy.riv';
import tvlTablet from '../assets/responsive/tvl_tablet.svg';
import usersTablet from '../assets/responsive/users_tablet.svg';
import apyTablet from '../assets/responsive/apy_tablet.svg';
import tvlMobile from '../assets/responsive/tvl_mobile.svg';
import usersMobile from '../assets/responsive/users_mobile.svg';
import apyMobile from '../assets/responsive/apy_mobile.svg';

const Data = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');

  const getContainerClasses = () => {
    if (isMobile || isTablet) {
      return 'border custom-border';
    }
    return '';
  };

  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-4 px-4 sm:px-12 lg:flex-row lg:gap-6 lg:px-0 mx-auto mb-24">
      {/* Primera tarjeta */}
      <div
        className={`w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden flex items-center justify-center relative ${getContainerClasses()}`}
      >
        {isMobile ? (
          <img
            src={apyMobile}
            alt="APY Data Mobile"
            className="w-full h-full object-fill bg-[#000a0a]/90"
          />
        ) : isTablet ? (
          <img
            src={apyTablet}
            alt="APY Data Tablet"
            className="w-full h-full object-fill bg-[#000a0a]/90"
          />
        ) : (
          <Rive
            src={apy}
            stateMachines="State Machine 1"
            className="w-full h-full object-cover"
          />
        )}
        {/* Texto central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xl sm:text-2xl pointer-events-none -mt-4 sm:-mt-1">
          +10%
        </div>
        {/* Texto en la parte baja */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm font-medium pointer-events-none">
          APY
        </div>
      </div>

      {/* Segunda tarjeta */}
      <div
        className={`w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden flex items-center justify-center relative ${getContainerClasses()}`}
      >
        {isMobile ? (
          <img
            src={usersMobile}
            alt="Users Data Mobile"
            className="w-full h-full object-fill bg-[#000a0a]/90"
          />
        ) : isTablet ? (
          <img
            src={usersTablet}
            alt="Users Data Tablet"
            className="w-full h-full object-fill bg-[#000a0a]/90"
          />
        ) : (
          <Rive
            src={users}
            stateMachines="State Machine 1"
            className="w-full h-full"
          />
        )}
        {/* Texto superior (Users) */}
        <div className="absolute top-0 left-0 right-0 px-4 flex justify-between items-center text-white pointer-events-none px-6 py-5">
          <span className="text-lg font-medium">28.000</span>
          <span className="text-sm font-medium">USERS</span>
        </div>
      </div>

      {/* Tercera tarjeta */}
      <div
        className={`w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden flex items-center justify-center relative ${getContainerClasses()}`}
      >
        {isMobile ? (
          <img
            src={tvlMobile}
            alt="TVL Data Mobile"
            className="w-full h-full object-cover bg-[#000a0a]/90"
          />
        ) : isTablet ? (
          <img
            src={tvlTablet}
            alt="TVL Data Tablet"
            className="w-full h-full object-cover bg-[#000a0a]/90"
          />
        ) : (
          <Rive
            src={tvl}
            stateMachines="State Machine 1"
            className="w-full h-full"
          />
        )}
        {/* Texto superior izquierdo (TVL) */}
        <div className="absolute top-0 left-0 flex gap-3 items-center text-white pointer-events-none px-6 py-5">
          <span className="text-sm font-medium">TVL</span>
          <span className="text-lg font-medium">28.000.000</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
