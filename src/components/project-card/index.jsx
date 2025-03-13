import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/zoom"
import { Keyboard, Navigation, Pagination, Zoom } from "swiper/modules"
import { skills } from "../../data/skills"
import { Container } from "./styles"

export function ProjectCard({
	title,
	description,
	skillNames,
	images,
	links,
	...props
}) {
	const allSkills = skillNames.map((skillName) => {
		const skillIcon = skills.find((item) => item.name === skillName)

		if (skillIcon) {
			return {
				id: skillIcon.id,
				name: skillIcon.name,
				icon: skillIcon.icon
			}
		}
	})

	return (
		<Container {...props}>
			<h2>{title}</h2>
			<p className="description">{description}</p>
			<div className="skills-div">
				{allSkills.length &&
					allSkills.map((item) => (
						<img
							key={item.id}
							src={item.icon}
							alt={`Ícone do ${item.name}.`}
							title={item.name}
						/>
					))}
			</div>

			{links.repository && (
				<p className="link">
					Link do repositório {"->"}{" "}
					<a target="_blank" href={links.repository} rel="noreferrer">
						{title}
					</a>
				</p>
			)}
			{links.site && (
				<p className="link">
					Link do site {"->"}{" "}
					<a target="_blank" href={links.site} rel="noreferrer">
						{title}
					</a>
				</p>
			)}

			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				keyboard={{
					enabled: true
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				zoom={true}
				modules={[Zoom, Keyboard, Pagination, Navigation]}
				className="mySwiper"
			>
				{images.length &&
					images.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="swiper-zoom-container">
								<img src={item.img} alt={`Imagem do projeto ${title}.`} />
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</Container>
	)
}
