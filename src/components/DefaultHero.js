import Link from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function DefaultHero({ children, ...props }) {
	const { scrollTo } = props;
	return (
		<div className="header-waves">
			<div className=" inner-header-waves d-flex flex-column justify-content-center text-center mx-auto">
				{children}
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
					<Link
						href={`#${scrollTo}`}
						scroll={true}
						className="btn-scroll btn btn-transparent px-4 me-sm-3"
					>
						<FaArrowAltCircleDown className="display-4 " />
					</Link>
				</div>
			</div>
			<div className="waves-container">
				<svg
					className="waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
					shapeRendering="auto"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g className="parallax">
						<use
							xlinkHref="#gentle-wave"
							x={48}
							y={0}
							fill="rgba(255,255,255,0.7"
						/>
						<use
							xlinkHref="#gentle-wave"
							x={48}
							y={3}
							fill="rgba(255,255,255,0.5)"
						/>
						<use
							xlinkHref="#gentle-wave"
							x={48}
							y={5}
							fill="rgba(255,255,255,0.3)"
						/>
						<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
					</g>
				</svg>
			</div>
		</div>
	);
}
