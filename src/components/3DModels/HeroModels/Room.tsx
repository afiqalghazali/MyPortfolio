import React, { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type RoomProps = JSX.IntrinsicElements["group"];

const Room: React.FC<RoomProps> = (props) => {
	const { nodes, materials } = useGLTF(
		"models/stylised-room.glb"
	) as unknown as {
		nodes: {
			Door_Keyhole_low_Door_M_0: THREE.Mesh;
			Door_Frame_low_DoorFrame_M_0: THREE.Mesh;
			Wall_Bottom_low_WallBottom_M_0: THREE.Mesh;
			Wall_Top_low_WallTop_M_0: THREE.Mesh;
			Floorboards_G1_Low_FBoard_6A_low1_Floorboards_M_0: THREE.Mesh;
		};
		materials: {
			Door_M: THREE.Material;
			DoorFrame_M: THREE.Material;
			WallBottom_M: THREE.Material;
			WallTop_M: THREE.Material;
			Floorboards_M: THREE.Material;
		};
	};

	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Door_Keyhole_low_Door_M_0.geometry}
				material={materials.Door_M}
				position={[0, 0, -18.945]}
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
			<mesh
				geometry={
					nodes.Floorboards_G1_Low_FBoard_6A_low1_Floorboards_M_0.geometry
				}
				material={materials.Floorboards_M}
				position={[-380.537, -3.709, 16.261]}
			/>
		</group>
	);
};

useGLTF.preload("models/stylised-room.glb");

export default Room;
