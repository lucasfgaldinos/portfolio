import { v4 as uuidv4 } from "uuid"
import SuaLandingPageImg1 from "../../assets/project-images/sua-landing-page/sua-landing-page-1.png"
import SuaLandingPageImg2 from "../../assets/project-images/sua-landing-page/sua-landing-page-2.png"
import SuaLandingPageImg3 from "../../assets/project-images/sua-landing-page/sua-landing-page-3.png"
import SuaLandingPageImg4 from "../../assets/project-images/sua-landing-page/sua-landing-page-4.png"
import SuaLandingPageImg5 from "../../assets/project-images/sua-landing-page/sua-landing-page-5.png"
import SuaLandingPageImg6 from "../../assets/project-images/sua-landing-page/sua-landing-page-6.png"
import SuaLandingPageImg7 from "../../assets/project-images/sua-landing-page/sua-landing-page-7.png"

export const suaLandingPage = {
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
}
