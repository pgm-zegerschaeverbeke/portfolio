import initMoveInLeftAnimations from "./animations/move-in-left.js";
import initPopInAnimations from "./animations/pop-in.js";
import { renderProjects, renderFeaturedProjects, renderSkills } from "./Render.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

(function () {
  const $themeToggleButton = document.getElementById("theme-toggle");
  const $themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const $sunIcon = document.getElementById("sun-icon");
  const $moonIcon = document.getElementById("moon-icon");
  const $sunIconMobile = document.getElementById("sun-icon-mobile");
  const $moonIconMobile = document.getElementById("moon-icon-mobile");
  const $darkBackground = document.getElementById("dark-viewer");
  const $lightBackground = document.getElementById("light-viewer");

  function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateStyles(savedTheme);
  }

  function updateStyles(theme) {
    if (theme === "light") {
      if ($sunIcon) $sunIcon.style.display = "none";
      if ($moonIcon) $moonIcon.style.display = "inline";
      if ($sunIconMobile) $sunIconMobile.style.display = "none";
      if ($moonIconMobile) $moonIconMobile.style.display = "inline";
      if ($darkBackground) $darkBackground.style.display = "none";
      if ($lightBackground) $lightBackground.style.display = "block";
    } else {
      if ($sunIcon) $sunIcon.style.display = "inline";
      if ($moonIcon) $moonIcon.style.display = "none";
      if ($sunIconMobile) $sunIconMobile.style.display = "inline";
      if ($moonIconMobile) $moonIconMobile.style.display = "none";
      if ($darkBackground) $darkBackground.style.display = "block";
      if ($lightBackground) $lightBackground.style.display = "none";
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateStyles(newTheme);
  }

  if ($themeToggleButton) {
    $themeToggleButton.addEventListener("click", toggleTheme);
  }

  if ($themeToggleMobile) {
    $themeToggleMobile.addEventListener("click", toggleTheme);
  }

  loadTheme();
})();

function openModal(modalName) {
  const $modal = document.querySelector(`dialog[data-modal=${modalName}]`);
  $modal.showModal();

  const $closeButton = $modal.querySelector("[data-close]");
  $closeButton.addEventListener("click", () => $modal.close());

  $modal.addEventListener("click", (event) => {
    if (event.target === $modal) {
      $modal.close();
    }
  });
}

function initModals() {
  const $triggers = document.querySelectorAll("button[data-trigger]");

  $triggers.forEach(($trigger) => {
    $trigger.addEventListener("click", () => {
      openModal($trigger.getAttribute("data-trigger"));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initModals();

  const $sendBtn = document.getElementById("demo-send");
  const $form = document.getElementById("contact-form");

  if ($sendBtn && $form) {
    $sendBtn.addEventListener("click", () => {
      $form.reset();
    });
  }
});

if (document.getElementById("projects-grid")) {
  renderProjects();
}

if (document.getElementById("featured-projects")) {
  renderFeaturedProjects();
}

if (document.getElementById("skill-overview")) {
  renderSkills();
}

const $navToggle = document.getElementById("main-nav__toggle");
const $navMenu = document.getElementById("main-nav__menu");

if ($navToggle && $navMenu) {
  $navToggle.addEventListener("click", () => {
    $navToggle.classList.toggle("active");
    $navMenu.classList.toggle("active");
    const isExpanded = $navMenu.classList.contains("active");
    $navToggle.setAttribute("aria-expanded", isExpanded);
  });

  const $navLinks = $navMenu.querySelectorAll("a");
  $navLinks.forEach(($link) => {
    $link.addEventListener("click", () => {
      $navToggle.classList.remove("active");
      $navMenu.classList.remove("active");
      $navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const isClickInsideNav = $navMenu.contains(event.target) || $navToggle.contains(event.target) || (event.target.closest && event.target.closest(".main-nav__mobile-controls"));
    if (!isClickInsideNav && $navMenu.classList.contains("active")) {
      $navToggle.classList.remove("active");
      $navMenu.classList.remove("active");
      $navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPopInAnimations();
  initMoveInLeftAnimations();
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
