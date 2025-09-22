import TitleHeader from "../components/TitleHeader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import MagicBento from "@/components/MagicBento";

const TechStack = () => {
	useGSAP(() => {
		gsap.fromTo(
			".tech-card",
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.inOut",
				stagger: 0.2,
				scrollTrigger: {
					trigger: "#skills",
					start: "top center",
				},
			}
		);
	});

	return (
		<section id="skills" className="flex-center section-padding">
			<div className="size-full md:px-10 px-5">
				<TitleHeader
					title="My Preferred Tech Stack"
					sub="🤝 The Skills I Bring To The Table"
				/>
				<div className="mt-10 w-full">
					<MagicBento
						textAutoHide={true}
						enableStars={true}
						enableSpotlight={true}
						enableBorderGlow={true}
						enableTilt={true}
						enableMagnetism={true}
						clickEffect={true}
						spotlightRadius={300}
						particleCount={24}
					/>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
