// src/sections/TechStack.tsx
import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "@/components/TitleHeader";
import MagicBento from "@/components/MagicBento";

gsap.registerPlugin(ScrollTrigger);

const TechStack: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Animate the section title
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".section-title",
					start: "top 20%",
					toggleActions: "restart none none reverse",
				},
			});

			tl.from(".section-title", {
				y: 200,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			});

			// Restart animation when navClick event occurs
			const restart = () => tl.restart();
			window.addEventListener("navClick", restart);

			return () => window.removeEventListener("navClick", restart);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

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
