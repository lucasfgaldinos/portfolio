import { v4 as uuidv4 } from "uuid"
import CalculatorImg1 from "../assets/project-images/calculator/calculator-1.png"
import CalculatorImg2 from "../assets/project-images/calculator/calculator-2.png"
import CDUImg1 from "../assets/project-images/cdu/cdu-1.png"
import CDUImg2 from "../assets/project-images/cdu/cdu-2.png"
import CDUImg3 from "../assets/project-images/cdu/cdu-3.png"
import CDUImg4 from "../assets/project-images/cdu/cdu-4.png"
import CDUImg5 from "../assets/project-images/cdu/cdu-5.png"
import CDUImg6 from "../assets/project-images/cdu/cdu-6.png"
import CDUImg7 from "../assets/project-images/cdu/cdu-7.png"
import CDUImg8 from "../assets/project-images/cdu/cdu-8.png"
import CDUImg9 from "../assets/project-images/cdu/cdu-9.png"
import SorteioFacilImg1 from "../assets/project-images/sorteio-facil/sorteio-facil-1.png"
import SorteioFacilImg2 from "../assets/project-images/sorteio-facil/sorteio-facil-2.png"
import SorteioFacilImg3 from "../assets/project-images/sorteio-facil/sorteio-facil-3.png"
import SorteioFacilImg4 from "../assets/project-images/sorteio-facil/sorteio-facil-4.png"
import SorteioFacilImg5 from "../assets/project-images/sorteio-facil/sorteio-facil-5.png"
import SorteioFacilImg6 from "../assets/project-images/sorteio-facil/sorteio-facil-6.png"
import SuaLandingPageImg1 from "../assets/project-images/sua-landing-page/sua-landing-page-1.png"
import SuaLandingPageImg2 from "../assets/project-images/sua-landing-page/sua-landing-page-2.png"
import SuaLandingPageImg3 from "../assets/project-images/sua-landing-page/sua-landing-page-3.png"
import SuaLandingPageImg4 from "../assets/project-images/sua-landing-page/sua-landing-page-4.png"
import SuaLandingPageImg5 from "../assets/project-images/sua-landing-page/sua-landing-page-5.png"
import SuaLandingPageImg6 from "../assets/project-images/sua-landing-page/sua-landing-page-6.png"
import SuaLandingPageImg7 from "../assets/project-images/sua-landing-page/sua-landing-page-7.png"

export const projects = [
	{
		id: uuidv4(),
		name: "Cadastro de Usuários (Projeto Full Stack)",
		description: `Projeto Full Stack de Cadastro de Usuários, no qual desenvolvi
         inicialmente a API Restful (back-end) e, em seguida, a interface de usuário
         (front-end), integrando ambos. A aplicação possui diversas funcionalidades
         para garantir robustez e eficácia, como por exemplo: a validação para impedir o cadastro
         de e-mails ou números de telefone que já foram cadastrados no sistema.`,
		skillNames: [
			"Node.js",
			"npm",
			"express",
			"Prisma",
			"MongoDB",
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Styled-Components",
			"Biome"
		],
		links: {
			repository:
				"https://github.com/lucasfgaldinos/interface-cadastro-de-usuarios"
		},
		images: [
			{
				id: uuidv4(),
				img: CDUImg1
			},
			{
				id: uuidv4(),
				img: CDUImg2
			},
			{
				id: uuidv4(),
				img: CDUImg3
			},
			{
				id: uuidv4(),
				img: CDUImg4
			},
			{
				id: uuidv4(),
				img: CDUImg5
			},
			{
				id: uuidv4(),
				img: CDUImg6
			},
			{
				id: uuidv4(),
				img: CDUImg7
			},
			{
				id: uuidv4(),
				img: CDUImg8
			},
			{
				id: uuidv4(),
				img: CDUImg9
			}
		]
	},
	{
		id: uuidv4(),
		name: "Sua Landing Page",
		description: `Landing Page desenvolvida utilizando HTML, CSS e JavaScript,
      destacando-se por sua simplicidade, eficiência e design responsivo.
      A página inclui um link direto para o WhatsApp, facilitando a
      comunicação instantânea com os visitantes, além de um formulário
      para captação de contatos, garantindo uma experiência fluida e
      profissional para o usuário.`,
		skillNames: ["HTML", "CSS", "JavaScript"],
		links: {
			repository: "https://github.com/lucasfgaldinos/sua-landing-page",
			site: "https://sualandingpage.netlify.app/"
		},
		images: [
			{
				id: uuidv4(),
				img: SuaLandingPageImg1
			},
			{
				id: uuidv4(),
				img: SuaLandingPageImg2
			},
			{
				id: uuidv4(),
				img: SuaLandingPageImg3
			},
			{
				id: uuidv4(),
				img: SuaLandingPageImg4
			},
			{
				id: uuidv4(),
				img: SuaLandingPageImg5
			},
			{
				id: uuidv4(),
				img: SuaLandingPageImg6
			},
			{
				id: uuidv4(),
				img: SuaLandingPageImg7
			}
		]
	},
	{
		id: uuidv4(),
		name: "Sorteio Fácil",
		description: `Site desenvolvido com React para realizar o sorteio de nomes
      e números de forma rápida e fácil. Para sua construção, utilizei Vite,
         que otimizou a inicialização do projeto, Styled-Components para estilizar
         a aplicação, e Biome para garantir um código bem formatado e organizado.
      `,
		skillNames: [
			"HTML",
			"CSS",
			"JavaScript",
			"npm",
			"React",
			"Styled-Components",
			"Biome"
		],
		links: {
			repository: "https://github.com/lucasfgaldinos/sorteio-facil",
			site: "https://lucasfgaldinos.github.io/sorteio-facil/"
		},
		images: [
			{
				id: uuidv4(),
				img: SorteioFacilImg1
			},
			{
				id: uuidv4(),
				img: SorteioFacilImg2
			},
			{
				id: uuidv4(),
				img: SorteioFacilImg3
			},
			{
				id: uuidv4(),
				img: SorteioFacilImg4
			},
			{
				id: uuidv4(),
				img: SorteioFacilImg5
			},
			{
				id: uuidv4(),
				img: SorteioFacilImg6
			}
		]
	},
	{
		id: uuidv4(),
		name: "Calculadora",
		description: `Calculadora desenvolvida com React.
         Usei Vite para começar e algumas bibliotecas como Styled-Components,
         BiomeJS e Math.js.`,
		skillNames: [
			"HTML",
			"CSS",
			"JavaScript",
			"npm",
			"React",
			"Styled-Components",
			"Biome"
		],
		links: {
			repository: "https://github.com/lucasfgaldinos/calculadora",
			site: "https://lucasfgaldinos.github.io/calculadora/"
		},
		images: [
			{
				id: uuidv4(),
				img: CalculatorImg1
			},
			{
				id: uuidv4(),
				img: CalculatorImg2
			}
		]
	}
]
