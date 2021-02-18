import { h, FunctionComponent, RenderableProps } from "preact";// @ts-ignore
import jhFul from "/images/jake-hills/ful.jpg"; // @ts-ignore
import jhLrg from "/images/jake-hills/lrg.jpg"; // @ts-ignore
import jhMed from "/images/jake-hills/med.jpg"; // @ts-ignore
import jhSml from "/images/jake-hills/sml.jpg";


type Props = RenderableProps<{
}>


const LandingPage: FunctionComponent<Props> = () => {
	return (
		<>
			<img id="hero" srcSet={`${jhFul} 5073w, ${jhLrg} 2400w, ${jhMed} 1920w, ${jhSml} 640w`} />
			<div style={{height: "1000px"}}></div>
		</>
	);
}

export default LandingPage;