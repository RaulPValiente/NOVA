import Rive from '@rive-app/react-canvas';
import radar from '../assets/radar.riv/';

const Data = () => {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-2 px-4 sm:px-12 sm:gap-2 lg:flex-row lg:gap-2 lg:px-0 mx-auto pb-24">
      <div className="w-full lg:w-[392px] h-[262px] rounded-xl custom-border"></div>
      <div className="w-full lg:w-[392px] h-[262px] rounded-xl overflow-hidden">
        <Rive
          src={radar}
          stateMachines="State Machine 1"
          className="w-full h-full object-cover border-0 p-0 m-0"
        />
      </div>
      <div className="w-full lg:w-[392px] h-[262px] rounded-xl custom-border"></div>
    </div>
  );
};

export default Data;
