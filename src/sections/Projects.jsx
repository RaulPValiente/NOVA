import SmallCards from '../components/SmallCards';
import Logo from '../assets/logo.svg';
import soonTablet from '../assets/responsive/coming_soon_tablet.svg';


const Projects = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pb-24 px-4 sm:px-12 lg:px-0">
      <div className="flex flex-col items-start gap-4 mb-16">
        {/* Texto grande: Current & Upcoming Sales */}
        <div className="text-white text-3xl font-semibold sm:text-[50px] sm:font-semibold">
          Current & Upcoming Sales
        </div>
        {/* Texto descriptivo */}
        <div className="text-white text-base font-normal leading-[27px] w-full">
          Explore our current and upcoming projects that are ready to scale and
          make a real impact in the world. Join us in supporting their growth!
        </div>
      </div>

      {/* Contenedor de las tarjetas con overflow-x-auto solo para móvil */}
      <div className="flex sm:flex-nowrap gap-3 justify-start w-full overflow-x-auto sm:overflow-x-visible">
        {/* Tarjeta 1 */}
        <div className="flex-shrink-0">
          <SmallCards
            imageSrc={soonTablet}
            logoSrc={Logo}
            productTitle="Product"
            productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
            fundraisingGoal="$100,000"
            currentInvestors="250"
            minimumInvestment="$100"
          />
        </div>
        {/* Tarjeta 2 */}
        <div className="flex-shrink-0">
          <SmallCards
            imageSrc={soonTablet}
            logoSrc={Logo}
            productTitle="Product"
            productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
            fundraisingGoal="$100,000"
            currentInvestors="250"
            minimumInvestment="$100"
          />
        </div>
        {/* Tarjeta 3: Mostrar solo en móvil y escritorio, ocultar en tablet */}
        <div className="block sm:hidden lg:block w-full">
          <SmallCards
            imageSrc={soonTablet}
            logoSrc={Logo}
            productTitle="Product"
            productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
            fundraisingGoal="$100,000"
            currentInvestors="250"
            minimumInvestment="$100"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
