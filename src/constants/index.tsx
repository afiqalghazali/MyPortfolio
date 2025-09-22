import { FaDesktop, FaMobileButton, FaPalette } from "react-icons/fa6";

const navLinks = [
	{
		name: "Projects",
		link: "#projects",
	},
	{
		name: "Skills",
		link: "#skills",
	},
];

const words = [
	{ text: "Mobile Developer", icon: FaMobileButton },
	{ text: "Web Developer", icon: FaDesktop },
	{ text: "UI/UX Designer", icon: FaPalette },
];

const projects = [
	{
		id: 1,
		title: "Markir App",
		des: "Markir is an app designed to detect and visualize parking locations, providing details like location name, distance, and available parking spots.",
		img: "https://github.com/user-attachments/assets/1bbc292f-c8b4-4409-af50-fded24a9178f/",
		iconLists: [
			"images/logos/android.svg",
			"images/logos/kotlin.svg",
			"images/logos/firebase.svg",
		],
		link: "https://github.com/afiqalghazali/MarkirApp",
	},
	{
		id: 2,
		title: "Story App",
		des: "Connect through stories, photos, and locations on an interactive map. Share your moments with friends and explore new places together.",
		img: "https://github.com/user-attachments/assets/12c3f401-82b2-4fa7-a970-06f9617b2ddb",
		iconLists: [
			"images/logos/android.svg",
			"images/logos/kotlin.svg",
			"images/logos/firebase.svg",
		],
		link: "https://github.com/afiqalghazali/StoryApp",
	},
	{
		id: 3,
		title: "XYZ Payroll",
		des: "A modern and responsive web front-end application for managing employee data and payrolls.",
		img: "https://github.com/user-attachments/assets/fedbbd20-d6bc-4914-82c2-40954aa44b5e",
		iconLists: [
			"images/logos/html5.svg",
			"images/logos/css3.svg",
			"images/logos/javascript.svg",
			"images/logos/bootstrap5.svg",
		],
		link: "https://github.com/afiqalghazali/frontend-xyz-project",
	},
	{
		id: 4,
		title: "Tri Dharma",
		des: "A modern, responsive web project showcasing the principles of Tri Dharma University with interactive UI and smooth design.",
		img: "https://github.com/user-attachments/assets/b36fe687-2d00-4e30-8900-c5beaa30cfbf",
		iconLists: [
			"images/logos/html5.svg",
			"images/logos/css3.svg",
			"images/logos/javascript.svg",
			"images/logos/bootstrap5.svg",
		],
		link: "https://github.com/afiqalghazali/frontend-xyz-project",
	},
];

const techStackIcons = [
	{
		title: "Kotlin",
		icon: "images/logos/kotlin.svg",
		color: "198, 47, 241",
	},
	{
		title: "Android",
		icon: "images/logos/android.svg",
		color: "76, 175, 80",
	},
	{
		title: "Java",
		icon: "images/logos/java.svg",
		color: "103, 145, 172",
	},
	{
		title: "JavaScript",
		icon: "images/logos/javascript.svg",
		color: "248, 227, 56",
	},
	{
		title: "HTML5",
		icon: "images/logos/html5.svg",
		color: "241, 101, 41",
	},
	{
		title: "CSS3",
		icon: "images/logos/css3.svg",
		color: "40, 99, 240",
	},
	{
		title: "GitHub",
		icon: "images/logos/github-light.svg",
		color: "240, 246, 252",
	},
	{
		title: "Firebase",
		icon: "images/logos/firebase.svg",
		color: "232, 148, 4",
	},
	{
		title: "Bootstrap5",
		icon: "images/logos/bootstrap5.svg",
		color: "121, 82, 179",
	},
	{
		title: "Git",
		icon: "images/logos/git.svg",
		color: "222, 76, 54",
	},
	{
		title: "NodeJS",
		icon: "images/logos/nodejs.svg",
		color: "140, 200, 75",
	},
	{
		title: "VScCode",
		icon: "images/logos/vscode.svg",
		color: "60, 153, 212",
	},
	{
		title: "Python",
		icon: "images/logos/python.svg",
		color: "255, 235, 65",
	},
	{
		title: "Canva",
		icon: "images/logos/canva.svg",
		color: "101, 61, 230",
	},
	{
		title: "Figma",
		icon: "images/logos/figma.svg",
		color: "242, 78, 30",
	},
	{
		title: "TailwindCSS",
		icon: "images/logos/tailwindcss.svg",
		color: "6, 182, 212",
	},
	{
		title: "NPM",
		icon: "images/logos/npm.svg",
		color: "204, 0, 0",
	},
	{
		title: "ReactJS",
		icon: "images/logos/reactjs.svg",
		color: "97, 218, 251",
	},
	{
		title: "jQuery",
		icon: "images/logos/jquery.svg",
		color: "18, 102, 169",
	},
	{
		title: "ThreeJS",
		icon: "images/logos/threejs-light.svg",
		color: "191, 197, 201",
	},
];

const socmed = [
	{
		name: "Instagram",
		icon: "/images/logos/instagram.svg",
		links: "https://www.instagram.com/afiqalghazali_/",
		username: "@afiqalghazali_",
	},
	{
		name: "LinkedIn",
		icon: "/images/logos/linkedin.svg",
		links: "https://www.linkedin.com/in/afiqalghazali/",
		username: "@afiqalghazali",
	},
	{
		name: "GitHub",
		icon: "/images/logos/github-light.svg",
		links: "https://github.com/afiqalghazali",
		username: "@afiqalghazali",
	},
];

export { navLinks, words, projects, techStackIcons, socmed };
