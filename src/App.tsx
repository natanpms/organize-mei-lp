import { Button } from "@headlessui/react";
import { Footer } from "./components/Footer";
import { Tabs } from "./components/Tabs";
import { IPhoneX } from "react-device-frames";
import organizeMei from "./assets/organize-mei.jpg";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="py-6">
        <Navbar
          navItems={[
            { name: "Home", link_to: "#" },
            { name: "Sobre", link_to: "#" },
            { name: "Utilidade", link_to: "#" },
            { name: "Contatos", link_to: "#" },
          ]}/>
      </div>
      {/* seção tabs */}
      <section className="container mx-auto py-6 md:py-12 w-full">
        <div className="flex flex-col justify-center items-center px-6 gap-6">
          <h2 className="text-2xl tracking-wide font-bold text-[#252b42]">
            Por que usar OrganizeMEI?
          </h2>
          <div className="w-full">
            <Tabs
              items={[
                {
                  title: "Gestão financeira simplificada",
                  content:
                    "Registre receitas e despesas, categorize suas movimentações e acompanhe o saldo do seu negócio em tempo real, tudo de forma intuitiva e sem complicação.",
                },
                {
                  title: "Cobranças automáticas e PIX integrado",
                  content:
                    "Envie cobranças diretamente aos seus clientes com código PIX, acompanhe pagamentos e reduza a inadimplência de forma prática e rápida.",
                },
                {
                  title: "Controle completo do seu perfil",
                  content:
                    "Gerencie facilmente suas informações e dados do seu negócio com um sistema seguro e personalizado para microempreendedores.",
                },
                 {
                  title: "Feito sob medida para MEIs",
                  content:
                    "Desenvolvido especialmente para microempreendedores, o OrganizeMEI oferece apenas o que você precisa, nada de funções complexas ou confusas.",
                },
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
