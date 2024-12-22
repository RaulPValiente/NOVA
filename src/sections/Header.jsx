import ArrowButton from '../components/ArrowButton';
import Telegram from '../assets/Telegram.svg';
import X from '../assets/X.svg';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mx-auto pb-16 pt-24 px-4 sm:px-0">
      <div className="mb-4">
        <div
          className="flex justify-center items-center gap-[6px] rounded-[30px] custom-border p-0.5
        bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(204,204,204,0.09)_20.17%,rgba(0,0,0,0)_100%)] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.5)] backdrop-blur-[10px]"
        >
          {/* Telegram Link */}
          <a
            href="https://t.me/NovaRealChainENG"  // Aquí cambia la URL por la de tu canal de Telegram
            target="_blank"
            rel="noopener noreferrer"
            className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border"
          >
            <img src={Telegram} alt="Telegram" />
          </a>

          {/* Twitter (X) Link */}
          <a
            href="https://x.com/novarealchain"  // Aquí cambia la URL por tu perfil de Twitter
            target="_blank"
            rel="noopener noreferrer"
            className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border"
          >
            <img src={X} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="mb-6">
        <h1
          className="w-full text-center text-[40px] font-semibold sm:w-[535px] sm:text-7xl sm:font-bold bg-clip-text"
          style={{
            background:
              'linear-gradient(180deg, rgba(241, 255, 255, 0.30) 16.67%, #F1FFFF 85.63%)',
            backgroundClip: 'text',
            color: 'transparent', // Esto asegura que el texto sea transparente para ver el fondo
          }}
        >
          Power the Next
        </h1>

        <h1
          className="w-full text-center text-white text-[40px] font-semibold
          sm:w-[535px] sm:text-7xl sm:font-bold
          "
        >
          Big Startup
        </h1>
      </div>
      <div className="mb-12">
        <h2
          className="w-full text-center text-white/70 text-base font-normal leading-normal
          sm:w-[455px] sm:text-lg sm:leading-[27px]
          "
        >
          Back the future’s game-changers and earn massive profits + shares!
        </h2>
      </div>
      <ArrowButton text="Get Started" url="https://novarealchain.com/" />
    </div>
  );
};

export default Header;
