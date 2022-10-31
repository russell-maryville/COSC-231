import Head from "next/head";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<>
			<Head>
				<title>Keepsake</title>
			</Head>

			{children}
		</>
	);
}
