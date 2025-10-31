import { FaInstagram } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { GrGithub } from "react-icons/gr";

export function Footer() {
  return (
    <footer className="w-full border border-t-gray-200">
      <div className="flex flex-col">
        <div className="bg-white p-4 w-full text-center ">
          <Navbar
            firstColumn={[
              { name: "Sobre nós", link_to: "#" },
              { name: "Career", link_to: "#" },
              { name: "We are hiring", link_to: "#" },
              { name: "Blog", link_to: "#" },
            ]}
            secondColumn={[
              { name: "Business Marketing", link_to: "#" },
              { name: "User Analytic", link_to: "#" },
              { name: "Live Chat", link_to: "#" },
              { name: "Unlimited Support", link_to: "#" },
            ]}
            icons={[
              { icon: <GrGithub className="hover:text-gray-500 transition-colors" size={30} />, link_to: "#" },
              { icon: <FaInstagram className="hover:text-pink-500 transition-colors" size={30} />, link_to: "#" },
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
