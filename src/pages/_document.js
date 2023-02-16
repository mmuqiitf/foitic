import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html
			lang="en"
			className="scroll-smooth"
			style={{ scrollBehavior: "smooth" }}
		>
			<Head>
				<link rel="icon" href="/cropped-foitic-1-150x150.png" sizes="32x32" />
				<link rel="icon" href="/cropped-foitic-1-150x150.png" sizes="192x192" />
				<link
					rel="apple-touch-icon-precomposed"
					href="/cropped-foitic-1-150x150.png"
				/>
				<meta
					name="msapplication-TileImage"
					content="/cropped-foitic-1-150x150.png"
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
