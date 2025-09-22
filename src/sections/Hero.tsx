import { words } from "../constants";
import { HeroExperience } from "../components/3DModels/HeroModels/HeroExperience";

const Hero = () => {
	return (
		<section id="hero" className="relative overflow-hidden mb-20 md:mb-0">
			<div className="relative z-10 mt-32 md:mt-52 xl:mt-32 md:h-dvh gap-20 flex flex-col xl:flex-row xl:items-center items-start xl:justify-center ">
				{/* Left: Hero Text */}
				<header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
					<div className="flex flex-col gap-4 sm:gap-8">
						<div className="flex flex-col justify-center lg:text-6xl sm:text-5xl text-2xl  font-semibold relative z-10 lg:gap-2">
							<h1>Hello, my name's Afiq</h1>
							<h1>
								I'm
								<span className="absolute px-2 md:px-5 lg:h-16 sm:h-12 h-8 overflow-hidden">
									<span className="wrapper">
										{words.map((word, index) => (
											<span
												key={index}
												className="flex items-center gap-2 pb-2">
												{word.icon && (
													<span className="flex items-center justify-center lg:size-14 sm:size-12 size-8 rounded-full bg-[#2D3240] text-white">
														<word.icon className="lg:size-8 sm:size-6 size-4" />
													</span>
												)}
												<span>{word.text}</span>
											</span>
										))}
									</span>
								</span>
							</h1>
						</div>

						<h2 className="max-w-xl lg:text-lg text-sm text-gray-300">
							I love turning ideas into experiences — from designing engaging
							UI/UX systems to building them into real products on web and
							mobile platforms.
						</h2>
					</div>
				</header>

				{/* Right: 3D Model */}
				<figure>
					<div className="xl:w-[70%] w-[100vw] h-full xl:absolute flex items-center justify-center xl:-top-20 top-24 xl:-right-20 right-0">
						<div className="w-[clamp(250px,30vw,500px)] aspect-square cursor-grab">
							<HeroExperience />
						</div>
					</div>
				</figure>
			</div>
		</section>
	);
};

export default Hero;
