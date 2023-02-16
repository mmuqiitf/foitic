import { Encode_Sans_Condensed, Poppins } from "@next/font/google";
import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<>
			<style jsx global>{`
				html,
				body {
					font-family: ${poppins.style.fontFamily} !important;
					font-size: 1rem;
				}
			`}</style>
			<MainLayout font={poppins}>
				<Component {...pageProps} />;
			</MainLayout>
		</>
	);
}
