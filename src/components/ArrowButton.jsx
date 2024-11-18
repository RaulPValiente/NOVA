import PropTypes from 'prop-types';
import arrowIcon from '../assets/arrow-right.svg'; // Importa el archivo SVG

const ArrowButton = ({ text }) => {
  return (
    <div className="inline-flex h-11 px-5 py-2.5 bg-black/50 rounded-lg shadow border custom-border backdrop-blur-[20px] items-center justify-center lg:justify-start gap-2.5">
      <div className="text-white text-base font-medium leading-normal">
        {text}
      </div>
      <div className="hidden lg:flex h-6 items-center">
        {/* El icono solo aparece en pantallas grandes */}
        <img src={arrowIcon} alt="Arrow" className="w-6 h-6" />
      </div>
    </div>
  );
};

// Definición de PropTypes
ArrowButton.propTypes = {
  text: PropTypes.string.isRequired, // Define que 'text' es una prop requerida de tipo string
};

export default ArrowButton;
