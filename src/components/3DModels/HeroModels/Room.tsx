import React, { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type RoomProps = JSX.IntrinsicElements["group"];

export const Room: React.FC<RoomProps> = (props) => {
	const { nodes, materials } = useGLTF(
		"models/stylised-room.glb"
	) as unknown as {
		nodes: {
			Wall_Top_low_WallTop_M_0_1: THREE.Mesh;
			Wall_Bottom_low_WallBottom_M_0_1: THREE.Mesh;
			Wall_Top_low_WallTop_M_0_2: THREE.Mesh;
			Wall_Bottom_low_WallBottom_M_0_2: THREE.Mesh;

			Floorboards_G1_Low_FBoard_6A_low1_Floorboards_M_0: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low2_Floorboards_M_0: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low3_Floorboards_M_0: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low_Floorboards_M_0: THREE.Mesh;

			Floorboards_G1_Low_FBoard_6A_low1_Floorboards_M_0_1: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low2_Floorboards_M_0_1: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low3_Floorboards_M_0_1: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low_Floorboards_M_0_1: THREE.Mesh;

			Floorboards_G1_Low_FBoard_6A_low2_Floorboards_M_0_2: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low3_Floorboards_M_0_2: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low_Floorboards_M_0_2: THREE.Mesh;

			Wall_Edge_low_Door_M_0: THREE.Mesh;
			Wall_Edge_low1_Door_M_0: THREE.Mesh;
			Wall_Edge_low2_Door_M_0: THREE.Mesh;
			Door_Keyhole_low_Door_M_0: THREE.Mesh;
			Door_Knob_low_Door_M_0: THREE.Mesh;
			Door_low_Door_M_0: THREE.Mesh;
			Door_Frame_low_DoorFrame_M_0: THREE.Mesh;
			Wall_Bottom_low_WallBottom_M_0: THREE.Mesh;
			Wall_Top_low_WallTop_M_0: THREE.Mesh;
		};
		materials: {
			WallTop_M: THREE.MeshStandardMaterial;
			WallBottom_M: THREE.MeshStandardMaterial;
			Floorboards_M: THREE.MeshStandardMaterial;
			Door_M: THREE.MeshStandardMaterial;
			DoorFrame_M: THREE.MeshStandardMaterial;
		};
	};

	return (
		<group {...props} dispose={null}>
			<group position={[0, 0, 10.419]}>
				<group position={[139.55, 0, 117.059]} rotation={[0, Math.PI / 2, 0]}>
					<mesh
						geometry={nodes.Wall_Top_low_WallTop_M_0_1.geometry}
						material={materials.WallTop_M}
						position={[0, 0, -0.915]}
					/>
					<mesh
						geometry={nodes.Wall_Bottom_low_WallBottom_M_0_1.geometry}
						material={materials.WallBottom_M}
						position={[0, 0, -0.915]}
					/>
				</group>
				<group position={[-240.934, 0, -10.419]}>
					<mesh
						geometry={nodes.Wall_Top_low_WallTop_M_0_2.geometry}
						material={materials.WallTop_M}
					/>
					<mesh
						geometry={nodes.Wall_Bottom_low_WallBottom_M_0_2.geometry}
						material={materials.WallBottom_M}
					/>
				</group>
			</group>

			<group position={[-6.236, -3.709, -3.514]} scale={17.074}>
				<group position={[4.367, 0, 0]}>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low1_Floorboards_M_0.geometry
						}
						material={materials.Floorboards_M}
						position={[-26.29, 0, 1.158]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low2_Floorboards_M_0.geometry
						}
						material={materials.Floorboards_M}
						position={[-17.284, 0, 0]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low3_Floorboards_M_0.geometry
						}
						material={materials.Floorboards_M}
						position={[-8.272, 0, 0]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low_Floorboards_M_0.geometry
						}
						material={materials.Floorboards_M}
						position={[0.75, 0, 0.704]}
						scale={0.059}
					/>
				</group>

				<group position={[4.367, 0, 7.601]}>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low1_Floorboards_M_0_1.geometry
						}
						material={materials.Floorboards_M}
						position={[-26.29, 0, 1.158]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low2_Floorboards_M_0_1.geometry
						}
						material={materials.Floorboards_M}
						position={[-17.284, 0, -1.704]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low3_Floorboards_M_0_1.geometry
						}
						material={materials.Floorboards_M}
						position={[-8.272, 0, 0]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low_Floorboards_M_0_1.geometry
						}
						material={materials.Floorboards_M}
						position={[0.75, 0, 0.704]}
						scale={0.059}
					/>
				</group>

				<group position={[4.367, 0, 15.192]}>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low2_Floorboards_M_0_2.geometry
						}
						material={materials.Floorboards_M}
						position={[-17.284, 0, -1.704]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low3_Floorboards_M_0_2.geometry
						}
						material={materials.Floorboards_M}
						position={[-8.272, 0, 0]}
						scale={0.059}
					/>
					<mesh
						geometry={
							nodes.Floorboards_G1_Low_FBoard_6A_low_Floorboards_M_0_2.geometry
						}
						material={materials.Floorboards_M}
						position={[0.75, 0, 0.704]}
						scale={0.059}
					/>
				</group>
			</group>

			<group position={[0, 0, -13.146]}>
				<mesh
					geometry={nodes.Wall_Edge_low_Door_M_0.geometry}
					material={materials.Door_M}
					position={[-245.573, 0, 0]}
				/>
				<mesh
					geometry={nodes.Wall_Edge_low1_Door_M_0.geometry}
					material={materials.Door_M}
					position={[262.414, 0, 0]}
				/>
				<mesh
					geometry={nodes.Wall_Edge_low2_Door_M_0.geometry}
					material={materials.Door_M}
					position={[262.414, 0, 275.141]}
				/>
			</group>

			<mesh
				geometry={nodes.Door_Keyhole_low_Door_M_0.geometry}
				material={materials.Door_M}
				position={[0, 0, -18.945]}
			/>
			<mesh
				geometry={nodes.Door_Knob_low_Door_M_0.geometry}
				material={materials.Door_M}
				position={[-42.601, 93.904, -6.378]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[4.42, 3.143, 4.42]}
			/>
			<mesh
				geometry={nodes.Door_low_Door_M_0.geometry}
				material={materials.Door_M}
				position={[0, 39.371, -18.338]}
				scale={[95.526, 79.8, 11.634]}
			/>
			<mesh
				geometry={nodes.Door_Frame_low_DoorFrame_M_0.geometry}
				material={materials.DoorFrame_M}
				position={[0, 39.371, -10.395]}
				scale={[95.526, 79.8, 27.324]}
			/>
			<mesh
				geometry={nodes.Wall_Bottom_low_WallBottom_M_0.geometry}
				material={materials.WallBottom_M}
			/>
			<mesh
				geometry={nodes.Wall_Top_low_WallTop_M_0.geometry}
				material={materials.WallTop_M}
			/>
		</group>
	);
};

useGLTF.preload("models/stylised-room.glb");
