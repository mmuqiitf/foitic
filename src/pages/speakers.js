import DefaultHero from "@/components/DefaultHero";
import Head from "next/head";
import Link from "next/link";

import IstvanSeresImage from "@/assets/images/keynotes-speakers/edited/Istvan-Seres.png";
import IstvanFarkasImage from "@/assets/images/keynotes-speakers/edited/Istvan-Farkas.jpeg";
import Image from "next/image";

export default function Speakers() {
	const speakers = [
		{
			id: 1,
			name: "Prof. István Farkas",
			affiliation: "Hungarian University of Agriculture and Life Sciences",
			nations: "Gödöllő - Hungary",
			image: IstvanFarkasImage,
		},
		{
			id: 2,
			name: "Prof. Soteris Kalogirou",
			affiliation: "-",
			nations: "-",
			image: "https://via.placeholder.com/300",
		},
		{
			id: 3,
			name: "Prof. Timotius Pasang",
			affiliation: "-",
			nations: "Indonesia",
			image: "https://via.placeholder.com/300",
		},
		{
			id: 4,
			name: "Dr. Aziz Mahardika",
			affiliation: "-",
			nations: "Indonesia",
			image: "https://via.placeholder.com/300",
		},
	];
	return (
		<>
			<Head>
				<title>FoITIC 2023 - Keynote Speakers</title>
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
				<DefaultHero scrollTo="speakers">
					<h1 className="display-4 fw-bold">Keynote Speakers</h1>
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
				<div id="speakers">
					<div className="section-title">
						<h3>Keynotes</h3>
						<h2>Keynote Speakers</h2>
					</div>

					<div className="container-fluid p-0 mx-0 mb-5">
						<div className="row mb-5">
							{speakers.map((speaker) => (
								<div className="col-sm-12 col-md-6 col-lg-3" key={speaker.id}>
									<div className="team d-flex flex-column align-items-center">
										<Image
											className="rounded-circle team-img"
											src={speaker.image}
											alt={speaker.name}
											width={300}
											height={300}
										/>
										<h4
											style={{
												textAlign: "center",
												marginBottom: "2px",
												marginTop: "25px",
											}}
										>
											{speaker.name}
										</h4>
										<p
											style={{ textAlign: "center", fontSize: "13px" }}
											className="m-2"
										>
											{speaker.affiliation}
										</p>
										<p
											style={{ textAlign: "center", fontSize: "13px" }}
											className="m-2 fst-italic fw-bold"
										>
											{speaker.nations}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
