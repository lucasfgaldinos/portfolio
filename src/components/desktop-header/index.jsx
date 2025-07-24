import { useState } from "react"
import { TfiClose, TfiMenu } from "react-icons/tfi"
import { Header, HeaderLink, Menu, MenuButton } from "./styles"

export function DesktopHeader() {
	const [menuActive, setMenuActive] = useState(false)

	function menuChange() {
		if (!menuActive) {
			setMenuActive(true)
		} else {
			setMenuActive(false)
		}
	}

	return (
		<Header>
			<HeaderLink
				href="inicio"
				className="header-link-desktop"
				to="inicio"
				smooth={true}
				duration={1000}
			>
				Início
			</HeaderLink>
			<HeaderLink
				href="projetos"
				className="header-link-desktop"
				to="projects"
				smooth={true}
				duration={1000}
			>
				Projetos
			</HeaderLink>
			<HeaderLink
				href="habilidades"
				className="header-link-desktop"
				to="skills"
				smooth={true}
				duration={1000}
			>
				Habilidades
			</HeaderLink>
			<HeaderLink
				href="sobre"
				className="header-link-desktop"
				to="about"
				smooth={true}
				duration={1000}
			>
				Sobre
			</HeaderLink>
			<HeaderLink
				href="contatos"
				className="header-link-desktop"
				to="contacts"
				smooth={true}
				duration={1000}
			>
				Contatos
			</HeaderLink>

			<MenuButton onClick={menuChange}>
				{menuActive ? <TfiClose /> : <TfiMenu />}
			</MenuButton>

			<Menu $showMenu={menuActive}>
				<HeaderLink href="inicio" to="inicio" smooth={true} duration={1000}>
					Início
				</HeaderLink>
				<HeaderLink href="projetos" to="projects" smooth={true} duration={1000}>
					Projetos
				</HeaderLink>
				<HeaderLink
					href="habilidades"
					to="skills"
					smooth={true}
					duration={1000}
				>
					Habilidades
				</HeaderLink>
				<HeaderLink href="sobre" to="about" smooth={true} duration={1000}>
					Sobre
				</HeaderLink>
				<HeaderLink href="contatos" to="contacts" smooth={true} duration={1000}>
					Contatos
				</HeaderLink>
			</Menu>
		</Header>
	)
}
