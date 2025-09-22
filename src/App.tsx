import Hero from "./sections/Hero";
import Showcase from "./sections/Projects";
import TechStack from "./sections/TechStack";
import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<main
			className="absolute inset-0 z-0"
			style={{
				background:
					"radial-gradient(125% 125% at 50% 90%, #0a0a14 40%, #0d1a36 100%)",
			}}>
			<NavBar />
			<Hero />
			<Showcase />
			<TechStack />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
