window.onload = function(){

let h1 = document.querySelector("h1");
h1.remove();
let h1Tag = document.createElement("h1");
document.querySelector("body").append(h1Tag);
h1Tag.append("Webpage Recreation Practice");
let pTag = document.createElement("p");
h1Tag.after(pTag);
pTag.append("The HTML of this webpage was created with JavaScript.");

let imgTag = document.createElement("img");
pTag.after(imgTag);
imgTag.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
imgTag.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
imgTag.setAttribute("style", "width:50%");
let h1Tag2 = document.createElement("h1");
imgTag.after(h1Tag2);

h1Tag2.append("Facts about the Multicolored Tanager");

let ul = document.createElement("ul");
h1Tag2.after(ul);

let li1 = document.createElement("li");
let li2 = document.createElement("li");

li1.append("It is endemic to the mountains of Colombia.");
li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

ul.append(li1, li2);

let h2Tag = document.createElement("h2");
li2.after(h2Tag);
h2Tag.append("Source");

let aTag = document.createElement("a");

h2Tag.after(aTag);
aTag.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
aTag.append("Wikipedia");
}

