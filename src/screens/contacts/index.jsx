import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { HiDownload } from "react-icons/hi"
import { IoArrowRedoOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { MdWhatsapp } from "react-icons/md"
import CVLucasGaldino from "../../assets/CV-Lucas_Galdino.pdf"
import { DesktopHeader } from "../../components/desktop-header"
import { Form } from "../../components/form"
import { Title } from "../../components/title"
import { Content, Div, Links, Main } from "./styles"

export function Contacts() {
	return (
		<Main name="contacts">
			<DesktopHeader />

			<Content>
				<Title $alignCenter>Contatos</Title>

				<div className="cv-div">
					<a title="Baixar currículo" href={CVLucasGaldino} download>
						Meu currículo <HiDownload />
					</a>
				</div>

				<Links>
					<div className="e-mail">
						<a href="mailto:lucasfgaldinos@outlook.com">
							<MdOutlineEmail /> Entre em contato comigo por e-mail{" "}
							<IoArrowRedoOutline />
						</a>
					</div>

					<div className="social-media">
						<ul>
							<li>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/lucas-fernando-galdino-da-silva/"
									title="LinkedIn"
								>
									<AiFillLinkedin />
								</a>
							</li>

							<li>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/lucasfgaldinos"
									title="GitHub"
								>
									<AiFillGithub />
								</a>
							</li>

							<li>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://wa.me/5516981272448"
									title="WhatsApp"
								>
									<MdWhatsapp />
								</a>
							</li>
						</ul>
					</div>
				</Links>
				<Div>
					<Title $alignCenter>Me envie uma mensagem</Title>
					<p>
						Se tiver alguma dúvida, quiser fazer um orçamento ou apenas
						conversar
					</p>
				</Div>

				<Form />
			</Content>
		</Main>
	)
}
