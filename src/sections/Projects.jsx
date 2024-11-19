import SmallCards from '../components/SmallCards';
import Logo from '../assets/token.png';
import Default from '../assets/Default.svg';

const Projects = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pb-24 px-4 sm:px-12 lg:px-0">
      <div className="flex flex-col items-start gap-4 mb-16">
        {/* Texto grande: Current & Upcoming Sales */}
        <div className="text-white text-3xl font-semibold sm:text-[50px] sm:font-semibold">
          Current & Upcoming Sales
        </div>
        {/* Texto descriptivo */}
        <div className="text-white text-base font-normal sm:text-lg sm:font-normal leading-[27px] max-w-[798px]">
          Explore our current and upcoming projects that are ready to scale and
          make a real impact in the world. Join us in supporting their growth!
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 justify-center sm:justify-start">
        {/* Tarjeta 1 */}
        <SmallCards
          imageSrc={Default}
          logoSrc={Logo}
          productTitle="Product"
          productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
          fundraisingGoal="$100,000"
          currentInvestors="250"
          minimumInvestment="$100"
        />
        {/* Tarjeta 2 */}
        <SmallCards
          imageSrc={Default}
          logoSrc={Logo}
          productTitle="Product"
          productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
          fundraisingGoal="$100,000"
          currentInvestors="250"
          minimumInvestment="$100"
        />
        {/* Tarjeta 3 (visible solo en escritorio) */}
        <div className="hidden lg:block">
          <SmallCards
            imageSrc={Default}
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
