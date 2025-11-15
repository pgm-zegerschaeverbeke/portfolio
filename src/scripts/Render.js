import skills from "../data/skills.json";
import projects from "../data/projects.json";

export function renderProjects(gridId = "projects-grid") {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
    <li class="grid-list__item fadeInNOut" id="project-${slugify(project.title)}">
      <h3 class="grid-list__title">${project.title}</h3>
      <div class="grid-list__actions">
        <button data-trigger="modal-${slugify(
          project.title
        )}" class="btn btn--primary" aria-haspopup="dialog" aria-controls="modal-${slugify(
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
              ${project.github ? `<p class="modal__github-hint">Click <strong>Code</strong> to check out my code on GitHub</p>` : ''}
            </div>
            <div class="modal__actions">
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--actions btn--tertiary">Code</a>` : ''}
              <button data-close class="btn btn--actions btn--secondary" aria-label="Close modal">Close</button>
            </div>
          </article>
        </dialog>
      </div>
    </li>
  `
    )
    .join("");
}

export function renderFeaturedProjects(ulId = "featured-projects") {
  const ul = document.getElementById(ulId);
  if (!ul) return;

  const featuredProjects = projects.filter((project) => project.is_featured);
  
  ul.innerHTML = featuredProjects
    .map(
      (project) => `
    <li class="quick-flip">
      <button class="card" data-trigger="modal-${slugify(project.title)}" aria-labelledby="title-${slugify(project.title)}" aria-haspopup="dialog" aria-controls="modal-${slugify(project.title)}">
        <article>
          <h3 id="title-${slugify(project.title)}" class="card__title">${
        project.title
      }</h3>
          <p class="card__description">${project.description}</p>
          <hr class="card__divider">
        </article>
      </button>
    </li>
  `
    )
    .join("");
  
  // Render modals for featured projects
  const modalsContainer = document.createElement("div");
  modalsContainer.innerHTML = featuredProjects
    .map(
      (project) => `
    <dialog data-modal="modal-${slugify(project.title)}" id="modal-${slugify(project.title)}" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-${slugify(project.title)}">
      <article class="modal__content">
        <img src="${project.image}" alt="${project.title} preview" class="modal__image" />
        <div class="modal__text">
          <h4 id="modal-title-${slugify(project.title)}">${project.modalTitle}</h4>
          <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
          <p>${project.description}</p>
          ${project.github ? `<p class="modal__github-hint">Click <strong>Code</strong> to check out my code on GitHub</p>` : ''}
        </div>
        <div class="modal__actions">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--actions btn--tertiary">Code</a>` : ''}
          <button data-close class="btn btn--actions btn--secondary" aria-label="Close modal">Close</button>
        </div>
      </article>
    </dialog>
  `
    )
    .join("");
  
  document.body.appendChild(modalsContainer);
}

export function renderSkills(ulId = "skill-overview") {
  const ul = document.getElementById(ulId);
  if (!ul) return;

  ul.innerHTML = skills
    .map(
      (group) => `
        <li class="list list--column list-skill__group">
          <span class="list-skill__group-title">${group.icon} ${
        group.group
      }:</span>
          <ul class="list-skill__items">
            ${group.skills
              .map((skill) => `<li class="list-skill__item">&#x2022; ${skill}</li>`)
              .join("")}
          </ul>
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
