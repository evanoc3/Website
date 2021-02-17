import { h, FunctionComponent, RenderableProps } from "preact"; 


type Props = RenderableProps<{
}>;


const LandingPage: FunctionComponent<Props> = () => {
	return (
		<>
		<h1>Hello, World! Preact I am</h1>
		</>
	);
}

export default LandingPage;