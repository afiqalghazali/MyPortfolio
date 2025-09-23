import React, { Suspense, lazy, memo } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";

// Lazy-load non-critical sections
const Showcase = lazy(() => import("@/sections/Projects"));
const TechStack = lazy(() => import("@/sections/TechStack"));
const Contact = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/sections/Footer"));

const App: React.FC = () => {
	return (
		<main
			className="absolute inset-0 z-0 min-h-screen"
			style={{
				background:
					"radial-gradient(125% 125% at 50% 90%, #0a0a14 40%, #0d1a36 100%)",
			}}>
			<NavBar />
			<Hero />

			{/* Below-the-fold sections are lazy-loaded */}
			<Suspense fallback={<SectionFallback />}>
				<Showcase />
				<TechStack />
				<Contact />
				<Footer />
			</Suspense>
		</main>
	);
};

const SectionFallback: React.FC = () => (
	<div className="flex items-center justify-center py-20 text-muted-foreground">
		<span className="animate-pulse">Loading...</span>
	</div>
);

export default memo(App);
