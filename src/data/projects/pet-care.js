import { v4 as uuidv4 } from "uuid"
import PetCareImg1 from "../../assets/project-images/petcare/petcare1.png"
import PetCareImg2 from "../../assets/project-images/petcare/petcare2.png"
import PetCareImg3 from "../../assets/project-images/petcare/petcare3.png"
import PetCareImg4 from "../../assets/project-images/petcare/petcare4.png"
import PetCareImg5 from "../../assets/project-images/petcare/petcare5.png"
import PetCareImg6 from "../../assets/project-images/petcare/petcare6.png"
import PetCareImg7 from "../../assets/project-images/petcare/petcare7.png"
import PetCareImg8 from "../../assets/project-images/petcare/petcare8.png"
import PetCareImg9 from "../../assets/project-images/petcare/petcare9.png"

export const petCare = {
	id: uuidv4(),
	name: "Landing Page PetCare",
	description: `Site desenvolvido com Next.js e TypeScript, utilizando
         Tailwind CSS para estilização, shadcn/ui para componentes, Lucide
         e Phosphor Icons para ícones modernos, Embla Carousel para carrosséis
         interativos, clsx para manipulação de classes, AOS para animações
         suaves e Biome.js para linting e formatação de código.`,
	skillNames: [
		"Next.js",
		"yarn",
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Shadcn UI",
		"Tailwind CSS",
		"Biome"
	],
	links: {
		repository: "https://github.com/lucasfgaldinos/petcare",
		site: "https://petcareoficial.netlify.app"
	},
	images: [
		{
			id: uuidv4(),
			img: PetCareImg1
		},
		{
			id: uuidv4(),
			img: PetCareImg2
		},
		{
			id: uuidv4(),
			img: PetCareImg3
		},
		{
			id: uuidv4(),
			img: PetCareImg4
		},
		{
			id: uuidv4(),
			img: PetCareImg5
		},
		{
			id: uuidv4(),
			img: PetCareImg6
		},
		{
			id: uuidv4(),
			img: PetCareImg7
		},
		{
			id: uuidv4(),
			img: PetCareImg8
		},
		{
			id: uuidv4(),
			img: PetCareImg9
		}
	]
}
