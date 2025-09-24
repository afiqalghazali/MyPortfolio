import React, {
	useEffect,
	useRef,
	useState,
	memo,
	useCallback,
	useMemo,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { words } from "@/constants";
import GlowButton from "@/components/GlowButton";
import HeroExperience from "@/components/3DModels/HeroModels/HeroExperience";
import { useGsapAnimations } from "@/components/animations/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

// Optimize auto-refresh to avoid unnecessary layout checks
ScrollTrigger.config({
	autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});

const Hero: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
	const [showModel, setShowModel] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShowModel(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	const createTimeline = useCallback(
		({ duration, ease }: { duration: number; ease: string }) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "bottom top",
					toggleActions: "restart none none reverse",
				},
				defaults: { duration, ease },
			});

			tl.from(".hero-title h1", {
				y: 100,
				opacity: 0,
				stagger: 0.4,
				force3D: true,
			})
				.from(".hero-sub", { y: 50, opacity: 0, force3D: true })
				.from(".hero-btn", { x: -50, opacity: 0, force3D: true });

			return tl;
		},
		[]
	);

	const gsapDefaults = useMemo(
		() => ({ duration: 0.5, ease: "power3.out" }),
		[]
	);

	useGsapAnimations(sectionRef, createTimeline, gsapDefaults);

	return (
		<section
			id="hero"
			ref={sectionRef}
			className="relative overflow-hidden mb-20 md:mb-0"
			aria-label="Hero section">
			<div className="relative z-10 mt-32 md:mt-52 xl:mt-20 md:h-fit xl:h-dvh flex flex-col gap-20 xl:flex-row xl:items-center xl:justify-center">
				{/* Left: Hero Text */}
				<header className="flex flex-col justify-center w-screen md:w-full top-0 px-5 md:px-20 xl:px-40">
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
							<GlowButton
								text="See My Work"
								ref="#projects"
								color="#1D4ED8"
								baseColor="#fff"
								backgroundColor="#0f172a"
								textColor="#fff"
							/>
						</div>
					</div>
				</header>

				{/* Right: 3D Model */}
				<div className="xl:w-[70%] w-full h-full xl:absolute flex items-center justify-center xl:-right-20 right-0">
					{showModel && (
						<div className="w-[clamp(250px,50vw,400px)] aspect-square cursor-grab will-change-transform will-change-opacity">
							<HeroExperience />
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default memo(Hero);
