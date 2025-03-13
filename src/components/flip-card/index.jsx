import { Back, FlipContainer, Flipper, Front } from "./styles"

export function FlipCard({ skill, ...props }) {
	return (
		<FlipContainer {...props}>
			<Flipper className="flipper">
				<Front>
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
