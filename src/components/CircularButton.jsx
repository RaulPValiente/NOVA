import PropTypes from 'prop-types';

const CircularButton = ({ url, text }) => {
  return (
    <a
      href={url || '#'}
      className="h-9 px-4 py-2 bg-black/60 rounded-[60px] shadow border border-white/30 backdrop-blur-[20px] justify-start items-center gap-3 inline-flex cursor-pointer group
        hover:bg-[radial-gradient(56.42%_102.22%_at_49.54%_50%,rgba(0,255,255,0.5)_0%,rgba(0,0,0,0.5)_100%),linear-gradient(0deg,rgba(0,255,255,0.1),rgba(0,255,255,0.1)),radial-gradient(50.46%_40.53%_at_49.54%_4.17%,rgba(255,255,255,0.2)_0%,rgba(230,255,255,0)_100%)] hover:border-[#beffff]/5 hover:backdrop-blur-[20px] hover:justify-start hover:items-center hover:gap-2"
    >
      <div className="text-[#fbfcfc] text-[13px] font-medium leading-tight">
        {text}
      </div>
    </a>
  );
};

CircularButton.propTypes = {
  url: PropTypes.string.isRequired, // URL a la que redirige el botón
  text: PropTypes.string.isRequired, // Texto del botón
};

export default CircularButton;
