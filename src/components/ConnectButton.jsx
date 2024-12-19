import Rive from '@rive-app/react-canvas';

import connect from '../assets/rive/connect.riv';
import arrow from '../assets/arrow-circle.png';

const ConnectButton = ({ isMobile, onClick }) => {
  if (isMobile) {
    return (
      <button
        className="flex px-3 py-1.5 items-center gap-1.5 mb-4 rounded-[99px] border border-[rgba(255,255,255,0.10)] bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(204,204,204,0.09)_20.17%,rgba(0,0,0,0)_100%)]"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="w-7 h-7 overflow-hidden">
          <img src={arrow} alt="Icon" className="w-full h-full object-fit" />
        </div>

        <div className="p-1 rounded-[99px] justify-center items-center gap-2 flex overflow-hidden">
          <div className="text-[#f1ffff] text-[13px] font-medium leading-tight">
            Connect Wallet
          </div>
        </div>
      </button>
    );
  } else {
    return (
      <div
        className="relative w-[151px] h-[50px]"
        style={{ cursor: 'pointer' }}
      >
        <Rive
          src={connect}
          className="absolute inset-0 w-full h-full rounded-[100px]"
        />
      </div>
    );
  }
};

export default ConnectButton;
