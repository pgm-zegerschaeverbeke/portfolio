(function () {
  const $themeToggleButton = document.getElementById("theme-toggle");
  const $sunIcon = document.getElementById("sun-icon");
  const $moonIcon = document.getElementById("moon-icon");
  const $darkBackground = document.getElementById("dark-viewer");
  const $lightBackground =document.getElementById("light-viewer")

  function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateStyles(savedTheme);
  }

  function updateStyles(theme) {
    if (theme === "light") {
      $sunIcon.style.display = "none";
      $moonIcon.style.display = "inline";
      $darkBackground.style.display = "none"
      $lightBackground.style.display = "block"
    } else {
      $sunIcon.style.display = "inline";
      $moonIcon.style.display = "none";
      $darkBackground.style.display = "block"
      $lightBackground.style.display = "none"
    }
  }

  $themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateStyles(newTheme);
  });

  loadTheme();

})();

function openModal(modalName) {
  const $modal = document.querySelector(`dialog[data-modal=${modalName}]`);
  $modal.showModal();

  const $closeButton = $modal.querySelector("[data-close]");
  $closeButton.addEventListener('click', () => $modal.close());
}

function initModals() {
  const $triggers = document.querySelectorAll('button[data-trigger]');

  $triggers.forEach($trigger => {
      $trigger.addEventListener('click', () => {
          openModal($trigger.getAttribute('data-trigger'));
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initModals();

  const $sendBtn = document.getElementById("demo-send");
  const $form = document.getElementById("contact-form");

  if ($sendBtn && $form) {
    $sendBtn.addEventListener("click", () => {
      $form.reset();
    });
  }
});
