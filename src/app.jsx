import { About } from "./screens/about"
import { Contacts } from "./screens/contacts"
import { Footer } from "./screens/footer"
import { Home } from "./screens/home"
import { Projects } from "./screens/projects"
import { Skills } from "./screens/skills"

export function App() {
	return (
		<>
			<Home />
			<Projects />
			<Skills />
			<About />
			<Contacts />
			<Footer />
		</>
	)
}
