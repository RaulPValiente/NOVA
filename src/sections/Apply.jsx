import ArrowButton from '../components/ArrowButton';
import bg from '../assets/bg-apply.png';

const Apply = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pb-24 px-4 sm:px-12 lg:px-0">
      <div
        className="flex flex-col sm:flex-row h-auto sm:h-[520px] rounded-[12px] custom-border"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Parte Izquierda */}
        <div className="flex flex-col justify-between w-full lg:w-1/2 py-8 px-4 sm:px-12">
          <div></div>
          <div className="mt-auto">
            <div className="mb-8">
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">
                Launch on NOVA Real Chain
              </div>
              <div className="text-white/70 text-base sm:text-lg md:text-xl font-normal md:font-medium leading-normal sm:leading-[30px]">
                Fuel your company’s success by raising the capital to grow.
                Don’t miss your chance!
              </div>
            </div>

            <ArrowButton text="Apply for RWA Launchpad" />
          </div>
        </div>

        {/* Parte Derecha */}
        <div className="w-full sm:w-1/2 h-[200px] sm:h-auto flex items-center justify-center mt-4 sm:mt-0">
          {/* Aquí irá la animación */}
        </div>
      </div>
    </div>
  );
};

export default Apply;

