// src/sections/Projects.tsx
import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoSend } from "react-icons/io5";

import TitleHeader from "@/components/TitleHeader";
import { projects } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Animate title
			const titleAnim = gsap.fromTo(
				".section-title",
				{ y: 200, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".section-title",
						start: "top 80%",
						toggleActions: "restart none none reverse",
					},
				}
			);

			// Animate project cards with stagger
			const cards = gsap.utils.toArray<HTMLElement>(".animate-item");
			let cardTl: gsap.core.Timeline | null = null;
			if (cards.length) {
				cardTl = gsap.timeline({
					scrollTrigger: {
						trigger: cards[0],
						start: "top 60%",
						toggleActions: "restart none none reverse",
					},
				});
				cardTl.from(cards, {
					y: 200,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.3,
				});
			}

			// Restart animations when nav triggers event
			const restart = () => {
				titleAnim.restart();
				cardTl?.restart();
			};
			window.addEventListener("navClick", restart);

			return () => window.removeEventListener("navClick", restart);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section id="projects" ref={sectionRef} className="section xl:mt-0">
			<div className="w-full md:px-10 px-5">
				{/* Section Header */}
				<TitleHeader
					title="Selected Projects"
					sub="📁 A showcase of the work I’ve built"
					className="section-title"
				/>

				{/* Project Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
					{projects.map((project) => (
						<div
							key={project.id}
							className="animate-item will-change-transform will-change-opacity">
							<div className="card-inner bg-gray-700/10 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/10 rounded-lg p-8 flex flex-col gap-3 items-center justify-start shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:border-gray-100/20 will-change-transform">
								{/* Thumbnail */}
								<div className="w-full overflow-hidden">
									<img
										src={project.img}
										alt={`${project.title} thumbnail`}
										loading="lazy"
										className="object-cover aspect-video rounded-md transform transition-transform duration-500 hover:scale-105"
									/>
								</div>

								{/* Project Info */}
								<div className="w-full flex flex-col justify-center gap-2">
									<h1 className="font-bold lg:text-2xl text-lg text-white">
										{project.title}
									</h1>
									<p className="lg:text-base text-sm line-clamp-2 mb-4 text-gray-300">
										{project.des}
									</p>

									{/* Tech icons and link */}
									<div className="flex items-center justify-between w-full mt-2">
										<div className="flex -space-x-2">
											{project.iconLists.map((icon, index) => (
												<div
													key={index}
													className="border border-white/20 rounded-full bg-[#131521] size-8 flex justify-center items-center">
													<img
														src={icon}
														alt={`tech-icon-${index}`}
														className="p-2"
													/>
												</div>
											))}
										</div>
										<div className="flex justify-center items-center">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex font-medium text-sm md:text-base text-blue-500 hover:text-blue-400 transition">
												GitHub Repo <IoSend className="mx-2 rotate-315" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default memo(Projects);
