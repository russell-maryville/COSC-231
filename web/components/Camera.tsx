import { useEffect, useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import Button from "./Button";

type CameraProps = {
	onCapture: (img: string, text: string[]) => void;
};

export default function Camera({ onCapture }: CameraProps) {
	const canvas = useRef<HTMLCanvasElement>(null);
	const video = useRef<HTMLVideoElement>(null);

	const [settings, setSettings] = useState<MediaTrackSettings>();

	const worker = createWorker({
		logger: (msg) => console.log(msg),
	});

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then((stream) => {
				if (video.current) {
					setSettings(stream.getVideoTracks()[0].getSettings());
					video.current.srcObject = stream;
				}
			});
	}, [video]);

	const screenshot = () => {
		const context = canvas?.current?.getContext("2d");
		if (!canvas.current || !video.current || !context || !settings)
			return null;
		let width = settings.width || 0;
		let height = settings.height || 0;
		// width /= 2; // Downscale for better performance
		// height /= 2;
		canvas.current.width = width;
		canvas.current.height = height;
		context?.drawImage(video.current, 0, 0, width, height);
		return canvas.current.toDataURL("image/png", 1.0);
	};

	const capture = () => {
		const img = screenshot();
		if (img == null) return;
		worker
			.load()
			.then(() => worker.loadLanguage("eng"))
			.then(() => worker.initialize("eng"))
			.then(() => worker.recognize(canvas.current!))
			.then((result) =>
				onCapture(
					img,
					result.data.lines.map((line) => line.text)
				)
			)
			.catch((err) => alert(`error: could not recognize text in image.\n${err}`));
	};

	return (
		<>
			<video ref={video} autoPlay />
			<canvas ref={canvas} style={{ display: "none" }} />
			<Button onClick={capture}>Scan</Button>
		</>
	);
}
