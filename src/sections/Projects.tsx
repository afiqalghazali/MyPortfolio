import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";
import { IoSend } from "react-icons/io5";

const Projects = () => {
	return (
		<section id="projects" className="section-padding xl:mt-0">
			<div className="size-full md:px-10 px-5">
				<TitleHeader
					title="My Small Selections Projects"
					sub="📁 A showcase of my work"
				/>
				<div className="w-full grid grid-cols-1 md:grid-cols-2  gap-10 mt-10">
					{projects.map((item) => (
						<div
							key={item.id}
							className="bg-gray-700/10 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/10 rounded-lg flex p-8 flex-col gap-3 items-center justify-start shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:border-gray-100/20">
							{/* Thumbnail */}
							<div className="w-full overflow-hidden">
								<img
									src={item.img}
									alt="thumbnail"
									className="object-cover aspect-video rounded-md transform transition-transform duration-500 hover:scale-105"
								/>
							</div>

							{/* Content */}
							<div className="w-full flex flex-col justify-center gap-2">
								<h1 className="font-bold lg:text-2xl text-lg text-white">
									{item.title}
								</h1>
								<p className="lg:text-base text-sm line-clamp-2 mb-4 text-gray-300">
									{item.des}
								</p>

								{/* Tech icons + link */}
								<div className="flex items-center justify-between w-full mt-2">
									{/* Icons */}
									<div className="flex -space-x-2">
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className="border border-white/20 rounded-full bg-[#131521] size-8 flex justify-center items-center">
												<img src={icon} alt={`icon${index}`} className="p-2" />
											</div>
										))}
									</div>

									{/* Link */}
									<div className="flex justify-center items-center">
										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex font-medium text-sm md:text-base text-blue-500 hover:text-blue-400 transition">
											GitHub Repo <IoSend className="mx-2 rotate-315" />
										</a>
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

export default Projects;
