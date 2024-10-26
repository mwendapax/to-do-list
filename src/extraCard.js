import { mkElem, mkElemC, appendMultip } from "./fn.js";
import supportIcon from "./assets/support.svg";

const extraCard = mkElemC("div", "extra-card");

const priority = mkElem("div");
priority.textContent = "Priority";

const lowCard = mkElemC("div", "low-card");

const lowCardDiv = mkElem("div");
const lowCardText = mkElem("div");
lowCardText.textContent = "Low";

appendMultip(lowCard, lowCardDiv, lowCardText);

const midCard = mkElemC("div", "mid-card");

const midCardDiv = mkElem("div");
const midCardText = mkElem("div");
midCardText.textContent = "Mid";

appendMultip(midCard, midCardDiv, midCardText);

const highCard = mkElemC("div", "high-card");

const highCardDiv = mkElem("div");
const highCardText = mkElem("div");
highCardText.textContent = "High";

appendMultip(highCard, highCardDiv, highCardText);

const helpCard = mkElem("div");
helpCard.setAttribute("title", "View on Github");

const helpCardImg = mkElem("img");
helpCardImg.setAttribute("src", supportIcon);
helpCardImg.setAttribute("alt", "spanner support icon");
helpCardImg.setAttribute("width", "20px");

helpCard.appendChild(helpCardImg);

appendMultip(extraCard, priority, lowCard, midCard, highCard, helpCard);

export { extraCard };
