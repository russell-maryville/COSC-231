import Camera from "../components/Camera";

export default function Capture() {
	const onCapture = (img: string, text: string[]) => {
		text.forEach((line) => console.log(line));
		alert(text.join("\n"));
		// TODO
	};

	return (
		<>
			<Camera onCapture={onCapture} />
		</>
	);
}
