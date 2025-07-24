import { v4 as uuidv4 } from "uuid"
import CDUImg1 from "../../assets/project-images/cdu/cdu-1.png"
import CDUImg2 from "../../assets/project-images/cdu/cdu-2.png"
import CDUImg3 from "../../assets/project-images/cdu/cdu-3.png"
import CDUImg4 from "../../assets/project-images/cdu/cdu-4.png"
import CDUImg5 from "../../assets/project-images/cdu/cdu-5.png"
import CDUImg6 from "../../assets/project-images/cdu/cdu-6.png"
import CDUImg7 from "../../assets/project-images/cdu/cdu-7.png"
import CDUImg8 from "../../assets/project-images/cdu/cdu-8.png"
import CDUImg9 from "../../assets/project-images/cdu/cdu-9.png"

export const cadastroDeUsuarios = {
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
}
