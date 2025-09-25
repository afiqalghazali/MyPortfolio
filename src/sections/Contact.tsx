import { useRef, useState, memo, useMemo } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { socmed } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapAnimations } from "@/components/animations/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const sectionRef = useRef<HTMLDivElement>(null!);
	const formRef = useRef<HTMLFormElement>(null);

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current!,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);
			setForm({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const animations = useMemo(
		() => [
			{ trigger: ".section-title" },
			{ trigger: ".contact-form, .socmed-container" },
			{
				trigger:
					".contact-form label, .contact-form input, .contact-form textarea, .contact-form button",
				stagger: 0.2,
			},
			{
				trigger: ".socmed-container h3, .socmed-container a",
				stagger: 0.1,
				relativeOffset: "-=2",
			},
		],
		[]
	);

	useGsapAnimations({ sectionRef, animations });

	return (
		<section ref={sectionRef} id="contact" className="section">
			<div className="w-full md:px-10 px-5">
				<TitleHeader
					title="Let’s Connect"
					sub="💬 Have a question? Let’s talk 🚀"
					className="section-title"
				/>

				<div className="flex flex-col xl:flex-row mt-16 gap-4 lg:gap-16">
					{/* Form */}
					<div className="flex-1 xl:flex-2">
						<div className="contact-form size-full bg-gray-700/10 backdrop-blur-lg border border-gray-100/10 rounded-xl p-10 !transform-none">
							<form
								ref={formRef}
								onSubmit={handleSubmit}
								className="w-full flex flex-col gap-7">
								{/* Name */}
								<div>
									<label htmlFor="name" className="block text-white mb-2">
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={form.name}
										onChange={handleChange}
										placeholder="What’s your good name?"
										required
										className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50/50 focus:outline-none bg-blue-100/10 rounded-md"
									/>
								</div>

								{/* Email */}
								<div>
									<label htmlFor="email" className="block text-white mb-2">
										Your Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										placeholder="What’s your email address?"
										required
										className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50/50 focus:outline-none bg-blue-100/10 rounded-md"
									/>
								</div>

								{/* Message */}
								<div>
									<label htmlFor="message" className="block text-white mb-2">
										Your Message
									</label>
									<textarea
										id="message"
										name="message"
										value={form.message}
										onChange={handleChange}
										placeholder="How can I help you?"
										rows={5}
										required
										className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50/50 focus:outline-none bg-blue-100/10 rounded-md"
									/>
								</div>

								{/* Submit */}
								<button type="submit" className="w-full">
									<div className="w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all duration-300">
										{loading ? "Sending..." : "Send Message"}
									</div>
								</button>
							</form>
						</div>
					</div>

					{/* Social Media */}
					<div className="flex-1">
						<div className="socmed-container size-full bg-gray-700/10 backdrop-blur-lg border border-gray-100/10 rounded-4xl p-10 !transform-none">
							<h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
							<div className="flex flex-col gap-4">
								{socmed.map((item) => (
									<a
										key={item.name}
										href={item.links}
										target="_blank"
										rel="noopener noreferrer"
										className="border border-gray-100/10 flex items-center gap-2 p-4 bg-gray-700/10 backdrop-blur-lg rounded-lg hover:bg-gray-100/10 transition-all duration-300">
										<div className="size-12 p-2 flex justify-center items-center">
											<img src={item.icon} alt={item.name} />
										</div>
										<div className="flex flex-col">
											<span className="text-sm font-medium">{item.name}</span>
											<span className="text-xs text-gray-400">
												{item.username}
											</span>
										</div>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(Contact);
