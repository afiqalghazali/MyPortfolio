import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (link: string) => {
		window.dispatchEvent(new CustomEvent("navClick", { detail: link }));
	};

	return (
		<header
			className={`fixed w-full left-1/2 -translate-x-1/2 py-5 px-5 md:px-20 z-[100] transition-all duration-300 ease-in-out ${
				scrolled ? "top-0 bg-black" : "md:top-10 top-0 bg-transparent"
			}`}>
			<div className="mx-auto flex items-center justify-between">
				{/* Logo */}
				<a
					href="#hero"
					onClick={() => handleNavClick("#hero")}
					className="text-white text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105">
					Afiq Alghazali
				</a>

				{/* Nav Links */}
				<nav className="hidden lg:flex items-center">
					<ul className="flex space-x-8">
						{navLinks.map(({ link, name }) => (
							<li key={name} className="relative group text-white">
								<a
									href={link}
									onClick={() => handleNavClick(link)}
									className="relative">
									<span className="transition-colors duration-300 hover:text-white">
										{name}
									</span>
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Contact Button */}
				<a
					href="#contact"
					onClick={() => handleNavClick("#contact")}
					className="flex group">
					<div className="px-5 py-2 rounded-lg bg-white text-black transition-colors duration-300 group-hover:bg-blue-800/50">
						<span className="transition-colors duration-300 group-hover:text-white">
							Contact Me
						</span>
					</div>
				</a>
			</div>
		</header>
	);
};

export default NavBar;
