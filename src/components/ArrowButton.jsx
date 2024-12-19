
import arrowIcon from '../assets/arrow-right.svg';

const ArrowButton = ({ url, text }) => {
  return (
    <a
      href={url || '#'}
      className="h-11 pl-5 pr-5 py-2.5 rounded-lg shadow border border-white backdrop-blur-[20px] justify-start items-center gap-2.5 inline-flex cursor-pointer group
        bg-gradient-to-r from-[#b0ffff] to-[#008c8c]
        hover:bg-gradient-to-l hover:from-[#b0ffff] hover:to-[#008c8c]"
    >
      <div className="text-[#000a0a] text-base font-medium leading-normal">
        {text}
      </div>
      <div className="h-6 items-center flex relative">
        <img
          src={arrowIcon}
          alt="Arrow"
          className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </a>
  );
};


export default ArrowButton;
