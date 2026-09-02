import htmlCssGitGithubImg from "@/assets/certificates/html-css-git-github.png";
import javascriptIntermediarioImg from "@/assets/certificates/javascript-intermediario.png";
import nodeJavascriptAvancadoImg from "@/assets/certificates/node-javascript-avancado.png";
import reactCssAvancadoImg from "@/assets/certificates/react-css-avancado.png";
import typescriptBackendImg from "@/assets/certificates/typescript-backend.png";
import typescriptIntegracaoImg from "@/assets/certificates/typescript-integracao.png";
import workanaImg from "@/assets/certificates/workana.png";

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  description: string;
  skills: string[];
  img: string;
};

export const certificates: Certificate[] = [
  {
    title: "HTML, CSS, Git e GitHub",
    issuer: "DevClub",
    date: "Maio de 2025",
    description:
      "Fundamentos sólidos de interfaces web, versionamento de código e colaboração.",
    skills: ["HTML", "CSS", "Git"],
    img: htmlCssGitGithubImg,
  },
  {
    title: "JavaScript Intermediário",
    issuer: "DevClub",
    date: "Maio de 2025",
    description:
      "Consolidação dos fundamentos da linguagem e desenvolvimento de soluções interativas.",
    skills: ["JavaScript", "Lógica"],
    img: javascriptIntermediarioImg,
  },
  {
    title: "React e CSS Avançado",
    issuer: "DevClub",
    date: "Maio de 2025",
    description:
      "Criação de interfaces modernas e responsivas com React e técnicas avançadas de CSS.",
    skills: ["React", "CSS"],
    img: reactCssAvancadoImg,
  },
  {
    title: "JavaScript Avançado e Node.js",
    issuer: "DevClub",
    date: "Maio de 2025",
    description:
      "Aprofundamento em JavaScript e desenvolvimento de aplicações no ambiente Node.js.",
    skills: ["JavaScript", "Node.js"],
    img: nodeJavascriptAvancadoImg,
  },
  {
    title: "TypeScript — Integração Full Stack",
    issuer: "DevClub",
    date: "Janeiro de 2025",
    description:
      "Uso de TypeScript na integração entre as diferentes camadas de aplicações full stack.",
    skills: ["TypeScript", "Full Stack"],
    img: typescriptIntegracaoImg,
  },
  {
    title: "TypeScript para Back-end",
    issuer: "DevClub",
    date: "Setembro de 2025",
    description:
      "Aplicação de TypeScript no desenvolvimento de back-end e construção do DevBills.",
    skills: ["TypeScript", "Back-end"],
    img: typescriptBackendImg,
  },
  {
    title: "The Accelerator",
    issuer: "Workana",
    description:
      "Certificação em trabalho remoto, relacionamento com clientes e atuação profissional independente.",
    skills: ["Freelancer", "Trabalho remoto"],
    img: workanaImg,
  },
];
