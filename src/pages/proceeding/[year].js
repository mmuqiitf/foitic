import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import DefaultHero from "@/components/DefaultHero";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function ProceedingByYear() {
	const [proceedingData, setProceedingData] = useState({});
	const router = useRouter();
	const year = router.query.year;

	// get data from api
	useEffect(() => {
		if (!year) return;
		fetch(`/api/proceedings`)
			.then((res) => res.json())
			.then((data) => {
				setProceedingData(
					data.find((proceeding) => proceeding.year.toString() === year)
				);
			});
	}, [year]);

	return (
		<>
			<Head>
				<title>
					Proceeding {year} - {proceedingData?.title}
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

			<div style={{ paddingTop: "100px" }}>
				<DefaultHero scrollTo="topics">
					<h1 class="display-4 fw-bold">Proceeding</h1>
					<p class="title-proceeding">{proceedingData?.title}</p>
				</DefaultHero>
			</div>

			<section id="topics">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<Image
								src={proceedingData?.poster}
								class="img-fluid"
								alt={proceedingData?.title}
							/>
						</div>
						<div class="col-md-8">
							<p class="title-point">
								<b>{proceedingData?.title}</b>
							</p>
							<p class="title-point">{proceedingData?.description}</p>
							<br />
							<p class="title-cover">
								<b>Format:</b> {proceedingData?.format}
							</p>
							<p class="title-cover">
								<b>ISBN:</b> {proceedingData?.isbn}
							</p>
							<p class="title-cover">
								<b>First Published:</b> {proceedingData?.first_published}
							</p>
							<p class="title-cover">
								<b>Language:</b> {proceedingData?.language}
							</p>
							<a
								href={proceedingData?.download}
								target="_blank"
								class="btn btn-sm btn-primary"
							>
								Download
								<FaCloudDownloadAlt className="ms-2" size={"18px"} />
							</a>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="container mt-5">
					<div class="row">
						<div class="col-md-7">
							<p class="title-editor">
								<b>Editorial Board</b>
							</p>
							{proceedingData?.editorial_board?.map((editorial) => (
								<>
									<span key={editorial?.id}>
										{editorial?.name}{" "}
										{editorial?.program
											? ` - ${editorial?.program} - ${editorial?.affiliation}`
											: ` - ${editorial?.affiliation}`}
									</span>{" "}
									<br />
								</>
							))}
							<br />
							{proceedingData?.edited_by && (
								<>
									<b>Edited by:</b>
									<br />
									{proceedingData?.edited_by?.map((editor) => (
										<>
											<span key={editor?.id}>{editor?.name}</span>
											<br />
										</>
									))}
									<br />
								</>
							)}
							<b>Conference Organizer: </b>
							<br />
							Faculty of Industrial Technology, Institut Teknologi Nasional
							Bandung - Indonesia
							<br />
							Jl.PKHH. Mustapa No. 23 Bandung 40124, West Java - INDONESIA
							<br />
							Email: foitic@itenas.ac.id, Website: http://foitic.itenas.ac.id,
							www.itenas.ac.id
							<br />
							<br />
							<b>
								{proceedingData?.isbn
									? `ISBN: ${proceedingData?.isbn}`
									: `ISSN: ${proceedingData?.issn}`}
							</b>
							<br />
							<br />
							All rights reserved. No part of the publication may be produced,
							transmitted, in any form or by means of electronic, mechanical,
							photocopying, recording or otherwise, without the permission of
							the publisher, except the case in critical articles and review or
							where prior rights are preserved.
							<br />
							<br />
							<b>Cover Design:</b>
							{Array.isArray(proceedingData?.cover_design) ? (
								proceedingData?.cover_design.map((design) => (
									<>
										<br />
										{design}
									</>
								))
							) : (
								<>
									<br />
									{proceedingData?.cover_design}
								</>
							)}
							<br />
							<b>Produced by:</b>
							{Array.isArray(proceedingData?.produced_by) ? (
								proceedingData?.produced_by.map((produced_by) => (
									<>
										<br />
										{produced_by}
									</>
								))
							) : (
								<>
									<br />
									{proceedingData?.produced_by}
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="container mt-5 mb-5">
					<div class="row">
						<div class="col-md-12">
							<p class="title-editor">
								<b>Table Of Content</b>
							</p>
							<div class="row">
								<div class="col-md-12">
									<b>Committee</b>
									{proceedingData?.table_of_contents?.preface.map((preface) => (
										<>
											<br />
											<a
												href={preface.file}
												target="_blank"
												class="link-content"
												key={preface.id}
											>
												<b>Preface: {preface.title}</b>
											</a>
										</>
									))}

									<br />
									<b>Acknowledgement</b>
									<br />
									<b>Keynote and invited speaker International Conference</b>
								</div>
							</div>

							<br />
							<p>
								<b>Articles</b>
							</p>
							{proceedingData?.table_of_contents?.articles.map((article) => (
								<div class="mb-4" key={article.id}>
									<p>{article.title}</p>
									<p class="title-name">
										{Array.isArray(article.author)
											? article.author.map((author, index) => (
													<span key={index}>
														{author}
														{index !== article.author.length - 1 ? ", " : ""}
													</span>
											  ))
											: article.author}
									</p>
									<a
										href={article.file}
										target="_blank"
										class="btn btn-sm btn-primary"
									>
										PDF <FaCloudDownloadAlt size={"17px"} />
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
