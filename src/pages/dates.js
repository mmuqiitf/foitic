import DefaultHero from "@/components/DefaultHero";
import Head from "next/head";
import Link from "next/link";

import itenasLogoBg from "@/assets/images/itenas_logo_bg.png";

export default function Dates() {
	return (
		<>
			<Head>
				<title>FoITIC 2023 - Important Dates</title>
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
			<div style={{ paddingTop: "100px" }}>
				<DefaultHero scrollTo="topics">
					<h1 className="display-4 fw-bold">Call For Papers</h1>
					<p>
						FoITIC 2023 is the 4th International conference organized by Faculty
						of Industrial Technology Itenas Bandung. FoITIC 2023 is inviting
						researcher, engineers, goverment officers, company delegates and
						students (Bachelor, Master and Doctoral) to submit and present their
						research work/study. All accepted papers will be published in ISBN
						Conference Proceeding and selected presented papers (based on depth
						review) will be proposed to publish in an international journal
						indexed by Scopus.
					</p>
					<div className="d-grid gap-2 d-xl-flex justify-content-xl-center mb-3 mt-3">
						<Link
							href="#"
							target="_blank"
							className="btn btn-light btn-lg text-red fw-bold px-4 py-2 rounded-pill"
						>
							Register Now
						</Link>
					</div>
				</DefaultHero>

				<div
					id="topics"
					style={{
						backgroundImage: `url(${itenasLogoBg.src})`,
						backgroundPosition: "right center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundAttachment: "fixed",
					}}
				>
					<div className="section-title pt-5">
						<h3>Timeline</h3>
						<h2>Important Dates</h2>
					</div>

					<div className="container pb-5">
						<ul className="timeline">
							<li>
								<div className="direction-r">
									<div className="flag-wrapper">
										<span className="flag">Full Paper Submission</span>
										<span className="time-wrapper"></span>
									</div>
									<div className="desc fw-bold fs-6">
										<span>May 1, 2023</span>
									</div>
								</div>
							</li>
							<li>
								<div className="direction-l">
									<div className="flag-wrapper">
										<span className="flag">Notification of Acceptance</span>
										<span className="time-wrapper"></span>
									</div>
									<div className="desc fw-bold fs-6">
										<span>June 30, 2023</span>
										{/* <span className="text-danger">
											<s>October 1, 2021</s>
										</span> */}
									</div>
								</div>
							</li>
							<li>
								<div className="direction-r">
									<div className="flag-wrapper">
										<span className="flag">Final Registration</span>
										<span className="time-wrapper"></span>
									</div>
									<div className="desc fw-bold fs-6">August 11, 2023</div>
								</div>
							</li>
							<li>
								<div className="direction-l">
									<div className="flag-wrapper">
										<span className="flag">
											Camera Ready Paper and Presentation File
										</span>
										<span className="time-wrapper"></span>
									</div>
									<div className="desc fw-bold fs-6">August 31, 2023</div>
								</div>
							</li>
							<li>
								<div className="direction-r">
									<div className="flag-wrapper">
										<span className="flag">Conference Date</span>
										<span className="time-wrapper"></span>
									</div>
									<div className="desc fw-bold fs-6">September 12-13, 2023</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
