import Camera from "../components/Camera";
import { matchContact } from "../utils";

export default function Capture() {
	const onCapture = (img: string, text: string[]) => {
		text.forEach((line) => console.log(line));
		alert(`Contact information:\n${JSON.stringify(matchContact(text))}`);
	};

	return (
		<>
			<Camera onCapture={onCapture} />
		</>
	);
}
