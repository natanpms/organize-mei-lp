import type { ReactNode } from "react";

type NavbarProps = {
  name: string;
  link_to: string;
};

type IconProps = {
  icon: ReactNode;
  link_to: string;
};

type Props = {
  firstColumn?: NavbarProps[];
  secondColumn?: NavbarProps[];
  icons?: IconProps[];
};

export function Navbar({
  firstColumn = [],
  secondColumn = [],
  icons = [],
}: Props) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-around items-center max-w-full gap-y-4 md:gap-y-0">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Entre em contato</h3>
          <p className="text-sm text-gray-500 mb-4">
            Venha conhecer mais sobre nós nas redes sociais!
          </p>
          <div className="flex space-x-4  text-xl">
            {icons.map((iconItem, index) => (
              <a
                key={index}
                href={iconItem.link_to}
                target="_blank"
              >
                {iconItem.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Informações
            </h3>
            <ul className="space-y-2 text-sm">
              {firstColumn.map((item, index) => (
                <li key={index}>
                  <a href={item.link_to} className="hover:text-[#3DA700] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Features</h3>
            <ul className="space-y-2 text-sm">
              {secondColumn.map((item, index) => (
                <li key={index}>
                  <a href={item.link_to} className="hover:text-[#3DA700] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
