import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

type NavItem = {
  name: string;
  link_to: string;
};

type NavbarProps = {
  navItems?: NavItem[];
};

export function Navbar({ navItems }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          isOpenSideBar ? "hidden" : "fixed"
        } left-1/2 -translate-x-1/2 ${
          isScrolled ? "bg-white" : "bg-[#3DA700]"
        }  z-20 transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "shadow-xl rounded-full top-4 scale-95 opacity-95"
            : "top-0 scale-100 opacity-100"
        }`}
        style={{ maxWidth: "1100px", width: "90%" }}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <h1
            className={`text-xl lg:text-3xl font-bold ${
              isScrolled ? "text-[#3DA700]" : "text-white"
            } `}
          >
            OrganizeMEI
          </h1>

          <ul className="hidden lg:flex space-x-8">
            {navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link_to}
                  className={`text-base tracking-wide  ${
                    isScrolled ? "text-[#3DA700]" : "text-white"
                  }  hover:underline underline-offset-8  transition-colors`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="https://organizemei-production.up.railway.app/login"
              target="_blank"
            >
              <Button className="bg-[#3DA700] hover:cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Entrar
              </Button>
            </a>
          </div>

          <div className="block lg:hidden">
            <button
              className={`hover:cursor-pointer ${
                isScrolled ? "text-gray-900" : "text-white"
              }  hover:bg-gray-100  hover:rounded-full`}
              onClick={() => setIsOpenSideBar(!isOpenSideBar)}
            >
              <RiMenu3Fill size={25} />
            </button>
          </div>
        </div>
      </nav>

      {/* sidebar mobile */}
      {isOpenSideBar && (
        <>
          <div
            className="fixed inset-0 bg-black/30 bg-opacity-40 z-10"
            onClick={() => setIsOpenSideBar(false)}
          ></div>

          <div className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-white z-20 shadow-lg animate-slideIn p-6 flex flex-col">
            <ul className="flex flex-col space-y-6 mt-10">
              {navItems?.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link_to}
                    className="block text-gray-700 hover:text-[#3DA700] text-lg transition-colors"
                    onClick={() => setIsOpenSideBar(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://organizemei-production.up.railway.app/login"
                  target="_blank"
                  onClick={() => setIsOpenSideBar(false)}
                >
                  <Button className="bg-[#3DA700] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors w-full">
                    Entrar
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}
