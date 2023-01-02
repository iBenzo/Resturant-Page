import homePage from "./homePage";
import { clearPage } from "./clearPage";
import contactPage from "./contactPage";
import menuPage from "./menuPage";

/*This sets the eventlistener for the home menu button*/
let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  clearPage();
  homePage();
});

/*This sets the eventlistener for the menu button */
let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  clearPage();
  menuPage();
});

let contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", () => {
  clearPage();
  contactPage();
});

homePage();
