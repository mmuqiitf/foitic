import Head from "next/head";
import Image from "next/image";
import FlipCountdown from "@rumess/react-flip-countdown";
import { FaCloudDownloadAlt, FaBook } from "react-icons/fa";

import HomeHero from "@/components/HomeHero";

import logoSupportedBy1 from "@/assets/images/supported-by/Logo1.png";
import logoSupportedBy2 from "@/assets/images/supported-by/Logo2.png";
import logoSupportedBy4 from "@/assets/images/supported-by/Logo4.png";
import logoSupportedBy5 from "@/assets/images/supported-by/Logo5.png";
import logoSupportedBy6 from "@/assets/images/supported-by/Logo6.png";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					FoITIC 2023 - The 4th Faculty of Industrial Technology International
					Congress (FoITIC) 2023
				</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					content='FoITIC is Faculty of Industrial Technology International Congress 2023 (FoITIC 2023), which will be held in September 12-13, 2023. The theme of FoITIC 2023 is "Development of Multidisciplinary Science and Engineering for Enhancing of University Innovation and Reputation".'
					name="description"
				/>
				<meta
					content="FoITIC 2023, FOITIC ITENAS, FOITIC, FOITIC 2023, ITENAS, Itenas, Institut Teknologi Nasional Bandung, ITENAS Bandung, Faculty of Industrial Technology International Congress, Fakultas Teknologi Industri ITENAS, Fakultas Teknologi Industri, Fakultas Teknologi Industri ITENAS Bandung"
					name="keywords"
				/>
			</Head>
			<div>
				<HomeHero />
				<div className="container-fluid bg-dark text-light p-5">
					<div className="col-md-12 countdown">
						<h1>COMING SOON</h1>
						<FlipCountdown
							hideYear
							hideMonth
							theme="dark"
							size="large"
							endAt={"2023-09-12 00:00:00"}
						/>
					</div>
				</div>

				<div className="container my-5">
					<p>
						On behalf of the Faculty of Industrial Technology, Institut
						Teknologi Nasional (Itenas) Bandung – Indonesia, we would like to
						cordially invite you to Faculty of Industrial Technology
						International Congress 2023 (FoITIC 2023), which will be held in
						September 12-13, 2023. The theme of FoITIC 2023 is “Development of
						Multidisciplinary Science and Engineering for Enhancing of
						University Innovation and Reputation”.
					</p>

					<p>
						The aim of the Congress is inviting academics, researchers,
						engineers, government officers, company delegates and students from
						the field of industrial technology and other disciplines (such as
						electrical, mechanical, industrial, chemical, informatics, civil,
						architect, physics, environment, social, economic, design and etc.),
						to gather, present and share the results of their research.
					</p>
				</div>

				<div className="section-title pb-0">
					<h3>For Event</h3>
				</div>
				<div className="section-title mb-4">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<a
								href="/images/Virtual-zoom.jpeg"
								target="_blank"
								className="btn btn-sm mt-3 btn-primary fw-bold no-underline rounded-pill px-4 py-2"
							>
								Zoom Virtual Background <FaCloudDownloadAlt size={"17px"} />
							</a>
							<a
								href="/documents/FOITIC Program 28-29 Oct 271021 sore.pdf"
								target="_blank"
								className="btn btn-sm mt-3 btn-primary fw-bold no-underline rounded-pill px-4 py-2"
							>
								Event Rundown <FaCloudDownloadAlt size={"17px"} />
							</a>
						</div>
					</div>
				</div>

				<div className="section-title pb-0">
					<h3>Supported</h3>
					<h2>Supported By</h2>
				</div>
				<div id="clients" className="clients section-bg">
					<div className="container" data-aos="zoom-in">
						<div className="row justify-content-center">
							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<Image src={logoSupportedBy1} className="img-fluid" alt="" />
							</div>

							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<Image src={logoSupportedBy2} className="img-fluid" alt="" />
							</div>

							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<Image src={logoSupportedBy4} className="img-fluid" alt="" />
							</div>

							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<Image src={logoSupportedBy5} className="img-fluid" alt="" />
							</div>

							<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
								<Image src={logoSupportedBy6} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="section-title mt-5 pb-0">
					<h3>Publication</h3>
					<h2>Publication</h2>
				</div>
				<div className="container mb-3">
					<p>
						Selected papers of FoITIC will be published into either one of the
						accredited national journals below based on their topics:
					</p>
					<ul className="fa-ul">
						<li className="paper-list">
							<span className="fa-li me-2">
								<FaBook />
							</span>
							<Link
								href="https://ejurnal.itenas.ac.id/index.php/elkomika"
								target="_blank"
							>
								ELKOMIKA: Jurnal Teknik Energi Elektrik, Teknik Telekomunikasi,
								& Teknik Elektronika (SINTA 2| ISSN (Print): 2338-8323 | ISSN
								(Online): 2459-9638)
							</Link>
						</li>
						<li className="paper-list">
							<span className="fa-li me-2">
								<FaBook />
							</span>
							<Link
								href="https://ejurnal.itenas.ac.id/index.php/lingkungan"
								target="_blank"
							>
								Jurnal Reka Lingkungan (SINTA 3 | ISSN (Print): 2337-6228 | ISSN
								(Online): 2722-6077)
							</Link>
						</li>
						<li className="paper-list">
							<span className="fa-li me-2">
								<FaBook />
							</span>
							<Link
								href="https://ejurnal.itenas.ac.id/index.php/mindjournal"
								target="_blank"
							>
								MIND (Multimedia Artificial Intelligent Networking Database)
								Journal ( SINTA 4 | ISSN (Print): 2338-8323 | ISSN (Online):
								2528-0902)
							</Link>
						</li>
						<li className="paper-list">
							<span className="fa-li me-2">
								<FaBook />
							</span>
							<Link
								href="https://ejurnal.itenas.ac.id/index.php/rekayasahijau"
								target="_blank"
							>
								Rekayasa Hijau: Jurnal Teknologi Ramah Lingkungan (SINTA 5 |
								ISSN (Print): 2550-1070 | ISSN (Online): 2579-4264)
							</Link>
						</li>
					</ul>
					<div className="row">
						<p>
							Author(s) can also publish in Scopus indexed AIP Conference
							Proceedings by paying additional charges.
							<br />
							<Link
								href="https://aip.scitation.org/apc/authors/preppapers"
								target="_blank"
								className="btn btn-sm mt-3 btn-primary fw-bold no-underline rounded-pill px-4 py-2"
							>
								Proceeding Template
							</Link>
						</p>
						<p>
							If author(s) is willing to publish in Scopus Indexed AIP
							Conference Proceedings, he or she has to pay the additional
							publication fee of $100 per paper.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
