import "../styles/globals.css";

import { GlobalLayout } from "./_components/global-layout.jsx";
import { Chakra } from "./chakra.jsx";

const url = "http://localhost";

export const metadata = {
	metadataBase: new URL(url),
	title: "Daily-photo",
	description: "Get a daily challenge to create the best photos",
	author: [{ name: "The B-Brothers" }],
	keywords: [],
	icons: {
		icon: "/logo.png",
		shortcut: "/logo.png",
	},
	openGraph: {
		title: "Daily-photo",
		description: "Get a daily challenge to create the best photos",
		url,
		siteName: "Daily-photo",
		images: [],
		locale: "fr_FR",
		type: "website",
	  },
};

export default async function RootLayout( { children } ) {
	return (
		<html lang="fr">
			<body>
				<Chakra>
					<GlobalLayout>
						{children}
					</GlobalLayout>
				</Chakra>
			</body>
		</html>
	);
}
