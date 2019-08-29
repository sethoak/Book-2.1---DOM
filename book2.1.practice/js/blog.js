/*
Use JavaScript to obtain a reference to the first section with the class of 
article_header and change its text with the textContent property to 
"Welcome to the {insert your name here} blog"
*/

const seekANDdestroy = document.querySelector(".article__header");
seekANDdestroy.classList.remove("article__header");
seekANDdestroy.classList.add("new_header");

const name = "Seth";

const replacetext = `Welcome to ${name}'s blog!`;

seekANDdestroy.textContent = replacetext;

console.log("seekANDdestroy", seekANDdestroy);

/*
Use JavaScript to obtain a reference to all article__header elements and change 
their classList property value to article__header important.
*/

const alterhead = document.querySelectorAll(".article__header");
for (let i = 0; i < alterhead.length; i++) {
  console.log("alterhead", alterhead[i]);
  alterhead[i].classList.add("important");
}

//Obtain a reference the element with a class of dashed and remove it.

const removeDASH = document.querySelector(".dashed");
removeDASH.classList.remove("dashed");

/*
Obtain a reference the element with a class of article_footer and add the 
class of goldenrod it.
*/

const goldenRODcolor = document.querySelector(".article__footer");
goldenRODcolor.classList.remove("article__footer");
goldenRODcolor.classList.add("goldenrod");
