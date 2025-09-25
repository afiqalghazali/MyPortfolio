import React, { memo } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App: React.FC = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<Projects />
			<TechStack />
			<Contact />
			<Footer />
		</main>
	);
};

export default memo(App);
