import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Frame } from "./Frame";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";

export const HeroExperience = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 1], fov: 30 }}
			gl={{ antialias: true }}>
			{/* Controls */}
			<OrbitControls
				enablePan={false}
				enableZoom={true}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={0}
			/>

			{/* Soft global base light */}
			<ambientLight intensity={0.2} />

			{/* Environment reflections */}
			<Environment preset="apartment" environmentIntensity={0.5} />

			{/* Soft floor shadow */}
			<ContactShadows
				position={[0, -0.9, 0]}
				opacity={1}
				scale={2}
				blur={2}
				far={4}
			/>

			{/* Room */}
			<Room position={[1.2, -0.85, 0]} scale={0.006} castShadow receiveShadow />

			{/* Avatar */}
			<Avatar
				scale={0.5}
				position={[0.02, -0.85, 0.2]}
				castShadow
				receiveShadow
			/>

			{/* Frame */}
			<Frame
				position={[-0.155, -0.45, 0.4]}
				scale={0.02}
				castShadow
				receiveShadow
			/>
		</Canvas>
	);
};
