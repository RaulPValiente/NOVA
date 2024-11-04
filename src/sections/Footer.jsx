import Telegram from '../assets/Telegram.svg';
import X from '../assets/X.svg';
import Instagram from '../assets/Instagram.svg';
import Youtube from '../assets/Youtube.svg';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between px-24 pt-24 mb-[40px] relative">
        {/* SVG centrado en la parte superior */}
        <svg xmlns="http://www.w3.org/2000/svg" width="897" height="6" viewBox="0 0 897 6" fill="none" className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <path opacity="0.5" d="M0 3H896.611" stroke="url(#paint0_linear_340_3252)" strokeWidth="5" strokeDasharray="1 23" />
          <defs>
            <linearGradient id="paint0_linear_340_3252" x1="0" y1="3" x2="897" y2="3.00001" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.485259" stopColor="white" stopOpacity="0.514741" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Caja 1: Logo y Redes Sociales */}
        <div className="flex flex-1 flex-col justify-between">
          {/* Caja superior */}
          <div className="self-stretch">
            {/* Contenido de la caja superior */}
            <img
              src={Logo}
              alt="NOVA Real Chain"
              className="w-[99px] h-[32px]"
            />
          </div>

          {/* Caja inferior con 4 logos */}
          <div className="flex flex-row w-full">
            <a href="#" className="h-11 w-11 p-1.5 flex justify-center items-center">
              <img src={X} alt="X" className="h-auto w-auto" />
            </a>
            <a href="#" className="h-11 w-11 p-1.5 flex justify-center items-center">
              <img src={Telegram} alt="Telegram" className="h-auto w-auto" />
            </a>
            <a href="#" className="h-11 w-11 p-1.5 flex justify-center items-center">
              <img src={Youtube} alt="Youtube" className="h-auto w-auto" />
            </a>
            <a href="#" className="h-11 w-11 p-1.5 flex justify-center items-center">
              <img src={Instagram} alt="Instagram" className="h-auto w-auto" />
            </a>
          </div>
        </div>

        {/* Columna 1: PRODUCTS */}
        <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-[var(--Text-Secondary, rgba(255, 255, 255, 0.70))] text-[13px] font-medium leading-[20px] mb-4">
            PRODUCTS
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                RWA Nodes
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                RWA Real Estate
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                RWA Miners
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-gray-500 text-[13px] font-medium leading-[20px]">
                RWA Collectibles
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-gray-500 text-[13px] font-medium leading-[20px]">
                RWA Lootboxes
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2: BLOGS */}
        <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-[var(--Text-Secondary, rgba(255, 255, 255, 0.70))] text-[13px] font-medium leading-[20px] mb-4">
            BLOGS
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                What are real-world <br /> assets (RWA)?
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                How to Make Money <br /> with NOVA Real Chain?
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                RWA Tokenization
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                Real Estate Tokenization
              </div>
            </div>
          </div>
        </div>

        {/* Columna 3: PROJECT RESOURCES */}
        <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-[var(--Text-Secondary, rgba(255, 255, 255, 0.70))] text-[13px] font-medium leading-[20px] mb-4">
            PROJECT RESOURCES
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                About Us
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                Team
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                Documentation
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                Contact
              </div>
            </div>
          </div>
        </div>

        {/* Columna 4: LEGAL */}
        <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-[var(--Text-Secondary, rgba(255, 255, 255, 0.70))] text-[13px] font-medium leading-[20px] mb-4">
            LEGAL
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
                Legal Disclaimer
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
              Terms & <br /> Conditions
              </div>
            </div>
            <div className="w-full px-4 py-1.5 justify-start items-start gap-2 inline-flex">
            <div className="grow shrink basis-0 text-[var(--Text-primary, var(--Icon-primary, #FFF))] text-[13px] font-medium leading-[20px]">
              Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea de derechos reservados */}
      <div className="text-white/70 text-[13px] font-medium leading-[20px] border-t border-white/10 border-t-[1px] px-[96px] pt-[24px] pb-[48px]">
        © 2024 NOVA Real Chain. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
