//The document.querySelector() method allows you to identify the first element that matches the CSS selector you specify.
const sectionEl = document.querySelector(".article__section");


//This code will return all the div headings with "artictle_section". Including _header, _body, _footer
const sectionEl = document.querySelector(".article__section");


//Ex., retuning the footer
const footerEl = document.querySelector(".article__footer");


//Select a class, remove the text, and replace it with anew
const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");


//Retrieving a query using document.querySelectorAll(). Retrieving all section components.
//const is a variable. document is part of the DOM. = means this is that and vice versa. querySelectorALL is the build in Javascript.  () are the 'arguements'.
const sectionEl = document.querySelectorAll(".article__section")

NodeList(3)
0 : section.article__section.article__header
1 : section.article__section.article__body
2 : section.article__section.article__footer
