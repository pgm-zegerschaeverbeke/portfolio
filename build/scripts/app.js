/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/projects.json":
/*!********************************!*\
  !*** ./src/data/projects.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"title":"Stam remake","tech":["HTML","CSS Grid","JS"],"image":"src/images/stam-mockup.webp","modalTitle":"Stam Remake @work-1","description":"A clean and responsive redesign of the STAM museum site using modern layout techniques and smooth animations.","is_featured":true},{"title":"Best of 2024","tech":["HTML","CSS","CSS Grid","JavaScript"],"image":"src/images/bestOf-mockup.webp","modalTitle":"Best of 2024 @work-1","description":"A curated overview of 2024\'s standout songs, albums, movies, and series — fetched from external sources and displayed in an engaging, data-driven layout.","is_featured":true},{"title":"Small app","tech":["Figma"],"image":"src/images/smallApp-mockup.webp","modalTitle":"Small music app WEB-2","description":"A sleek and intuitive music app concept, designed in Figma to explore UI patterns for browsing, playing, and organizing songs.","is_featured":false},{"title":"To do app","tech":["HTML","CSS","Node","Express","JavaScript"],"image":"src/images/todo-mockup.webp","modalTitle":"To do app PGM-3","description":"A functional to-do list app built with Node and Express, featuring task creation, categorization, and dynamic updates — designed to manage daily goals with clarity and structure.","is_featured":false},{"title":"Paws.","tech":["HTML","CSS"],"image":"src/images/paws-mockup.webp","modalTitle":"Paws. digital agency WEB-1","description":"A concept website for a fictional digital agency, showcasing modern design, service sections, and a clean layout to reflect a professional online presence.","is_featured":true},{"title":"Portfolio one pager","tech":["HTML","CSS"],"image":"src/images/portfolio-mockup.webp","modalTitle":"Portfolio WEB-2","description":"A dynamic portfolio site built in Web-2, featuring a masonry grid layout and rich animations to showcase creative work in an engaging, interactive flow.","is_featured":false},{"title":"Gamescom","tech":["HTML","CSS","JavaScript"],"image":"src/images/gamescom-mockup.webp","modalTitle":"Gamescom PGM-1","description":"A dynamic Gamescom-themed website brought to life with JavaScript — featuring interactive elements, live data handling, and a focus on immersive user experience.","is_featured":false},{"title":"Joie","tech":["HTML","CSS"],"image":"src/images/joie-mockup.webp","modalTitle":"Joie personal project","description":"Joie is a personal branding and design project for a fictional clothing label, created prior to my studies. It blends minimal aesthetics with a bold visual identity to capture a modern fashion vibe.","is_featured":false}]');

/***/ }),

/***/ "./src/scripts/Render.js":
/*!*******************************!*\
  !*** ./src/scripts/Render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFeaturedProjects: () => (/* binding */ renderFeaturedProjects),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projects.json */ "./src/data/projects.json");

function renderProjects() {
  var gridId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "projects-grid";
  var grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = _data_projects_json__WEBPACK_IMPORTED_MODULE_0__.map(function (project) {
    return "\n    <li class=\"grid-list__item fadeInNOut\">\n      <h3 class=\"grid-list__title\">".concat(project.title, "</h3>\n      <div class=\"grid-list__actions\">\n        <button popovertarget=\"stack-").concat(slugify(project.title), "\" class=\"btn btn--secondary\" aria-controls=\"stack-").concat(slugify(project.title), "\" aria-expanded=\"false\">Tech Stack</button>\n        <div class=\"popover\" id=\"stack-").concat(slugify(project.title), "\" popover role=\"tooltip\">").concat(project.tech.join(", "), "</div>\n        <button data-trigger=\"modal-").concat(slugify(project.title), "\" class=\"btn btn--secondary\" aria-haspopup=\"dialog\" aria-controls=\"modal-").concat(slugify(project.title), "\" aria-expanded=\"false\">More info</button>\n        <dialog data-modal=\"modal-").concat(slugify(project.title), "\" id=\"modal-").concat(slugify(project.title), "\" class=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title-").concat(slugify(project.title), "\">\n          <article class=\"modal__content\">\n            <img src=\"").concat(project.image, "\" alt=\"").concat(project.title, " preview\" class=\"modal__image\" />\n            <div class=\"modal__text\">\n              <h4 id=\"modal-title-").concat(slugify(project.title), "\">").concat(project.modalTitle, "</h4>\n              <p><strong>Tech:</strong> ").concat(project.tech.join(", "), "</p>\n              <p>").concat(project.description, "</p>\n            </div>\n            <button data-close class=\"btn btn--close\" aria-label=\"Close modal\">Close</button>\n          </article>\n        </dialog>\n      </div>\n    </li>\n  ");
  }).join("");
}
function renderFeaturedProjects() {
  var ulId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "featured-projects";
  var ul = document.getElementById(ulId);
  if (!ul) return;
  ul.innerHTML = _data_projects_json__WEBPACK_IMPORTED_MODULE_0__.filter(function (project) {
    return project.is_featured;
  }).map(function (project) {
    return "\n    <li class=\"quick-flip\">\n      <article class=\"card\" aria-labelledby=\"title-".concat(slugify(project.title), "\">\n        <h3 id=\"title-").concat(slugify(project.title), "\" class=\"card__title\">").concat(project.title, "</h3>\n        <p class=\"card__description\">").concat(project.description, "</p>\n        <hr class=\"card__divider\">\n      </article>\n    </li>\n  ");
  }).join("");
}

// Helper to create a slug from a project title
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "").replace(/(^-|-$)/g, "");
}

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.js */ "./src/scripts/Render.js");

(function () {
  var $themeToggleButton = document.getElementById("theme-toggle");
  var $sunIcon = document.getElementById("sun-icon");
  var $moonIcon = document.getElementById("moon-icon");
  var $darkBackground = document.getElementById("dark-viewer");
  var $lightBackground = document.getElementById("light-viewer");
  function loadTheme() {
    var savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateStyles(savedTheme);
  }
  function updateStyles(theme) {
    if (theme === "light") {
      $sunIcon.style.display = "none";
      $moonIcon.style.display = "inline";
      $darkBackground.style.display = "none";
      $lightBackground.style.display = "block";
    } else {
      $sunIcon.style.display = "inline";
      $moonIcon.style.display = "none";
      $darkBackground.style.display = "block";
      $lightBackground.style.display = "none";
    }
  }
  $themeToggleButton.addEventListener("click", function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateStyles(newTheme);
  });
  loadTheme();
})();
function openModal(modalName) {
  var $modal = document.querySelector("dialog[data-modal=".concat(modalName, "]"));
  $modal.showModal();
  var $closeButton = $modal.querySelector("[data-close]");
  $closeButton.addEventListener("click", function () {
    return $modal.close();
  });
}
function initModals() {
  var $triggers = document.querySelectorAll("button[data-trigger]");
  $triggers.forEach(function ($trigger) {
    $trigger.addEventListener("click", function () {
      openModal($trigger.getAttribute("data-trigger"));
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  initModals();
  var $sendBtn = document.getElementById("demo-send");
  var $form = document.getElementById("contact-form");
  if ($sendBtn && $form) {
    $sendBtn.addEventListener("click", function () {
      $form.reset();
    });
  }
});
if (document.getElementById("projects-grid")) {
  (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
}
if (document.getElementById("featured-projects")) {
  (0,_Render_js__WEBPACK_IMPORTED_MODULE_0__.renderFeaturedProjects)();
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/scripts/app": 0,
/******/ 			"styles/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstarter_code"] = self["webpackChunkstarter_code"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/main"], () => (__webpack_require__("./src/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/main"], () => (__webpack_require__("./src/styles/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;