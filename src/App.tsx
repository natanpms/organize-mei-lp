import { Button } from "@headlessui/react";
import { Footer } from "./components/Footer";
import { Tabs } from "./components/Tabs";
import { IPhoneX } from "react-device-frames";
import organizeMei from "./assets/organize-mei.jpg";
import { Navbar } from "./components/Navbar";

import Hero from "./components/Hero";
import { cardContent, navItems, tabs } from "./constants/utils";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="py-6 bg-[#3DA700]">
        <Navbar navItems={navItems} />
      </div>
      <Hero />

      <section
        id="sobre"
        className="flex flex-col lg:flex-row items-center justify-around w-full container mx-auto py-6 md:py-14 flex-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-4">
          {cardContent.map((val) => (
            <div
              key={val.id}
              className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col items-center w-full"
            >
              <div className="w-16 h-16 mb-4">
                <img
                  src={val?.imgPath}
                  alt={`Ícone ${val.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center space-y-2">
                <h3 className="text-lg text-center font-semibold mb-2">
                  {val.titulo}
                </h3>
                <p className="text-gray-600 text-left md:text-center">
                  {val.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* seção tabs */}
      <section
        id="utilidade"
        className="container mx-auto py-6 md:py-12 w-full"
      >
        <div className="flex flex-col justify-center items-center px-6 gap-6">
          <h2 className="text-2xl tracking-wide font-bold text-[#252b42]">
            Por que usar OrganizeMEI?
          </h2>
          <div className="w-full">
            <Tabs items={tabs} />
          </div>
        </div>
      </section>

      {/* seção iphone */}
      <section className="flex flex-col lg:flex-row items-center justify-around w-full container mx-auto py-6 md:py-12 flex-1">
        <div className="text-center md:text-left space-y-4 max-w-xl">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#252b42]">
            Pronto para iniciar?
          </h1>
          <p className="text-lg font-medium text-gray-500 px-2">
            Conheça o software que descomplica sua vida!
          </p>
          <a
            href="https://organizemei-production.up.railway.app/register"
            target="_blank"
          >
            <Button className="bg-[#3DA700] hover:cursor-pointer text-white px-12 py-3 rounded-lg hover:bg-green-600 transition-colors mt-4">
              Criar conta
            </Button>
          </a>
        </div>
        <div className="block w-36 md:w-60 mt-6 lg:mt-0">
          <IPhoneX screenshot={organizeMei} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
