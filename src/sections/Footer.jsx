import Telegram from '../assets/Telegram.svg';
import X from '../assets/X.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-black pt-10 md:pt-[80px]">
      {/* Div con logo y redes sociales (visible solo en móvil y tablet) */}
      <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 pb-10 lg:hidden px-4 md:px-12">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={Logo} alt="NOVA Real Chain" className="w-[99px] h-[32px]" />
        </div>
        {/* Redes sociales */}
        <div className="flex space-x-4 md:space-x-6 justify-center md:justify-end">
          <a
            href="#"
            className="h-10 w-10 p-1.5 flex justify-center items-center"
          >
            <img src={X} alt="X" className="h-auto w-auto" />
          </a>
          <a
            href="#"
            className="h-10 w-10 p-1.5 flex justify-center items-center"
          >
            <img src={Telegram} alt="Telegram" className="h-auto w-auto" />
          </a>
          <a
            href="#"
            className="h-10 w-10 p-1.5 flex justify-center items-center"
          >
            <img src={Youtube} alt="Youtube" className="h-auto w-auto" />
          </a>
          <a
            href="#"
            className="h-10 w-10 p-1.5 flex justify-center items-center"
          >
            <img src={Instagram} alt="Instagram" className="h-auto w-auto" />
          </a>
        </div>
      </div>

      {/* Espaciado entre el div de logo/socials y las columnas en tablet */}
      <div className="hidden md:block h-[24px] lg:hidden"></div>

      <div className="flex flex-wrap justify-between px-4 pb-6 md:px-12 lg:px-24 lg:pb-10 sm:pb-6">
        {/* Caja 1: Logo y Redes Sociales (visible solo en escritorio) */}
        <div className="flex flex-1 flex-col justify-between hidden lg:flex">
          {/* Logo */}
          <div className="self-stretch">
            <img
              src={Logo}
              alt="NOVA Real Chain"
              className="w-[99px] h-[32px]"
            />
          </div>

          {/* Redes sociales */}
          <div className="flex flex-row w-full">
            <a
              href="#"
              className="h-11 w-11 p-1.5 flex justify-center items-center"
            >
              <img src={X} alt="X" className="h-auto w-auto" />
            </a>
            <a
              href="#"
              className="h-11 w-11 p-1.5 flex justify-center items-center"
            >
              <img src={Telegram} alt="Telegram" className="h-auto w-auto" />
            </a>
            <a
              href="#"
              className="h-11 w-11 p-1.5 flex justify-center items-center"
            >
              <img src={Youtube} alt="Youtube" className="h-auto w-auto" />
            </a>
            <a
              href="#"
              className="h-11 w-11 p-1.5 flex justify-center items-center"
            >
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

        {/* Columna 2: BLOGS (oculta en móvil) */}
        <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex hidden sm:flex">
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

        {/* Columna 4: LEGAL (oculta en móvil) */}
        <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex hidden sm:flex">
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
      <div className="text-white/70 text-[13px] font-medium leading-[20px] border-t border-white/10 px-4 md:px-12 lg:px-24 pt-[24px] pb-[48px]">
        © 2024 NOVA Real Chain. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
