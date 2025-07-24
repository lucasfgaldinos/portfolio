import { v4 as uuidv4 } from "uuid"
import RFImg1 from "../../assets/project-images/registration-form/rf1.png"
import RFImg2 from "../../assets/project-images/registration-form/rf2.png"
import RFImg3 from "../../assets/project-images/registration-form/rf3.png"
import RFImg4 from "../../assets/project-images/registration-form/rf4.png"

export const registrationForm = {
	id: uuidv4(),
	name: "Registration Form",
	description: `Projeto de formulário de registro desenvolvido com React,
         Vite, TailwindCSS, ShadCN UI, React Hook Form e Zod. Criado com o
         objetivo de praticar e aprender tecnologias modernas de frontend,
         com foco em validação de formulários, acessibilidade e design responsivo.`,
	skillNames: [
		"Vite",
		"yarn",
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Zod",
		"Tailwind CSS",
		"Biome"
	],
	links: {
		repository: "https://github.com/lucasfgaldinos/registration-form",
		site: "https://lucasfgaldinos.github.io/registration-form"
	},
	images: [
		{
			id: uuidv4(),
			img: RFImg1
		},
		{
			id: uuidv4(),
			img: RFImg2
		},
		{
			id: uuidv4(),
			img: RFImg3
		},
		{
			id: uuidv4(),
			img: RFImg4
		}
	]
}
