import arrowIcon from '../assets/arrow-right.svg';

const ArrowButton2 = ({ url, text }) => {
  return (
    <a
      href={url || '#'}
      className="h-9 pl-4 pr-3 py-2 rounded-lg shadow border border-[#beffff]/5 backdrop-blur-[20px] justify-start items-center gap-2 inline-flex cursor-pointer group
        bg-[radial-gradient(53.13%_73.26%_at_48.13%_106.94%,rgba(0,255,255,0.5)_0%,rgba(0,0,0,0.5)_100%),linear-gradient(0deg,rgba(0,255,255,0.05),rgba(0,255,255,0.05))]
        hover:bg-[radial-gradient(56.42%_102.22%_at_49.54%_50%,rgba(0,255,255,0.5)_0%,rgba(0,0,0,0.5)_100%),linear-gradient(0deg,rgba(0,255,255,0.1),rgba(0,255,255,0.1)),radial-gradient(50.46%_40.53%_at_49.54%_4.17%,rgba(255,255,255,0.2)_0%,rgba(230,255,255,0)_100%)]"
    >
      <div className="text-[#f1ffff] text-[13px] font-medium leading-tight">
        {text}
      </div>
      <div className="w-6 justify-start items-center flex relative">
        <img
          src={arrowIcon}
          alt="Arrow"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 filter invert"
        />
      </div>
    </a>
  );
};

export default ArrowButton2;
