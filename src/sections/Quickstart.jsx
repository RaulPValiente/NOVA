import { useMediaQuery } from '@react-hook/media-query';
import Rive from '@rive-app/react-canvas';

// Importa las imágenes para tablet y móvil
import MobileImage from '../assets/responsive/steps_mobile.svg';
import TabletImage from '../assets/responsive/steps_tablet.svg';
import steps from '../assets/rive/steps.riv';

const Quickstart = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');

  return (
    <div className="w-full pb-12 sm:pb-24">
      {/* Contenedor general con todo incluido */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-12 md:px-16 lg:px-0">
        {/* Título y subtítulo */}
        <div className="flex flex-col items-start gap-4">
          <div
            className="text-white font-semibold 
            text-[30px] sm:text-[50px] 
            leading-normal sm:leading-[normal] 
            tracking-[-1.2px] sm:tracking-normal"
          >
            How to join
          </div>
          <div
            className="text-white font-normal 
            text-[16px] sm:text-lg 
            leading-[24px] sm:leading-[27px] max-w-[798px]"
          >
            In just a few clicks, you can start generating passive income
            effortlessly. Let your investments work for you while you sit back
            and enjoy the benefits!
          </div>
        </div>
      </div>

      {/* Imagen o Rive, ocupando todo el ancho */}
      {isMobile ? (
        <img
          src={MobileImage}
          alt="Steps"
          className="w-full object-cover"
          
        />
      ) : isTablet ? (
        <img
          src={TabletImage}
          alt="Steps"
          className="w-full object-cover relative pt-4"
          
        />
      ) : (
        <div className='w-screen h-screen -mt-20'>
          <Rive
          src={steps}
          stateMachines="State Machine 1"
          className="w-full h-full object-cover"
        />
        </div>
        
      )}
    </div>
  );
};

export default Quickstart;