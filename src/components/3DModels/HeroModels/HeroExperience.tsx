import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Avatar from "./Avatar";
import Frame from "./Frame";
import Room from "./Room";

const HeroExperience = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 1], fov: 30 }}
			gl={{ antialias: true, powerPreference: "high-performance" }} // ✅ reduce GPU stress
		>
			{/* Controls */}
			<OrbitControls
				enablePan={false}
				enableZoom={true}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={0}
			/>

			{/* Lights & Env */}
			<ambientLight intensity={0.2} />
			<Environment preset="apartment" environmentIntensity={0.5} />
			<ContactShadows
				position={[0, -0.9, 0]}
				opacity={0.75} // ✅ slightly lower
				scale={2}
				blur={2}
				far={4}
			/>

			{/* Models (direct import, no Suspense) */}
			<Room position={[1.2, -0.85, 0]} scale={0.006} castShadow receiveShadow />
			<Avatar
				scale={0.5}
				position={[0.02, -0.85, 0.2]}
				castShadow
				receiveShadow
			/>
			<Frame
				position={[-0.155, -0.45, 0.4]}
				scale={0.02}
				castShadow
				receiveShadow
			/>
		</Canvas>
	);
};

export default HeroExperience;
