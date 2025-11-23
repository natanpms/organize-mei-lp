import { NavbarFooter } from "../NavbarFooter/NavbarFooter";
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { firstColumnFooter, secondColumn } from "../../constants/utils";

export function Footer() {
  return (
    <footer id="contatos" className="w-full border border-t-gray-200">
      <div className="flex flex-col">
        <div className="bg-white p-4 w-full text-center ">
          <NavbarFooter
            firstColumn={firstColumnFooter}
            secondColumn={secondColumn}
            icons={[
              {
                icon: (
                  <GrGithub
                    className="hover:text-gray-500 transition-colors"
                    size={30}
                  />
                ),
                link_to: "https://github.com/RobertaCacemiro",
              },
              {
                icon: (
                  <BsLinkedin
                    className="hover:text-blue-500 transition-colors"
                    size={30}
                  />
                ),
                link_to: "https://www.linkedin.com/in/r%C3%BAbia-cacemiro/",
              },
            ]}
          />
        </div>

        <div className="bg-[#3DA700] p-6 text-center">
          <small className="text-white text-base font-semibold">
            &copy; {new Date().getFullYear()} Organize MEI. Todos os direitos
            reservados
          </small>
        </div>
      </div>
    </footer>
  );
}
