import ArrowButton from '../components/ArrowButton';
import Telegram from '../assets/Telegram.svg/';
import X from '../assets/X.svg/';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mx-auto pb-16 pt-24 px-4 sm:px-0">
      <div className="mb-4">
        <div
          className="flex justify-center items-center gap-[6px] rounded-[30px] custom-border p-0.5
        bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(204,204,204,0.09)_20.17%,rgba(0,0,0,0)_100%)] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.5)] backdrop-blur-[10px]"
        >
          <div className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border">
            <img className="" src={Telegram} alt="Telegram" />
          </div>
          <div className="px-[16px] py-[6px] bg-black/60 rounded-[100px] shadow custom-border">
            <img className="" src={X} alt="Twitter" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h1
          className="w-full text-center text-white text-[40px] font-semibold
          sm:w-[535px] sm:text-7xl sm:font-bold
          "
        >
          Power the Next Big Startup
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
      <ArrowButton text="Get Started" url='https://novarealchain.com/' />
    </div>
  );
};

export default Header;
