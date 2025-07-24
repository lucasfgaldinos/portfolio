import RotateImg from "../../assets/icons/rotate-icon.png"
import { Back, FlipContainer, Flipper, Front } from "./styles"

export function FlipCard({ skill, ...props }) {
	return (
		<FlipContainer {...props}>
			<Flipper className="flipper">
				<Front>
					<img src={RotateImg} alt="Ícone de girar" />
					<img src={skill.icon} alt={`Ícone do ${skill.name}`} />
					<h2>{skill.name}</h2>
				</Front>

				<Back>
					<p>{skill.description}</p>
				</Back>
			</Flipper>
		</FlipContainer>
	)
}
