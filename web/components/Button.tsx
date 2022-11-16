import React from "react";

export default function Button({
	children,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<>
			<button {...props}>{children}</button>
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
