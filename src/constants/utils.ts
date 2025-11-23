import UpBlue from "../assets/up-blue.svg";
import imgLove from "../assets/love-img.svg";
import userImg from "../assets/pic-user.svg";

export const navItems = [
  { name: "Home", link_to: "#home" },
  { name: "Sobre", link_to: "#sobre" },
  { name: "Utilidade", link_to: "#utilidade" },
  { name: "Contatos", link_to: "#contatos" },
];

export const cardContent = [
  {
    id: 1,
    titulo: "Cadastro e gerenciamento de usuários",
    descricao:
      "Permite que MEIs se cadastrem com informações do negócio, façam login seguro e gerenciem seu perfil.",
    imgPath: UpBlue,
  },
  {
    id: 2,
    titulo: "Controle financeiro",
    descricao:
      "Registro de receitas e despesas, categorização, cálculo de saldo e geração.",
    imgPath: imgLove,
  },
  {
    id: 3,
    titulo: "Controle de cobranças",
    descricao:
      "Acompanhamento do status de cobrança (pago, pendente, vencido).Envia cobrança com código PIX para o cliente realizar o pagamento.",
    imgPath: userImg,
  },
];

export const tabs = [
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
];

export const firstColumnFooter = [
  { name: "Sobre nós", link_to: "#home" },
  { name: "Career", link_to: "#" },
  { name: "We are hiring", link_to: "#" },
  { name: "Blog", link_to: "#" },
];

export const secondColumn = [
  { name: "Business Marketing", link_to: "#" },
  { name: "User Analytic", link_to: "#" },
  { name: "Live Chat", link_to: "#" },
  { name: "Unlimited Support", link_to: "#" },
];
