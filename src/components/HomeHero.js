import Image from "next/image";

import backgroundImageHome from "@/assets/images/Gedung-Itenas-Final-Crop.jpg";
import logoFoiticRev from "@/assets/images/cropped-Logo-foitic-rev02.png";
import logoItenas from "@/assets/images/logo-itenas.png";
import logoKampusMerdeka from "@/assets/images/logo-kampus-merdeka.png";

export default function HomeHero() {
	return (
		<div className="header">
			<div className="owl-carousel owl-theme">
				<div className="item">
					<Image src={backgroundImageHome} sizes="100vw" />
					<div className="overlay">
						<div className="text-overlay p-3">
							<div className="inline mb-3">
								<Image
									src={logoFoiticRev}
									style={{ width: "150px", height: "auto" }}
									className="d-inline px-2"
									alt=""
								/>
								<Image
									src={logoItenas}
									style={{ width: "150px", height: "auto" }}
									className="d-inline px-2"
									alt=""
								/>
								<Image
									src={logoKampusMerdeka}
									style={{ width: "150px", height: "auto" }}
									className="d-inline px-2"
									alt=""
								/>
							</div>
							<h1>
								The 4th Faculty of Industrial Technology International Congress
								(FoITIC) 2023
							</h1>
							<p>Theme</p>
							<p style={{ fontSize: "18px" }}>
								<b>
									Development of Multidisciplinary Science and Engineering for
									Enhancing of University Innovation and Reputation
								</b>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
