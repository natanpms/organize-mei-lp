import { Button } from "@headlessui/react";
import { Footer } from "./components/Footer";
import { Tabs } from "./components/Tabs";
import { IPhoneX } from "react-device-frames";
import organizeMei from "./assets/organize-mei.jpg";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="container mx-auto py-6 md:py-12 w-full">
        <div className="flex flex-col justify-center items-center px-6 gap-6">
          <h2 className="text-2xl font-bold text-[#252b42]">Por que usar OrganizeMEI?</h2>
          <div className="w-full">
            <Tabs
              items={[
                { title: "Exemplo 1", content: "Conteúdo do Exemplo 1" },
                { title: "Exemplo 2", content: "Conteúdo do Exemplo 2" },
                { title: "Exemplo 3", content: "Conteúdo do Exemplo 3" },
              ]}
            />
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
