import { GenerateMeme } from "../metier/Meme.js";
import { ressource } from "../metier/Ressources.js";
import { router } from "../router.js";

let currentMeme;
let currentImage;
const VIEW_EDITOR_SELECTOR = "#editor";

export const initEditor = () => {
  if(undefined!== router.params.id){
    currentMeme=ressource.memes.find(m=>m.id===router.params.id)
  }else{currentMeme=new GenerateMeme()}
  initFormEvent();

  if (ressource.isLoaded) {
    initSelectImages();
    setCurrentMeme(new GenerateMeme())
  } else {
    ressource.loadRessources((res) => {
      initSelectImages();
      setCurrentMeme(new GenerateMeme())
    });
  }
};

const initFormEvent = () => {
  var form = document.forms["meme-form"];
  form.addEventListener('submit',(evt=>{
    evt.preventDefault();
    currentMeme.sauvegarder((memeSaved=>{
      ressource.memes.push(memeSaved );
      router.changeRoute('/thumbnail')
    }));
  }))
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
  });
  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    currentImage = ressource.images.find(
      (img) => img.id === currentMeme.imageId
    );
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["fontSize"].addEventListener("input", function (evt) {
    currentMeme.fontSize = Number(evt.target.value);
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["fontWeight"].addEventListener("input", function (evt) {
    currentMeme.fontWeight = evt.target.value;
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["underline"].addEventListener("input", function (evt) {
    currentMeme.underline = evt.target.checked;
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
  form["italic"].addEventListener("input", function (evt) {
    currentMeme.italic = evt.target.checked;
    GenerateMeme.render(currentMeme, VIEW_EDITOR_SELECTOR, currentImage);
  });
};
const initFormValues = () => {
  const form = document.forms['meme-form']
  form["titre"].value = currentMeme.titre;
  form['text'].value = currentMeme.text;
  form['x'].value = currentMeme.x;
  form['y'].value = currentMeme.y;
  form['imageId'].value = currentMeme.imageId;
  form['fontSize'].value = currentMeme.fontSize;
  form['fontWeight'].value = currentMeme.fontWeight;
  form['color'].value = currentMeme.color;
  form['underline'].checked = currentMeme.underline;
  form['italic'].checked = currentMeme.italic;
};
const setCurrentMeme = (meme=currentMeme) => {
  currentMeme = meme;
  initFormValues();
  const img = ressource.images.find((im) => im.id === meme.imageId);
  GenerateMeme.render(meme, VIEW_EDITOR_SELECTOR, img);
};

const initSelectImages = () => {
  var select = document.forms["meme-form"]["imageId"];
  select.innerHTML = "";

  var optBase = document.createElement("option");
  optBase.value = "-1";
  optBase.innerHTML = "Aucunes images";
  select.appendChild(optBase);

  ressource.images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
};
const reloadSelectImages = () => {};
