type GlowButtonProps = {
	className?: string;
	text?: string;
	ref?: string;
	color?: string;
	baseColor?: string;
	backgroundColor?: string;
	textColor?: string;
};

const GlowButton = ({
	className = "",
	text,
	ref,
	color = "#ff00ff",
	baseColor = "#00ffff",
	backgroundColor = "#111",
	textColor = "#fff",
}: GlowButtonProps) => {
	const gradient = `conic-gradient(from 90deg at 50% 50%, ${baseColor} 0%, ${color} 50%, ${baseColor} 100%)`;

	return (
		<a
			href={ref}
			className={`group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none !transition-transform duration-300 ease-out hover:scale-105 ${className}`}
			style={{
				boxShadow: `0 0 10px ${color}80`,
				transition: "transform 0.3s ease, box-shadow 0.3s ease",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.boxShadow = `0 0 25px ${color}aa`)
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.boxShadow = `0 0 10px ${color}80`)
			}>
			{/* Spinning gradient border */}
			<span
				className={`absolute inset-[-1000%] animate-[spin_4s_linear_infinite] opacity-75 transition-opacity duration-500 group-hover:animate-[spin_1s_linear_infinite] ${className}`}
				style={{ background: gradient }}
			/>
			{/* Inner button */}
			<span
				className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center 
					rounded-full px-7 py-1 text-sm font-medium backdrop-blur-3xl transition-colors duration-300 ${className}`}
				style={{ backgroundColor, color: textColor }}>
				{text}
			</span>
		</a>
	);
};

export default GlowButton;
