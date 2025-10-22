import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { scrollTriggerConfig } from "./utils/animationUtils";

gsap.registerPlugin(ScrollTrigger, CustomEase);

function popInAnimation(element) {
  gsap.from(element, {
    y: 150,
    opacity: 0,
    duration: 1.5,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1 "
    ),
    scrollTrigger: scrollTriggerConfig(element),
  });
}

function initPopInAnimations() {
  const $popInElements = gsap.utils.toArray("[data-animation='pop-in']");

  $popInElements.forEach((element) => {
    console.log("Animating pop-in element:", element);
    popInAnimation(element);
  });
}

export default initPopInAnimations;