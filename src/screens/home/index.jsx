import { TypeAnimation } from "react-type-animation"
import StorysetIllustration from "../../assets/storyset-illustration.svg"
import { DesktopHeader } from "../../components/desktop-header"
import { Content, Info, Main, Picture } from "./styles"

export function Home() {
	return (
		<Main name="inicio">
			<DesktopHeader />
			<Content>
				<Info>
					<strong>Lucas Galdino</strong>
					<p>Entusiasta de tecnologia e apaixonado por programação</p>
					<div className="box-type-animation">
						<TypeAnimation
							sequence={[
								"Olá!😀👋 Seja Bem-vindo(a) ao meu Portfólio!",
								3000,
								"Sou Programador Full Stack",
								3000,
								"e Freelancer",
								3000
							]}
							speed={40}
							deletionSpeed={70}
							wrapper="span"
							cursor={true}
							repeat={Number.POSITIVE_INFINITY}
							style={{ display: "inline-block" }}
						/>
					</div>
				</Info>

				<Picture>
					<img
						src={StorysetIllustration}
						alt="Ilustração de Programação Storyset."
					/>
				</Picture>
			</Content>
		</Main>
	)
}
