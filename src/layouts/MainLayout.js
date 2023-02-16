import Image from "next/image";
import Link from "next/link";

import {
	FaEnvelope,
	FaMapMarker,
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

import logoItenas from "@/assets/images/logo-itenas.png";
import NavigationBar from "@/components/NavigationBar";

export default function MainLayout({ children }) {
	return (
		<div>
			<div>
				<NavigationBar />
			</div>
			<main>{children}</main>
			<footer className="mt-auto footer-distributed">
				<div className="footer-left">
					<h3>Organized By</h3>
					<Image src={logoItenas} className="my-3" />

					<Link
						href="https://itenas.ac.id"
						className="footer-company-name"
						target="_blank"
					>
						© Institut Teknologi Nasional Bandung (ITENAS)
					</Link>
				</div>

				<div className="footer-center">
					<div>
						<FaMapMarker className="me-2" />
						<p>Jl. PKHH. Mustapa No. 23 Bandung, Indonesia</p>
					</div>
					<div>
						<FaEnvelope className="me-2" />
						<p>
							<a href="mailto:foitic@itenas.ac.id">foitic@itenas.ac.id</a>
						</p>
					</div>
				</div>
				<div className="footer-right">
					<p className="footer-company-about">
						<span>About FoITIC 2023</span>
						FoITIC 2023 - The 4th Faculty of Industrial Technology International
						Congress (FoITIC) 2023
					</p>
					<div className="footer-icons">
						<Link
							href="https://www.facebook.com/itenas.official"
							target="_blank"
						>
							<FaFacebook />
						</Link>
						<Link
							href="https://www.instagram.com/itenas.official"
							target="_blank"
						>
							<FaInstagram />
						</Link>
						<Link
							href="https://www.linkedin.com/school/itenas/mycompany"
							target="_blank"
						>
							<FaLinkedinIn />
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
