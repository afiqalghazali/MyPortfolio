const Footer = () => {
	return (
		<footer className="section-padding bg-black flex items-center justify-center">
			<div className="px-5 md:px-10 md:pt-15 md:pb-10 pb-5 pt-10 text-neutral-400   w-full flex flex-col md:flex-row justify-between">
				<div className="flex flex-col justify-center">
					<p className="text-center md:text-start cursor-pointer">
						Designed & Built by Afiq Alghazali
					</p>
				</div>
				<div className="flex flex-col justify-center">
					<p className="text-center md:text-end">
						© {new Date().getFullYear()} Afiq Alghazali. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
