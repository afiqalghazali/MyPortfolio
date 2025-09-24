const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="section bg-black flex items-center justify-center">
			<div className="w-full flex flex-col md:flex-row justify-between px-5 md:px-10 pt-10 pb-5 md:pt-15 md:pb-10">
				<p className="text-center md:text-start cursor-pointer">
					Designed & Built by Afiq Alghazali
				</p>
				<p className="text-center md:text-end">
					© {currentYear} Afiq Alghazali. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
