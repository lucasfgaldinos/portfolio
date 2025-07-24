import { v4 as uuidv4 } from "uuid"
import SorteioFacilImg1 from "../../assets/project-images/sorteio-facil/sorteio-facil-1.png"
import SorteioFacilImg2 from "../../assets/project-images/sorteio-facil/sorteio-facil-2.png"
import SorteioFacilImg3 from "../../assets/project-images/sorteio-facil/sorteio-facil-3.png"
import SorteioFacilImg4 from "../../assets/project-images/sorteio-facil/sorteio-facil-4.png"
import SorteioFacilImg5 from "../../assets/project-images/sorteio-facil/sorteio-facil-5.png"
import SorteioFacilImg6 from "../../assets/project-images/sorteio-facil/sorteio-facil-6.png"

export const sorteioFacil = {
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
}
