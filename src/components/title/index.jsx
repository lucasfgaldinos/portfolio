import { H1 } from "./styles"

export function Title({ children, ...props }) {
	return <H1 {...props}>{children}</H1>
}
