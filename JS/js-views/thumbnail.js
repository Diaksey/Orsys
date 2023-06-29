import { GenerateMeme } from "../metier/Meme.js";
import { ressource } from "../metier/Ressources.js";

const baseView = "#thumbnail";
const PREWIEW_CONTAINER = "#thumbnail-container";
export const initThumb = () => {
  if (ressource.isLoaded) {
    initPreview();
  } else {
    ressource.loadRessources((res) => {
      initPreview();
    });
  }
};
const initPreview = () => {
  const ListContainer = document.querySelector(PREWIEW_CONTAINER);
  const memesViewer = document.querySelector("#thumbnail-meme-");
  ressource.memes.forEach((m) => {
    const newViewer = memesViewer.cloneNode(true);
    newViewer.id += m.id;
    newViewer.querySelector('a>div').innerHTML = m.titre;
    newViewer.querySelector('a').href += m.id;
    ListContainer.appendChild(newViewer);
    const img = ressource.images.find((im) => im.id === m.imageId);
    GenerateMeme.render(m, "#" + newViewer.id, img);
  });
};
