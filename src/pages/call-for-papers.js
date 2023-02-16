import DefaultHero from "@/components/DefaultHero";
import Head from "next/head";
import Link from "next/link";

import itenasLogoBg from "@/assets/images/itenas_logo_bg.png";

export default function CallForPapers() {
	return (
		<>
			<Head>
				<title>FoITIC 2023 - Call For Papers</title>
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
					<div className="section-title">
						<h3>List Topics</h3>
						<h2>List of Topics</h2>
						<p>
							The recommended topics for this conference are available below,
							but not limited to:
						</p>
					</div>

					<div className="container">
						<p className="fw-bold" style={{ fontSize: "20px" }}>
							General Topics (can be viewed from the multi field of sciences):
						</p>

						<ul className="fa-ul">
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-leaf"></i>
								</span>
								Ecosystem & Infrastructure
								<ol>
									<li>Technology education, Startup Accelerators, Workshops</li>
									<li>High-speed</li>
									<li>Internet Connectivity, Simulation Labs.</li>
									<li>Digital Twin Technology</li>
									<li>Blockchain Technology</li>
									<li>Cyber Security</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-tachometer-alt"></i>
								</span>
								Engineering
								<ol>
									<li>Transportation, Design, Nanotechnology</li>
									<li>
										Enterprise Resource Planning (ERP), Productivity (Cost,
										Value, Addition)
									</li>
									<li>Robotics</li>
									<li>
										Smart Manufacturing & Intelligent Manufacturing Control
									</li>
									<li>Human-Machine Cooperation</li>
									<li>Information and Communication Technology (ICT)</li>
									<li>Instrumentation</li>
									<li>Cyber Physical System</li>
									<li>Internet of Things, Smart City, Smart Home</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-check-square"></i>
								</span>
								Efficiency
								<ol>
									<li>Integrated Systems, Internet of Things</li>
									<li>Cloud Computing, Big Data</li>
									<li>Industrial Internet of Things</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-industry"></i>
								</span>
								Manufacturing Operations & Performance
								<ol>
									<li>Industrial Data Analytics</li>
									<li>3D Printing, Nanotechnology</li>
									<li>Process Integration</li>
									<li>Instrumentation & Automation</li>
									<li>Decision Support System & Expert System</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-award"></i>
								</span>
								Competitiveness & Quality
								<ol>
									<li>Alternate (New and Renewable) Energy Sources</li>
									<li>Power Distribution System</li>
									<li>Smart Energy & Distributed Energy Resources</li>
									<li>Energy & Utilities Management</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-warehouse"></i>
								</span>
								Logistics
								<ol>
									<li>Augmented/Virtual Reality</li>
									<li>Autonomous Systems</li>
									<li>Business Model Innovation</li>
									<li>Business Intelligence and Data Mining</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-university"></i>
								</span>
								Education Technology
								<ol>
									<li>New Delivery Systems</li>
									<li>Warehousing and Predictive Analytics</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-tint"></i>
								</span>
								Oil and Gas
								<ol>
									<li>Exploration & Data Analysis</li>
									<li>Production & Process Monitoring</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-atom"></i>
								</span>
								Biomaterial
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-tractor"></i>
								</span>
								Agriculture Technology
							</li>
						</ul>

						<p className="fw-bold" style={{ fontSize: "20px" }}>
							Specific Topics:
						</p>

						<ul className="fa-ul">
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-bolt"></i>
								</span>
								Electrical Engineering
								<ol>
									<li>Power System</li>
									<li>Information System and Telecommunications</li>
									<li>Control System</li>
									<li>Instrumentation</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-cogs"></i>
								</span>
								Mechanical Engineering
								<ol>
									<li>Mechanical Structure, Design and Vibration</li>
									<li>Manufacturing</li>
									<li>Energy, Heat Transfer and Fluid Flow</li>
									<li>Material and Reliability</li>
									<li>Mechatronics and Control System</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-industry"></i>
								</span>
								Industrial Engineering
								<ol>
									<li>Optimization</li>
									<li>Supply Chain Management</li>
									<li>Ergonomics</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-atom"></i>
								</span>
								Chemical Engineering
								<ol>
									<li>Energy</li>
									<li>Chemical Engineering Reaction</li>
									<li>Separation and Purification</li>
									<li>Nanotechnology</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-code"></i>
								</span>
								Informatics
								<ol>
									<li>Artificial Intelligence</li>
									<li>Multimedia Technology</li>
									<li>Computer Communication and Network System</li>
									<li>Image Processing and Voice Recognition</li>
									<li>IT Security</li>
									<li>Fuzzy Logics and Neural Networks</li>
								</ol>
							</li>
							<li className="custom-list">
								<span className="fa-li">
									<i className="fas fa-project-diagram"></i>
								</span>
								Information System
								<ol>
									<li>Information System and Information Management</li>
									<li>Decision Support System</li>
									<li>Data Analytic and Database System</li>
									<li>Data Science</li>
									<li>IT governance</li>
									<li>Architecture Enterprise</li>
									<li>Knowledge Management</li>
									<li>IT Security Management and Risk Management</li>
								</ol>
							</li>
						</ul>
						<p style={{ fontSize: "20px" }}>
							<span className="fw-bold">Other topics:</span>
							<span className="">
								related to multidisciplinary technological applications.
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
