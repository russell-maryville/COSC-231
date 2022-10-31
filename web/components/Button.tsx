import React from "react";

export default function Button({ children }: React.PropsWithChildren<{}>) {
	return (
		<>
			<button>{children}</button>
			<style jsx>{`
				button {
					background: #d9d9d9;
					color: black;
					padding: 1em 2em 1em 2em;
					text-transform: uppercase;
					font-size: medium;
					width: fit-content;
				}
			`}</style>
		</>
	);
}
