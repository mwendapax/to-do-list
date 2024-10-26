import {
  mkElem,
  mkElemC,
  mkElemD,
  mkDivElemAppend,
  appendMultip,
} from "./fn.js";
import { addListToDOM } from "./addToDom.js";
import logoImg from "./assets/history.svg";
const mainUI = (function () {
  const header = mkElem("header");
  const nav = mkElem("nav");

  const logo = mkElemC("div", "logo");
  const logoImage = mkElem("div");
  const logoImgContainer = mkElem("img");

  logoImgContainer.setAttribute("src", logoImg);

  logoImage.appendChild(logoImgContainer);

  const logoTextContainer = mkElem("div");
  logoTextContainer.textContent = "Minimal list";

  appendMultip(logo, logoImage, logoTextContainer);

  const projects = mkElemC("div", "projects");
  const projectDiv = mkElem("div");
  projectDiv.textContent = "All";

  projectDiv.addEventListener("click", () => {
    addListToDOM();
  });

  projects.appendChild(projectDiv);

  let items = JSON.parse(localStorage.getItem("category"));

  mkDivElemAppend(projects, items);

  nav.appendChild(logo);
  nav.appendChild(projects);
  header.appendChild(nav);

  const lists = mkElemD("div", "lists");

  const newList = mkElemC("div", "new-list");
  newList.setAttribute("title", "Add a new todo");
  newList.textContent = "+";

  setInterval(() => {
    newList.setAttribute(
      "style",
      "border: 5px solid rgba(255, 255, 255, .4); border-radius : 50%",
    );
  }, 2000);

  setInterval(() => {
    newList.setAttribute(
      "style",
      "border: 5px solid rgb(255,255,255); border-radius : 50%",
    );
  }, 4000);

  return { header, lists, newList, projects, projectDiv };
})();

export { mainUI };
