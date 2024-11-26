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
      <div
        className={`w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden flex items-center justify-center ${getContainerClasses()}`}
      >
        {isMobile ? (
          <img
            src={apyMobile}
            alt="APY Data Mobile"
            className="w-full h-full object-fill"
          />
        ) : isTablet ? (
          <img
            src={apyTablet}
            alt="APY Data Tablet"
            className="w-full h-full object-fill"
          />
        ) : (
          <Rive
            src={apy}
            stateMachines="State Machine 1"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div
        className={`w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden ${getContainerClasses()}`}
      >
        {isMobile ? (
          <img
            src={usersMobile}
            alt="Users Data Mobile"
            className="w-full h-full object-fill"
          />
        ) : isTablet ? (
          <img
            src={usersTablet}
            alt="Users Data Tablet"
            className="w-full h-full object-fill"
          />
        ) : (
          <Rive
            src={users}
            stateMachines="State Machine 1"
            className="w-full h-full"
          />
        )}
      </div>
      <div
        className={`w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden ${getContainerClasses()}`}
      >
        {isMobile ? (
          <img
            src={tvlMobile}
            alt="TVL Data Mobile"
            className="w-full h-full object-cover"
          />
        ) : isTablet ? (
          <img
            src={tvlTablet}
            alt="TVL Data Tablet"
            className="w-full h-full object-cover"
          />
        ) : (
          <Rive
            src={tvl}
            stateMachines="State Machine 1"
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default Data;
