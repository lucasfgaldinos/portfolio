export type WorkExperience = {
  id: number;
  title: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

let id = 0;

export const workExperience: WorkExperience[] = [
  {
    id: ++id,
    title: "Desenvolvedor Full Stack",
    companyName: "Freelancer",
    startDate: "Jan 2024",
    endDate: null,
    description:
      "Desenvolvimento de aplicações web completas, atuando no front-end e back-end com interfaces responsivas, APIs, regras de negócio, modelagem de dados e integração com bancos relacionais e não relacionais.",
  },
  {
    id: ++id,
    title: "Porteiro",
    companyName: "Hemil Services",
    startDate: "Nov 2025",
    endDate: null,
    description:
      "Controle de acesso, atendimento ao público e organização de rotinas em condomínio residencial, fortalecendo comunicação clara, atenção aos detalhes e responsabilidade operacional.",
  },
  {
    id: ++id,
    title: "Eletricista",
    companyName: "LAS - Latin America Solar",
    startDate: "Out 2021",
    endDate: "Nov 2022",
    description:
      "Instalação elétrica de sistemas solares em equipe, conectando painéis, inversores e rede elétrica com foco em segurança, conformidade técnica e resolução de problemas em campo.",
  },
];
