import logo from '../assets/logo.png';
import line from '../assets/line-h.svg';

const Navbar = () => {
  return (
    <div className="px-12 py-4 border-b border-white/10 sticky top-0 z-50 bg-[#0B030D]">
      <nav className="flex justify-between items-center text-white">
        {/* Logo de la Empresa */}
        <div className="text-lg font-bold">
          <img src={logo} alt="NOVA Real Chain" className="w-[99px] h-[32px]" />
        </div>

        <div className="flex items-center rounded-full border custom-border bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(204,204,204,0.09)_20.17%,rgba(255,255,255,0.11)_100%)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.10)] backdrop-blur-[10px]">
          <a
            href="#"
            className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px]"
          >
            Home
          </a>

          <a
            href="#"
            className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px]"
          >
            RWA Launchpad
          </a>

          <div className="relative flex items-center group z-50">
            <a
              href="#"
              className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px] z-50"
            >
              Other Products
            </a>

            <div className="absolute left-0 top-full mt-0 p-4 w-[182px] bg-[#040105] shadow-lg rounded-md hidden group-hover:block z-50 custom-border ">
              <div className="flex flex-col gap-1">
                
                <a
                  id="menu"
                  href="#"
                  className="block px-4 py-1.5 text-[13px] border-l-[1px] border-transparent text-white z-50 menu"
                >
                  RWA Nodes
                </a>
                <img src={line} alt="" />
                <a
                  id="menu"
                  href="#"
                  className="block px-4 py-2 text-[13px] border-l-[1px] border-transparent text-white z-50 menu"
                >
                  RWA Real Estate
                </a>
                <img src={line} alt="" />
                <a
                  id="menu"
                  href="#"
                  className="block px-4 py-2 text-[13px] border-l-[1px] border-transparent text-white z-50 menu"
                >
                  RWA Miners
                </a>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px]"
          >
            About Us
          </a>

          <a
            href="#"
            className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px]"
          >
            News
          </a>
        </div>

        {/* Botón Conectar Wallet */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Conectar Wallet
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
