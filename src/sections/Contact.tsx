import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import { socmed } from "@/constants";

const Contact = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

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

	return (
		<section id="contact" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5">
				<TitleHeader
					title="Get in Touch – Let’s Connect"
					sub="💬 Have questions? Let’s talk! 🚀"
				/>
				<div className="flex flex-col lg:flex-row mt-16 gap-4 lg:gap-16">
					<div className="flex-1">
						<div className="bg-gray-700/10 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/10 rounded-xl p-10">
							<form
								ref={formRef}
								onSubmit={handleSubmit}
								className="w-full flex flex-col gap-7 ">
								{/* Name */}
								<div>
									<label htmlFor="name" className="block text-white mb-2">
										Your name
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
									<div className="w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2 group">
										<p className="text">
											{loading ? "Sending..." : "Send Message"}
										</p>
									</div>
								</button>
							</form>
						</div>
					</div>

					{/* Right side */}
					<div className="flex-1">
						<div className=" size-full bg-gray-700/10 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100/10 rounded-4xl p-10">
							{/* Social Media */}
							<h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{socmed.map((item) => (
									<a
										key={item.name}
										href={item.links}
										target="_blank"
										rel="noopener noreferrer"
										className=" border border-gray-100/10 flex items-center gap-2 p-4 g-gray-700/10 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-lg hover:bg-blue-600/10 hover:border-blue-600/10 transition">
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

export default Contact;
