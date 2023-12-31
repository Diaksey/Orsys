import {Meme} from "./Meme.js"
import {images} from "./values.js";

var currentMeme = new Meme();
//console.log(currentMeme);
export function initMemeEditor() {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
   // renderMeme();
  });
  form["imageId"].addEventListener("input", function (evt) {
    currentMeme.imageId = Number (evt.target.value);
    renderMeme();
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    renderMeme();
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    renderMeme();
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    renderMeme();
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    renderMeme();
  });
  form["meme-fontSize"].addEventListener("input", function (evt) {
    currentMeme.fontSize = Number(evt.target.value);
    renderMeme();
  });
  form["meme-fontWeight"].addEventListener("input", function (evt) {
    currentMeme.fontWeight = evt.target.value;
    renderMeme();
  });
  form["Underline"].addEventListener("input", function (evt) {
    currentMeme.underline = evt.target.checked;
    renderMeme();
  });
  form["Italic"].addEventListener("input", function (evt) {
    currentMeme.italic = evt.target.checked;
    renderMeme();
  });
  loadSelectImages(images);
}

function renderMeme(meme) {
  if (undefined === meme) {
    meme = currentMeme;
  }
  var svg = document.querySelector("#editor-view svg");
  var textElement = svg.querySelector("text");
  var imgElement = svg.querySelector("image");
  var img=images.find(function(img){
    return img.id==meme.imageId})

  imgElement.setAttribute('xlink:href', undefined !==img ? img.url : "https://valorant-landing-page.vercel.app/assets/agents/jett.svg");
  textElement.style.fill = meme.color;
  textElement.style.textDecoration = meme.underline ? "underline" : "none";
  textElement.setAttribute("font-weight", meme.fontWeight);
  textElement.setAttribute("font-size", meme.fontSize);
  textElement.setAttribute("x", meme.x);
  textElement.setAttribute("y", meme.y);
  textElement.innerHTML = meme.text;
  textElement.setAttribute("font-style", meme.italic ? "italic" : "normal");
  svg.setAttribute('viewBox', `0 0 ${undefined !== img ? img.w :500} ${undefined !== img ? img.h : 500}`); 
}

function loadSelectImages(images) {
  var select = document.forms["meme-form"]["imageId"];
  var children0 = select.children[0].cloneNode(true);
  select.innerHTML="";
  //for (var index = 1; index < children.length; index++) {
  //  children[index].remove();
  //}
  //document.forms['meme-form']['imageId'];
  var optBase = document.createElement("option");
  optBase.value = "erty";
  optBase.innerHTML = "text-visuel";
  select.appendChild(optBase);

  images.forEach(function (img) {
  var opt = optBase.cloneNode(true);
  opt.value = img.id;
  opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
}