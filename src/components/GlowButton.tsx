type GlowButtonProps = {
	description?: string;
	ref?: string;
};

const GlowButton = ({ description, ref }: GlowButtonProps) => {
	return (
		<a
			href={ref}
			className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] 
			focus:outline-none transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
			{/* Spinning gradient border */}
			<span
				className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] 
				bg-[conic-gradient(from_90deg_at_50%_50%,#bfdbfe_0%,#1D4ED8_50%,#bfdbfe_100%)]
				opacity-75 transition-opacity duration-500 group-hover:animate-[spin_1s_linear_infinite]"
			/>
			{/* Inner button */}
			<span
				className="relative inline-flex h-full w-full cursor-pointer items-center justify-center 
				rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl
				transition-colors duration-300">
				{description}
			</span>
		</a>
	);
};

export default GlowButton;
