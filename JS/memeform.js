var currentMeme = new Meme();
//console.log(currentMeme);
function initMemeEditor() {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    renderMeme();
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
}

function renderMeme(meme) {
  if (undefined === meme) {
    meme = currentMeme;
  }
  var svg = document.querySelector("#editor-view svg");
  var textElement = svg.querySelector("text");
  var imgElement = svg.querySelector("images");
  var imgHref=images.find(function(img){return img.id===meme.imageId}).url

  imgElement.setAttribute('xlink:href', imgHref)
  textElement.style.fill = meme.color;
  // textElement.setAttribute('underline', meme.underline);
  textElement.style.textDecoration = meme.underline ? "underline" : "none";
  textElement.setAttribute("font-weight", meme.fontWeight);
  textElement.setAttribute("font-size", meme.fontSize);
  textElement.setAttribute("x", meme.x);
  textElement.setAttribute("y", meme.y);
  textElement.innerHTML = meme.text;
  textElement.setAttribute("font-style", meme.italic ? "italic" : "normal");
  //textElement.style.fontStyle = meme.italic ? "italic" : "normal" ;
}
function loadSelectImages(images) {
  var select = document.forms["meme-form"]["imageId"];
  var children = select.children[0].cloneNode(true);
  select.innerHTML='';
  for (var index = 1; index < children.length; index++) {
    children[index].remove();
  }
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
