import { useEffect } from "react"
import sr from "scrollreveal"
import { DesktopHeader } from "../../components/desktop-header"
import { Title } from "../../components/title"
import { A, Content, Main, Picture, Resume } from "./styles"

export function About() {
	useEffect(() => {
		sr().reveal(".picture", {
			origin: "left",
			opacity: 0,
			duration: 1500,
			distance: "50%"
		})
		sr().reveal(".resume", {
			origin: "bottom",
			opacity: 0,
			duration: 1500,
			distance: "10rem"
		})
	}, [])

	return (
		<Main name="about">
			<DesktopHeader />

			<Content>
				<Picture className="picture">
					<div />
				</Picture>

				<Resume className="resume">
					<Title>Programador Full Stack</Title>
					<p>
						Meu nome é Lucas Galdino e sou Programador Full Stack. Desde que me
						entendo por gente, sou apaixonado por tecnologia. Em 2023, conheci a
						programação e decidi que seria a profissão que eu escolheria para a
						vida. Desde então, venho sempre me desafiando com novos projetos
						para aprimorar minhas habilidades e buscando aprender cada vez mais
						sobre este fascinante mundo da programação.
					</p>
					<br />
					<p>
						Meu objetivo é continuar evoluindo como programador para me tornar
						um profissional excelente e requisitado, aprender novas tecnologias
						e contribuir para projetos incríveis. Estou animado para ver onde
						essa jornada como Dev me levará e como poderei impactar vidas
						transformando ideias em códigos.
					</p>
					<br />
					<p>
						Acredito que o grande diferencial de um profissional é se ele tem
						capacidade de se adaptar, dedicação e sede de aprendizado na área em
						que atua. Se você precisa de um Programador que realmente quer fazer
						a diferença, que tenha essas qualidades e esteja disposto a resolver
						problemas de verdade,{" "}
						<A href="/contatos" to="contacts" smooth={true} duration={1000}>
							entre em contato comigo
						</A>{" "}
						para começarmos a dar vida às suas ideias.
					</p>
				</Resume>
			</Content>
		</Main>
	)
}
