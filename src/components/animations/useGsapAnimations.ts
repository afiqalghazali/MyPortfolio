import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationFactory = (defaults: {
	duration: number;
	ease: string;
}) => gsap.core.Animation | gsap.core.Animation[];

export function useGsapAnimations(
	sectionRef: React.RefObject<HTMLElement>,
	createAnimations: AnimationFactory,
	defaultOptions: { duration?: number; ease?: string } = {
		duration: 1,
		ease: "power3.out",
	}
) {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const animations = createAnimations({
				duration: defaultOptions.duration ?? 1,
				ease: defaultOptions.ease ?? "power3.out",
			});

			// Normalize to array
			const anims = Array.isArray(animations) ? animations : [animations];

			// Restart all animations on navClick
			const restart = () => anims.forEach((anim) => anim?.restart());
			window.addEventListener("navClick", restart);

			// Cleanup navClick listener
			return () => window.removeEventListener("navClick", restart);
		}, sectionRef);

		// Cleanup GSAP context
		return () => ctx.revert();
	}, [sectionRef, createAnimations, defaultOptions]);
}
