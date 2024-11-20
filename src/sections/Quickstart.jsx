const Quickstart = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pb-24 px-4 sm:px-12 md:px-16 lg:px-0">
      <div className="flex flex-col items-start gap-4 mb-16">
        {/* Title */}
        <div className="text-white font-semibold 
          text-[30px] sm:text-[50px] 
          leading-normal sm:leading-[normal] 
          tracking-[-1.2px] sm:tracking-normal">
          How to join
        </div>
        {/* Subtitle */}
        <div className="text-white font-normal 
          text-[16px] sm:text-lg 
          leading-[24px] sm:leading-[27px] max-w-[798px]">
          In just a few clicks, you can start generating passive income effortlessly. Let your investments work for you while you sit back and enjoy the benefits!
        </div>
      </div>
      {/* Placeholder for Steps Image */}
      <div>Steps Image</div>
    </div>
  );
};

export default Quickstart;
