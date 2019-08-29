const seekANDdestroy = document.querySelector(".article__header");
seekANDdestroy.classList.remove("article__header");
seekANDdestroy.classList.add("new_header");

const name = "Seth";

const replacetext = `Welcome to ${name}'s blog!`;

seekANDdestroy.textContent = replacetext;

console.log("seekANDdestroy", seekANDdestroy);
