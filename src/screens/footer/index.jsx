import { FooterContainer, Texts } from "./styles"

export function Footer() {
	return (
		<FooterContainer>
			<Texts>
				<p>
					Ícones de{" "}
					<a
						target="_blank"
						href="https://react-icons.github.io/react-icons/"
						rel="noreferrer"
					>
						react-icons
					</a>
					,{" "}
					<a target="_blank" href="https://icon-icons.com/" rel="noreferrer">
						icon-icons
					</a>{" "}
					e{" "}
					<a
						target="_blank"
						href="https://www.iconfinder.com/"
						rel="noreferrer"
					>
						iconfinder
					</a>{" "}
					foram usados neste site.
				</p>

				<a
					target="_blank"
					href="https://storyset.com/technology"
					rel="noreferrer"
				>
					Ilustrações de tecnologia por Storyset
				</a>

				<span>
					Desenvolvido por <b>Lucas Galdino</b>
				</span>
			</Texts>
		</FooterContainer>
	)
}
