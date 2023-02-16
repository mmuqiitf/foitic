import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import logoFoitic from "@/assets/images/cropped-Logo-foitic-rev02.png";

export default function NavigationBar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const router = useRouter();

	// get data from api
	const [proceedings, setProceedings] = useState([]);
	useEffect(() => {
		fetch("/api/proceedings")
			.then((res) => res.json())
			.then((data) => {
				setProceedings(data);
			});
	}, []);

	return (
		<nav className="d-flex justify-content-between">
			<div id="brand">
				<Link href="/">
					<Image
						src={logoFoitic}
						width={180}
						style={{
							height: "100px",
						}}
						alt="Logo Foitic"
					/>
				</Link>
			</div>
			<div id="menu">
				<div
					id="menu-toggle"
					onClick={(e) => setToggleMenu(!toggleMenu)}
					className={toggleMenu ? "closeMenu" : ""}
				>
					<div id="menu-icon">
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
				</div>
				<ul className={`menu-nav-container ${toggleMenu ? "showMenu" : ""}`}>
					<li className="menu-nav">
						<Link
							href="/call-for-papers"
							className={router.pathname === "/call-for-papers" ? "active" : ""}
						>
							Call For Papers
						</Link>
					</li>
					<li className="menu-nav">
						<Link
							href="/speakers"
							className={router.pathname === "/speakers" ? "active" : ""}
						>
							Keynote Speakers
						</Link>
					</li>
					<li className="menu-nav">
						<Link
							href="/committees"
							className={router.pathname === "/committees" ? "active" : ""}
						>
							Committees
						</Link>
					</li>
					<li className="menu-nav">
						<Link
							href="/dates"
							className={router.pathname === "/dates" ? "active" : ""}
						>
							Important Dates
						</Link>
					</li>
					<li className="menu-nav">
						<Link
							href="/registration"
							className={router.pathname === "/registration" ? "active" : ""}
						>
							Registration
						</Link>
					</li>
					<li className="menu-nav dropdown">
						<a
							className="dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Proceedings
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{proceedings
								.sort((a, b) => {
									// sort by year descending
									return b.year - a.year;
								})
								.map((proceeding) => {
									return (
										<li key={proceeding.id}>
											<Link
												className="dropdown-item"
												target="_blank"
												href={`/proceeding/${proceeding.year}`}
											>
												{proceeding.title_for_url}
											</Link>
										</li>
									);
								})}
						</ul>
					</li>
					<li className="menu-nav dropdown">
						<a
							className="dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Latest Event
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							<li>
								<Link
									className="dropdown-item"
									target="_blank"
									href="https://foitic.itenas.ac.id/foitic2021/index.html"
								>
									FOITIC 2021
								</Link>
							</li>
							<li>
								<Link
									className="dropdown-item"
									target="_blank"
									href="https://foitic.itenas.ac.id/foitic2020/"
								>
									FOITIC 2020
								</Link>
							</li>
							<li>
								<Link
									className="dropdown-item"
									target="_blank"
									href="https://foitic.itenas.ac.id/foitic2017/"
								>
									FOITIC 2017
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
}
