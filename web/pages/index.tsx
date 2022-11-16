import { useRouter } from "next/router";
import Button from "../components/Button";

export default function Index() {
	const router = useRouter();

	return (
		<>
			<div>
				<h1>Keepsake</h1>
				<p>Welcome to Keepsake!</p>
				<p>
					This app is a great way to store all of your contacts
					without having the trouble of carrying around business
					cards.
				</p>
				<p>How it works:</p>
				<ol>
					<li>
						Tap on the scan button to upload your business cards.
					</li>
					<li>Search for your contacts in your contact list.</li>
					<li>Share the contacts with the share button.</li>
				</ol>
				<Button onClick={() => router.push("/capture")}>Scan</Button>
			</div>
			<style jsx>{`
				h1,
				p,
				li {
					color: white;
					text-align: center;
				}

				h1 {
					font-size: xxx-large;
				}

				div {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				h1 {
					padding: 0.5em;
					text-transform: uppercase;
				}

				p {
					line-height: 3em;
				}

				ol {
					padding-bottom: 2em;
				}
			`}</style>
		</>
	);
}
