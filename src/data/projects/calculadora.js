import { v4 as uuidv4 } from "uuid"
import CalculatorImg1 from "../../assets/project-images/calculator/calculator-1.png"
import CalculatorImg2 from "../../assets/project-images/calculator/calculator-2.png"

export const calculadora = {
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
