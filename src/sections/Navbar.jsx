import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="m-0 px-12 py-4 border-b border-white/10 sticky top-0 z-50 bg-[#0B030D] overflow-hidden">
      <nav className="flex justify-between items-center text-white">
        {/* Logo de la Empresa */}
        <div className="text-lg font-bold">
          <img src={logo} alt="NOVA Real Chain" className="w-[99px] h-[32px]" />
        </div>

        <div className="flex items-center rounded-full custom-border bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(204,204,204,0.09)_20.17%,rgba(255,255,255,0.11)_100%)] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_10px_10px_0px_rgba(0,0,0,0.10)] backdrop-blur-[10px]">
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

          <div className="relative flex items-center group">
            <a
              href="#"
              className="px-4 py-2 text-[13px] font-normal font-medium leading-[20px]"
            >
              Other Products
            </a>

            <div className="absolute left-0 top-full mt-1 w-40 bg-white shadow-lg rounded-md hidden group-hover:block">
              <a
                href="#"
                className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
              >
                RWA Nodes
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
              >
                RWA Real Estate
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
              >
                RWA Miners
              </a>
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
