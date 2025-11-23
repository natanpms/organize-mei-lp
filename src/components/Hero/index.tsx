import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="bg-[#3DA700]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl text-left md:text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Simplifique a gestão financeira e de cobranças do seu
          microempreendimento
        </h1>
        <p className="mb-8 text-lg text-left font-normal text-white lg:text-xl sm:px-16 lg:px-48 ">
          O OrganizeMEI é um sistema web que ajuda microempreendedores a
          gerenciar seu negócio de forma simples e eficiente, permitindo
          controlar receitas e despesas, enviar cobranças e acompanhar
          pagamentos, tudo em um só lugar que substitui planilhas e anotações
          manuais.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="https://robertacacemiro.github.io/MeuPortfolio/"
            target="_blank"
            className="flex justify-center items-center gap-2 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#7ace49] hover:scale-105 transition-transform focus:ring-4"
          >
            Saiba quem está por trás do projeto
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
