import { useEffect } from "react"
import sr from "scrollreveal"
import { DesktopHeader } from "../../components/desktop-header"
import { FlipCard } from "../../components/flip-card"
import { Title } from "../../components/title"
import { skills } from "../../data/skills"
import { CardContainer, Content, Main } from "./styles"

export function Skills() {
	useEffect(() => {
		sr().reveal(".flip-card", {
			scale: 0.5,
			delay: 100,
			duration: 500
		})
	}, [])

	return (
		<Main name="skills">
			<DesktopHeader />

			<Content>
				<Title $alignCenter>
					As habilidades, ferramentas e tecnologias que utilizo
				</Title>
				<CardContainer>
					{skills.length &&
						skills.map((item) => (
							<FlipCard className="flip-card" key={item.id} skill={item} />
						))}
				</CardContainer>
			</Content>
		</Main>
	)
}
