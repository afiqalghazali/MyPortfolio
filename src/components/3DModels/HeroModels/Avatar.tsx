import React, { useEffect, useMemo, useRef, type JSX } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

type AvatarProps = JSX.IntrinsicElements["group"];

export const Avatar: React.FC<AvatarProps> = (props) => {
	const group = useRef<THREE.Group>(null);

	// Load avatar + clone to keep skeleton safe
	const { scene } = useGLTF("models/my-avatar.glb");
	const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);

	// Load idle animation
	const { animations } = useFBX("animations/happy-idle.fbx");
	animations[0].name = "HappyIdle";
	const { actions } = useAnimations(animations, clone);

	// Make head follow mouse
	useFrame((state) => {
		const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
		group.current?.getObjectByName("Head")?.lookAt(target);
	});

	// Play idle animation
	useEffect(() => {
		actions.HappyIdle?.reset().fadeIn(0.5).play();
		return () => {
			actions.HappyIdle?.fadeOut(0.5);
		};
	}, [actions]);

	const meshes = [
		["Wolf3D_Hair", "Wolf3D_Hair"],
		["Wolf3D_Glasses", "Wolf3D_Glasses"],
		["Wolf3D_Outfit_Top", "Wolf3D_Outfit_Top"],
		["Wolf3D_Outfit_Bottom", "Wolf3D_Outfit_Bottom"],
		["Wolf3D_Outfit_Footwear", "Wolf3D_Outfit_Footwear"],
		["Wolf3D_Body", "Wolf3D_Body"],
		["EyeLeft", "Wolf3D_Eye"],
		["EyeRight", "Wolf3D_Eye"],
		["Wolf3D_Head", "Wolf3D_Skin"],
		["Wolf3D_Teeth", "Wolf3D_Teeth"],
	] as const;

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation-x={-Math.PI / 2}>
				{meshes.map(([name, mat]) => {
					const mesh = nodes[name] as THREE.SkinnedMesh;
					return (
						<skinnedMesh
							key={name}
							name={name}
							geometry={mesh.geometry}
							material={materials[mat]}
							skeleton={mesh.skeleton}
							morphTargetDictionary={mesh.morphTargetDictionary}
							morphTargetInfluences={mesh.morphTargetInfluences}
						/>
					);
				})}
			</group>
			{/* Keep original hierarchy for bones/animations */}
			<primitive object={clone} />
		</group>
	);
};

useGLTF.preload("models/my-avatar.glb");
