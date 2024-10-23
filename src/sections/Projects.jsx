import SmallCards from '../components/SmallCards';
import Logo from '../assets/token.png';
import Default from '../assets/Default.svg';

const Projects = () => {
  return (
    <div className="w-[1200px] max-w-[1200px] mx-auto pb-24">
      <div className="flex flex-col items-start gap-4 mb-16">
        <div className="text-white text-[50px] font-semibold ">
          Current & Upcoming Sales
        </div>
        <div className="text-white text-lg font-normal leading-[27px] max-w-[798px]">
          Explore our current and upcoming projects that are ready to scale and
          make a real impact in the world. Join us in supporting their growth!
        </div>
      </div>

      <div className="flex items-center gap-3">
        <SmallCards
          imageSrc={Default}
          logoSrc={Logo}
          productTitle="Product"
          productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
          fundraisingGoal="$100,000"
          currentInvestors="250"
          minimumInvestment="$100"
        />
        <SmallCards
          imageSrc={Default}
          logoSrc={Logo}
          productTitle="Product"
          productDescription="Make your finances work for you with the power of AI. From tracking expenses to planning investments, gain insights."
          fundraisingGoal="$100,000"
          currentInvestors="250"
          minimumInvestment="$100"
        />
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
  );
};

export default Projects;
