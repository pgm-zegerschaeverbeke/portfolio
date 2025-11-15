import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { scrollTriggerConfig } from "./utils/animationUtils";

gsap.registerPlugin(ScrollTrigger, CustomEase);

function moveInLeftAnimation(element) {
  gsap.from(element, {
    x: -300,
    opacity: 0,
    duration: 2,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1 "
    ),
    scrollTrigger: scrollTriggerConfig(element),
  });
}

function initMoveInLeftAnimations() {
  const $moveInLeftElements = gsap.utils.toArray("[data-animation='move-in-left']");

  $moveInLeftElements.forEach((element) => {
    moveInLeftAnimation(element);
  });
}

export default initMoveInLeftAnimations;