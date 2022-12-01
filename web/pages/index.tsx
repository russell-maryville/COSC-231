import { useRouter } from "next/router";
import Button from "../components/Button";

export default function Index() {
	const router = useRouter();

	return (
		<>
			<div>
				<h1>Keepsake</h1>
				<h2>Welcome to Keepsake!</h2>
				<p>
					This app is a great way to store all of your contacts
					without having the trouble of carrying around business
					cards.
				</p>
				<h2>How it works:</h2>
				<ol>
					<li>
						Tap on the scan button to upload your business cards.
					</li>
					<li>
						Search for your contacts in your contact list.
					</li>
					<li>
						Share the contacts with the share button.
						</li>
				</ol>
				<Button onClick={() => router.push("/capture")}>Scan</Button>
			</div>
			<style jsx>{`
				h1,
				p,
				li {
					color: white;
					padding-left: 0.5em;
					font-size: 1.25em;
				}

				h1 {
					font-size: 6em;
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

				h2 {
					color: white;
					padding: .5em;
					font-size: 2em;
				}

				p {
					line-height: 3em;
					font-size: 1.25em;
					
				}

				ol {
					padding-bottom: 2em;
				}
				
			`}</style>
		</>
	);
}
