var heading = document.createElement("h1");
var graf = document.createElement("p");

var h1Text = document.createTextNode("I'm a heading!");
var paraText = document.createTextNode("I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph. I'm a paragraph.");

heading.appendChild(h1Text);
graf.appendChild(paraText);

document.getElementById("content").appendChild(heading);
document.getElementById("content").appendChild(graf);

graf.setAttribute("align", "center");
