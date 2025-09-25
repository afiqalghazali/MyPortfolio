import React, { useRef, memo, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoSend } from "react-icons/io5";

import TitleHeader from "@/components/TitleHeader";
import { projects } from "@/constants";
import { useGsapAnimations } from "@/components/animations/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null!);

	const animations = useMemo(
		() => [
			{ trigger: ".section-title" },
			{ trigger: ".animate-item", stagger: 0.4 },
		],
		[]
	);

	useGsapAnimations({ sectionRef, animations });

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
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
					{projects.map((project) => (
						<div
							key={project.id}
							className="animate-item will-change-transform will-change-opacity">
							<div className="card-inner bg-gray-700/10 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-200/10 rounded-lg p-8 flex flex-col gap-3 items-center justify-start shadow hover:shadow-white/20 overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-gray-100/40 will-change-transform">
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
												className="flex border font-semibold text-xs md:text-sm text-blue-500  py-2 px-4 rounded-lg border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white transition-all duration-300">
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
