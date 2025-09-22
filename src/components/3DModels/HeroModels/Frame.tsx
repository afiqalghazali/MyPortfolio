import React, { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type FrameProps = JSX.IntrinsicElements["group"];

export const Frame: React.FC<FrameProps> = (props) => {
	const { nodes, materials } = useGLTF(
		"models/frame-lowpoly.glb"
	) as unknown as {
		nodes: {
			frame_01_Target2_mat_Frame_1_silver_0: THREE.Mesh;
		};
		materials: {
			mat_Frame_1_silver: THREE.MeshStandardMaterial;
		};
	};

	return (
		<group {...props} dispose={null}>
			<group>
				<mesh
					geometry={nodes.frame_01_Target2_mat_Frame_1_silver_0.geometry}
					material={materials.mat_Frame_1_silver}
					position={[7.759, 22.491, 1.237]}
					scale={[7.776, 7.776, 12.567]}
				/>
			</group>
		</group>
	);
};

useGLTF.preload("models/frame-lowpoly.glb");
