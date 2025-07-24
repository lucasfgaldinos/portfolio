import { useEffect } from "react"
import sr from "scrollreveal"
import { DesktopHeader } from "../../components/desktop-header"
import { ProjectCard } from "../../components/project-card"
import { Title } from "../../components/title"
import { projects } from "../../data/projects"
import { Content, Main } from "./styles"

export function Projects() {
	useEffect(() => {
		sr().reveal(".project-card", {
			origin: "left",
			distance: "50%",
			opacity: 0,
			duration: 1500
		})
	}, [])
	return (
		<Main name="projects">
			<DesktopHeader />

			<Content>
				<Title $alignCenter>Meus principais projetos</Title>

				{projects.length &&
					projects.map((item) => (
						<ProjectCard
							className="project-card"
							key={item.id}
							title={item.name}
							description={item.description}
							skillNames={item.skillNames}
							images={item.images}
							links={item.links}
						/>
					))}
			</Content>
		</Main>
	)
}
