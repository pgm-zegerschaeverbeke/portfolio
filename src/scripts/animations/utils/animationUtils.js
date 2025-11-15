import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollTriggerConfig(trigger) {
  return {
      trigger: trigger,
      start: "top 85%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      markers: true,
  };
}