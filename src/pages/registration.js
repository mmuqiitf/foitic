import DefaultHero from "@/components/DefaultHero";
import Head from "next/head";
import Link from "next/link";

import itenasLogoBg from "@/assets/images/itenas_logo_bg.png";

export default function Registration() {
	return (
		<>
			<Head>
				<title>FoITIC 2023 - Registration</title>
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
					<h1 className="display-4 fw-bold">Registration</h1>
					<p>Scroll below to see the detail of registration fee</p>
					<div className="d-grid gap-2 d-md-flex justify-content-sm-center mb-5 mt-3">
						<Link
							href="https://econference.itenas.ac.id/index.php/foitic2021/foitic2021/user/account"
							target="_blank"
							className="btn btn-light text-red fw-bold px-4 py-2 rounded-pill"
						>
							Paper Registration
						</Link>
						<Link
							href="https://forms.gle/TKm7PArzMh5QmUs28"
							target="_blank"
							className="btn btn-light text-red fw-bold px-4 py-2 rounded-pill"
						>
							Confirmation Form
						</Link>
						<Link
							href="/documents/8x11WordTemplates.zip"
							target="_blank"
							className="btn btn-light text-red fw-bold px-4 py-2 rounded-pill"
						>
							Paper Template
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
					<div id="generic_price_table">
						<section>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="price-heading clearfix">
											<h1>Indonesian</h1>
											<p>
												The registration fee should be paid by
												<b>October 21, 2021</b>, at the latest.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-md-4">
										<div className="generic_content clearfix">
											<div className="generic_head_price clearfix">
												<div className="generic_head_content clearfix">
													<div className="head_bg"></div>
													<div className="head">
														<span>Student Presenter </span>
													</div>
												</div>
												<div className="generic_price_tag clearfix">
													<span className="price">
														<span className="sign">IDR</span>
														<span className="currency">250.000 </span>
													</span>
												</div>
											</div>

											<div className="generic_feature_list">
												<ul>
													<li>Student Presenter</li>
												</ul>
											</div>

											<div className="generic_price_btn clearfix"></div>
										</div>
									</div>

									<div className="col-md-4">
										<div className="generic_content clearfix">
											<div className="generic_head_price clearfix">
												<div className="generic_head_content clearfix">
													<div className="head_bg"></div>
													<div className="head">
														<span>Non-student</span>
													</div>
												</div>

												<div className="generic_price_tag clearfix">
													<span className="price">
														<span className="sign">IDR</span>
														<span className="currency">750.000</span>
													</span>
												</div>
											</div>

											<div className="generic_feature_list">
												<ul>
													<li>Non-Student Participant</li>
												</ul>
											</div>

											<div className="generic_price_btn clearfix"></div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="generic_content clearfix">
											<div className="generic_head_price clearfix">
												<div className="generic_head_content clearfix">
													<div className="head_bg"></div>
													<div className="head">
														<span>Visiting (non author)</span>
													</div>
												</div>

												<div className="generic_price_tag clearfix">
													<span className="price">
														<span className="sign">IDR</span>
														<span className="currency">50.000</span>
													</span>
												</div>
											</div>

											<div className="generic_feature_list">
												<ul>
													<li>Participant (without paper)</li>
												</ul>
											</div>

											<div className="generic_price_btn clearfix"></div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="price-heading clearfix">
											<h1>International</h1>
											<p>
												The registration fee should be paid by
												<b>October 21, 2021</b>, at the latest.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-md-4">
										<div className="generic_content clearfix">
											<div className="generic_head_price clearfix">
												<div className="generic_head_content clearfix">
													<div className="head_bg"></div>
													<div className="head">
														<span>Student Presenter </span>
													</div>
												</div>

												<div className="generic_price_tag clearfix">
													<span className="price">
														<span className="sign">$</span>
														<span className="currency">20</span>
													</span>
												</div>
											</div>

											<div className="generic_feature_list">
												<ul>
													<li>Student Presenter</li>
												</ul>
											</div>

											<div className="generic_price_btn clearfix"></div>
										</div>
									</div>

									<div className="col-md-4">
										<div className="generic_content clearfix">
											<div className="generic_head_price clearfix">
												<div className="generic_head_content clearfix">
													<div className="head_bg"></div>
													<div className="head">
														<span>Non-student</span>
													</div>
												</div>

												<div className="generic_price_tag clearfix">
													<span className="price">
														<span className="sign">$</span>
														<span className="currency">50</span>
													</span>
												</div>
											</div>

											<div className="generic_feature_list">
												<ul>
													<li>Non-Student Participant</li>
												</ul>
											</div>

											<div className="generic_price_btn clearfix"></div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="generic_content clearfix">
											<div className="generic_head_price clearfix">
												<div className="generic_head_content clearfix">
													<div className="head_bg"></div>
													<div className="head">
														<span>Visiting (non author)</span>
													</div>
												</div>

												<div className="generic_price_tag clearfix">
													<span className="price">
														<span className="sign">$</span>
														<span className="currency">15</span>
													</span>
												</div>
											</div>

											<div className="generic_feature_list">
												<ul>
													<li>Participant (without paper)</li>
												</ul>
											</div>
											<div className="generic_price_btn clearfix"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="container mt-5">
								<div className="card">
									<div className="card-header">Payment Address</div>
									<div className="card-body">
										<div className="row">
											<div className="col-md-6">
												<p>
													The registration fee can be paid through the BNI Bank
													account:
												</p>
												<ul className="fa-ul">
													<li className="custom-list">
														<span className="fa-li">
															<i className="fas fa-user-circle"></i>
														</span>
														Bank Account : BNI 46
													</li>
													<li className="custom-list">
														<span className="fa-li">
															<i className="fas fa-dollar-sign"></i>
														</span>
														Account Number (USD) : 1046004062
													</li>
													<li className="custom-list">
														<span className="fa-li">
															<i className="fas fa-id-card"></i>
														</span>
														Account Name : Lita Lidyawati
													</li>
													<li className="custom-list">
														<span className="fa-li">
															<i className="fas fa-shield-alt"></i>
														</span>
														Swift Code: BNINIDJA
													</li>
													<li className="custom-list">
														<span className="fa-li">
															<i className="fas fa-dollar-sign"></i>
														</span>
														Account Number (IDR) : 0186388817
													</li>
													<li className="custom-list">
														<span className="fa-li">
															<i className="fas fa-id-card"></i>
														</span>
														Account Name : Lita Lidyawati
													</li>
												</ul>
											</div>
											<div className="col-md-6">
												<p>
													<b>[IMPORTANT]</b> After making the payment, author
													<b>MUST</b>
													fill in a
													<a
														href="https://forms.gle/TKm7PArzMh5QmUs28"
														target="_blank"
													>
														Confirmation Form
													</a>
													and upload the transfer proof by click
													<a
														href="https://forms.gle/TKm7PArzMh5QmUs28"
														target="_blank"
													>
														Confirmation Form
													</a>
													in this website (NOT Email). Payment receipt will be
													sent to you by email once your payment is confirmed by
													the committee (The transferred fee is not refundable)
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
