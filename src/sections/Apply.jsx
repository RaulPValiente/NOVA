import ArrowButton from '../components/ArrowButton';

const Apply = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pb-24 px-4 sm:px-12">
      <div
        className="flex flex-col sm:flex-row h-auto sm:h-[520px] custom-border rounded-[12px]"
        style={{
          background: 'radial-gradient(113.85% 62.86% at 49.54% 115.28%, rgba(206, 52, 232, 0.50) 0%, rgba(0, 0, 0, 0.25) 100%)',
        }}
      >
        {/* Parte Izquierda */}
        <div className="flex flex-col justify-between w-full sm:w-1/2 py-8 px-4 sm:px-12">
          <div></div>
          <div className="mt-auto">
            <div className="mb-8">
              <div className="text-white text-2xl sm:text-3xl font-semibold mb-5">
                Launch on NOVA Real Chain
              </div>
              <div className="text-white/70 text-base sm:text-xl font-normal leading-normal sm:leading-[30px]">
                Fuel your company’s success by raising the capital to grow.
                Don’t miss your chance!
              </div>
            </div>

            <ArrowButton text="Apply for RWA Launchpad" />
          </div>
        </div>

        {/* Parte Derecha */}
        <div className="w-full sm:w-1/2 h-[200px] sm:h-auto flex items-center justify-center sm:justify-center mt-4 sm:mt-0">
          {/* Aquí irá la animación */}
        </div>
      </div>
    </div>
  );
};

export default Apply;
