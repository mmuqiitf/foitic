import DefaultHero from "@/components/DefaultHero";
import Head from "next/head";
import Link from "next/link";

import itenasLogoBg from "@/assets/images/itenas_logo_bg.png";
import committees from "../data/committees.json";

export default function Committees() {
	return (
		<>
			<Head>
				<title>FoITIC 2023 - Committees</title>
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
					<h1 className="display-4 fw-bold">Committees</h1>
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
			</div>

			<div
				id="committees"
				style={{
					backgroundImage: `url(${itenasLogoBg.src})`,
					backgroundPosition: "right center",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				}}
			>
				<div className="section-title mt-5">
					<h3>Organizing</h3>
					<h2>Organizing Committees</h2>
				</div>
				<div className="container">
					<ul className="fa-ul">
						<li className="custom-list">
							<span className="fa-li">
								<i className="fas fa-user-tie"></i>
							</span>
							<strong>Chairman :</strong>
							{committees
								.filter((committee) => committee.position === "Chairman")
								.map((committee) => (
									<div className="row" key={committee.id}>
										<div className="col-md-4 commitees-name">
											<p>{committee.name}</p>
										</div>
										<div className="col-md-4 commitees-from">
											<p>{committee.affiliations}</p>
										</div>
									</div>
								))}
						</li>
						<li className="custom-list">
							<span className="fa-li">
								<i className="fas fa-user-graduate"></i>
							</span>
							<strong>Co-Chairman :</strong>
							{committees
								.filter((committee) => committee.position === "Co-Chairman")
								.map((committee) => (
									<div className="row" key={committee.id}>
										<div className="col-md-4 commitees-name">
											<p>{committee.name}</p>
										</div>
										<div className="col-md-4 commitees-from">
											<p>{committee.affiliations}</p>
										</div>
									</div>
								))}
						</li>
						<li className="custom-list">
							<span className="fa-li">
								<i className="fas fa-users"></i>
							</span>
							<strong>Members :</strong>
							{committees
								.filter((committee) => committee.position === "Members")
								.map((committee) => (
									<div className="row" key={committee.id}>
										<div className="col-md-4 commitees-name">
											<p>{committee.name}</p>
										</div>
										<div className="col-md-4 commitees-from">
											<p>{committee.affiliations}</p>
										</div>
									</div>
								))}
						</li>
					</ul>
				</div>
				<div className="section-title mt-5">
					<h3>Advisory</h3>
					<h2>Advisory Board</h2>
				</div>
				<div className="container">
					<ul className="fa-ul">
						<li className="custom-list">
							<span className="fa-li">
								<i className="fas fa-user-tie"></i>
							</span>
							{committees
								.filter((committee) => committee.position === "Advisory")
								.map((committee) => (
									<div className="row" key={committee.id}>
										<div className="col-md-4 commitees-name">
											<p>{committee.name}</p>
										</div>
										<div className="col-md-4 commitees-from">
											<p>
												{/* if committee.affiliations is array then add enter */}
												{Array.isArray(committee.affiliations)
													? committee.affiliations.map((affiliation) => (
															<span key={affiliation}>
																{affiliation}
																<br />
															</span>
													  ))
													: committee.affiliations}
											</p>
										</div>
									</div>
								))}
						</li>
					</ul>
				</div>
				<div className="section-title mt-5">
					<h3>National Scientific</h3>
					<h2>National Scientific Committees</h2>
				</div>
				<div className="container">
					<ul className="fa-ul">
						<li className="custom-list">
							<span className="fa-li">
								<i className="fas fa-user-tie"></i>
							</span>
							{committees
								.filter(
									(committee) => committee.position === "National Scientific"
								)
								.map((committee) => (
									<div className="row" key={committee.id}>
										<div className="col-md-4 commitees-name">
											<p>{committee.name}</p>
										</div>
										<div className="col-md-4 commitees-name">
											<p>{committee.program}</p>
										</div>
										<div className="col-md-4 commitees-from">
											<p>{committee.affiliations}</p>
										</div>
									</div>
								))}
						</li>
					</ul>
				</div>
				<div className="section-title mt-5">
					<h3>International Scientific</h3>
					<h2>International Scientific Committees</h2>
				</div>
				<div className="container">
					<ul className="fa-ul">
						<li className="custom-list">
							<span className="fa-li">
								<i className="fas fa-user-tie"></i>
							</span>
							{committees
								.filter(
									(committee) =>
										committee.position === "International Scientific"
								)
								.map((committee) => (
									<div className="row" key={committee.id}>
										<div className="col-md-4 commitees-name">
											<p>{committee.name}</p>
										</div>
										<div className="col-md-4 commitees-from">
											<p>{committee.affiliations}</p>
										</div>
									</div>
								))}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
