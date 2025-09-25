import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapAnimationsProps {
	sectionRef: React.RefObject<HTMLElement>;
	animations: {
		trigger: string;
		duration?: number;
		ease?: string;
		yStart?: number;
		stagger?: number;
		relativeOffset?: string;
	}[];
}

export function useGsapAnimations({
	sectionRef,
	animations,
}: UseGsapAnimationsProps) {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "restart none none reverse",
				},
			});

			animations.forEach(
				({
					trigger,
					duration = 1,
					ease = "power3.out",
					yStart = 200,
					stagger = 0,
					relativeOffset = "-=0",
				}) => {
					timeline.fromTo(
						trigger,
						{ y: yStart, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration,
							ease,
							stagger,
						},
						relativeOffset
					);
				}
			);
		}, sectionRef);

		return () => ctx.revert();
	}, [animations, sectionRef]);
}
