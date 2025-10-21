import projects from "../data/projects.json";

export function renderProjects(gridId = "projects-grid") {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
    <li class="grid-list__item fadeInNOut">
      <h3 class="grid-list__title">${project.title}</h3>
      <div class="grid-list__actions">
        <button popovertarget="stack-${slugify(
          project.title
        )}" class="btn btn--secondary" aria-controls="stack-${slugify(
        project.title
      )}" aria-expanded="false">Tech Stack</button>
        <div class="popover" id="stack-${slugify(
          project.title
        )}" popover role="tooltip">${project.tech.join(", ")}</div>
        <button data-trigger="modal-${slugify(
          project.title
        )}" class="btn btn--secondary" aria-haspopup="dialog" aria-controls="modal-${slugify(
        project.title
      )}" aria-expanded="false">More info</button>
        <dialog data-modal="modal-${slugify(
          project.title
        )}" id="modal-${slugify(
        project.title
      )}" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-${slugify(
        project.title
      )}">
          <article class="modal__content">
            <img src="${project.image}" alt="${
        project.title
      } preview" class="modal__image" />
            <div class="modal__text">
              <h4 id="modal-title-${slugify(project.title)}">${
        project.modalTitle
      }</h4>
              <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
              <p>${project.description}</p>
            </div>
            <button data-close class="btn btn--close" aria-label="Close modal">Close</button>
          </article>
        </dialog>
      </div>
    </li>
  `
    )
    .join("");
}

// Helper to create a slug from a project title
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .replace(/(^-|-$)/g, "");
}
