type TitleHeaderProps = {
	title: string;
	sub: string;
};

const TitleHeader = ({ title, sub }: TitleHeaderProps) => {
	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<div className="bg-gray-100/10 py-2 px-4 rounded-full text-sm md:text-base">
				<p>{sub}</p>
			</div>
			<div>
				<h1 className="font-semibold md:text-5xl text-3xl text-center">
					{title}
				</h1>
			</div>
		</div>
	);
};

export default TitleHeader;
