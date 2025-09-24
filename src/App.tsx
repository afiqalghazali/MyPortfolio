import React, { Suspense, lazy, memo } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";

// Lazy-load non-critical sections
const Showcase = lazy(() => import("@/sections/Projects"));
const TechStack = lazy(() => import("@/sections/TechStack"));
const Contact = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const App: React.FC = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<Suspense>
				<Showcase />
				<TechStack />
				<Contact />
				<Footer />
			</Suspense>
		</main>
	);
};

export default memo(App);
