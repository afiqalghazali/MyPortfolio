// src/sections/Hero.tsx
import React, { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { words } from "@/constants";
import GlowButton from "@/components/GlowButton";
import HeroExperience from "@/components/3DModels/HeroModels/HeroExperience";

gsap.registerPlugin(ScrollTrigger);

// Optimize auto-refresh to avoid unnecessary layout checks
ScrollTrigger.config({
	autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});

const Hero: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const [showModel, setShowModel] = useState(false);

	useEffect(() => {
		// Delay showing the 3D model for better FCP
		const timer = setTimeout(() => setShowModel(true), 2000);

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "bottom top",
					toggleActions: "restart none none reverse",
				},
				defaults: { ease: "power3.out", duration: 1 },
			});

			tl.from(".hero-title h1", {
				y: 50,
				opacity: 0,
				stagger: 0.2,
				force3D: true,
			})
				.from(".hero-sub", { y: 30, opacity: 0, force3D: true }, "-=0.5")
				.from(".hero-btn", { x: -30, opacity: 0, force3D: true }, "-=0.4");

			// Restart animations when nav triggers event
			const restart = () => tl.restart();
			window.addEventListener("navClick", restart);

			return () => window.removeEventListener("navClick", restart);
		}, sectionRef);

		return () => {
			clearTimeout(timer);
			ctx.revert();
		};
	}, []);

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative overflow-hidden mb-20 md:mb-0"
			aria-label="Hero section">
			<div className="relative z-10 mt-32 md:mt-52 xl:mt-32 md:h-dvh flex flex-col gap-20 xl:flex-row xl:items-center xl:justify-center">
				{/* Left: Hero Text */}
				<header className="flex flex-col justify-center w-screen md:w-full px-5 md:px-20">
					<div className="flex flex-col gap-4 sm:gap-8">
						{/* Title */}
						<div className="hero-title flex flex-col gap-2 font-semibold lg:text-6xl sm:text-5xl text-2xl will-change-transform will-change-opacity">
							<h1>Hello, my name's Afiq</h1>
							<h1>
								I'm
								<span className="absolute h-8 sm:h-12 lg:h-16 px-2 md:px-5 overflow-hidden">
									<span className="wrapper">
										{words.map((word, index) => (
											<span
												key={index}
												className="flex items-center gap-2 pb-2 will-change-transform will-change-opacity">
												{word.icon && (
													<span className="flex items-center justify-center size-8 sm:size-12 lg:size-14 rounded-full bg-[#2D3240] text-white">
														<word.icon className="size-4 sm:size-6 lg:size-8" />
													</span>
												)}
												<span>{word.text}</span>
											</span>
										))}
									</span>
								</span>
							</h1>
						</div>

						{/* Subtitle */}
						<h2 className="hero-sub max-w-xl text-sm lg:text-lg text-gray-300 will-change-transform will-change-opacity">
							I love turning ideas into experiences — from designing engaging
							UI/UX systems to building them into real products on web and
							mobile platforms.
						</h2>

						{/* CTA Button */}
						<div className="hero-btn will-change-transform will-change-opacity">
							<GlowButton description="See My Work" ref="#projects" />
						</div>
					</div>
				</header>

				{/* Right: 3D Model */}
				<div className="xl:w-[70%] w-[100vw] h-full xl:absolute flex items-center justify-center xl:-top-20 top-24 xl:-right-20 right-0">
					{showModel && (
						<div className="w-[clamp(250px,30vw,500px)] aspect-square cursor-grab will-change-transform will-change-opacity">
							<HeroExperience />
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default memo(Hero);
