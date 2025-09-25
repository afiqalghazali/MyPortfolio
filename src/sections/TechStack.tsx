import React, { useRef, memo, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "@/components/TitleHeader";
import MagicBento from "@/components/MagicBento";
import { useGsapAnimations } from "@/components/animations/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const TechStack: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null!);

	const animations = useMemo(() => [{ trigger: ".section-title" }], []);

	useGsapAnimations({ sectionRef, animations });

	return (
		<section id="tech-stack" className="section" ref={sectionRef}>
			<div className="w-full md:px-10 px-5">
				{/* Section Header */}
				<TitleHeader
					title="Tech Stack & Skills"
					sub="⚡ The tools and technologies I rely on"
					className="section-title"
				/>

				{/* MagicBento */}
				<div className="mt-10 w-full">
					<MagicBento
						textAutoHide
						enableStars
						enableSpotlight
						enableBorderGlow
						enableTilt
						enableMagnetism
						clickEffect
						spotlightRadius={300}
						particleCount={24}
					/>
				</div>
			</div>
		</section>
	);
};

export default memo(TechStack);
