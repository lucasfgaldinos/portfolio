import { useEffect } from "react"
import sr from "scrollreveal"
import { Container } from "./styles"

export function Form() {
	useEffect(() => {
		sr().reveal(".form", {
			scale: 0.5,
			opacity: 0,
			duration: 1500
		})
	}, [])

	return (
		<Container
			className="form"
			action="https://formspree.io/f/xrbpgekl"
			method="POST"
		>
			<label>
				Nome
				<input name="name" type="text" placeholder="Digite seu nome" required />
			</label>

			<label>
				E-mail
				<input
					name="e-mail"
					type="email"
					placeholder="Digite seu e-mail"
					required
				/>
			</label>

			<label>
				Assunto
				<input
					name="subject"
					type="text"
					placeholder="Digite o assunto"
					required
				/>
			</label>

			<label>
				Mensagem
				<textarea name="message" placeholder="Digite sua mensagem" required />
			</label>

			<input value={"Enviar"} type="submit" />
		</Container>
	)
}
