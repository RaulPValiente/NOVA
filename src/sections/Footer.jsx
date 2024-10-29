import Telegram from '../assets/Telegram.svg/';
import X from '../assets/X.svg/';
import Instagram from '../assets/Instagram.svg/';
import Youtube from '../assets/Youtube.svg/';
import Logo from '../assets/logo.png/';

const Footer = () => {
  return (
    <div className="px-24 pt-[96px] pb-[48px]">
      <div className="flex flex-col gap-[40px]">
        <div className="flex justify-between">
          {/* Caja 1: Logo y Redes Sociales */}
          <div className="flex flex-1 flex-col justify-between">
            {/* Caja superior */}
            <div className="self-stretch">
              {/* Contenido de la caja superior */}
              <img
                src={Logo}
                alt="NOVA Real Chain"
                className="h-auto w-full w-[98.29px] h-8"
              />
            </div>

            {/* Caja inferior con 4 logos */}
            <div className="flex flex-row w-full">
              <img src={X} alt="X" className="h-auto w-auto p-1.5" />
              <img
                src={Telegram}
                alt="Telegram"
                className="h-auto w-auto p-1.5"
              />
              <img
                src={Youtube}
                alt="Youtube"
                className="h-auto w-auto p-1.5"
              />
              <img
                src={Instagram}
                alt="Instagram"
                className="h-auto w-auto p-1.5"
              />
            </div>
          </div>

          {/* Columna 1: PRODUCTS */}
          <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
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
          </div>

          {/* Columna 2: BLOGS */}
          <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
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
                  <div className="grow shrink basis-0 text-gray-500 text-[13px] font-medium leading-[20px]">
                    Real Estate Tokenization
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: PROJECT RESOURCES */}
          <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
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
                  <div className="grow shrink basis-0 text-gray-500 text-[13px] font-medium leading-[20px]">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: LEGAL */}
          <div className="flex-1 flex-col justify-start items-start gap-2 inline-flex">
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
                    Terms & Conditions
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
        </div>

        {/* Texto de abajo */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="text-[var(--Text-Secondary, rgba(255, 255, 255, 0.70))] text-[13px] font-normal leading-[20px]">
            © 2024 NOVA Real Chain. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
