import PropTypes from 'prop-types';
import arrowIcon from '../assets/arrow-right.svg'; // Importa el archivo SVG

const ArrowButton = ({ text }) => {
  return (
    <div className="h-11 pl-5 pr-2.5 py-2.5 bg-black/50 rounded-lg shadow border custom-border backdrop-blur-[20px] justify-start items-center gap-2.5 inline-flex">
      <div className="text-white text-base font-medium leading-normal">
        {text}
      </div>
      <div className="h-6 justify-start items-center gap-2.5 flex">
        <img src={arrowIcon} alt="Arrow" className="w-6 h-6 mr-2" />
      </div>
    </div>
  );
};

// Definición de PropTypes
ArrowButton.propTypes = {
  text: PropTypes.string.isRequired, // Define que 'text' es una prop requerida de tipo string
};

export default ArrowButton;
