const body = document.querySelector("body");
const button = document.querySelector("#btn");
const divBackground = document.querySelector("body > div");
const title = document.querySelector("body > h1");
const subtitle = document.querySelector("body > h3");

button.addEventListener("click", (e) => {
  console.log(e.target);
  if (button.textContent !== "Background Changed!") {
    button.textContent = "Background Changed!";
    body.classList.add("change");
    divBackground.classList.add("divChange");
    title.classList.add("textChange");
    subtitle.classList.add("textChange");
  } else {
    button.textContent = "Change Background!";
    body.classList.remove("change");
    divBackground.classList.remove("divChange");
    title.classList.remove("textChange");
    subtitle.classList.remove("textChange");
  }
});
