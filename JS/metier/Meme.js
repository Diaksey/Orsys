import REST_ADDR, { RESSOURCE_PATH } from "../constantes.js";

export class GenerateMeme {
  titre = "";
  text = "";
  x = 0;
  y = 20;
  imageId = -1;
  fontSize = 20;
  fontWeight = "500";
  underline = false;
  italic = false;
  color = "#000000";

  sauvegarder(callback){
    const save = fetch(REST_ADDR + RESSOURCE_PATH.memes, 
      {
        method:'POST',
        headers:{
          "Content-Type":"appication/json",
          "Accept":"application/json"
        },
        body: JSON.stringify(this),
      })
      .then(e => e.json())
      .then(o=>{
        if (this.underline!==callback){
          callback(0);
        }
      }) 
    }
  static render(meme, selecteurCss, img) {
    const svg = document.querySelector(selecteurCss + " svg");
    svg.setAttribute(
      "viewBox",
      `0 0 ${undefined !== img ? img.w : 500} ${
        undefined !== img ? img.h : 500
      }`
    );
    const textElement = svg.querySelector("text");
    const imgElement = svg.querySelector("image");

    imgElement.setAttribute(
      "xlink:href",
      undefined !== img
        ? img.url
        : "https://valorant-landing-page.vercel.app/assets/agents/jett.svg"
    );
    textElement.style.fill = meme.color;
    textElement.style.textDecoration = meme.underline ? "underline" : "none";
    textElement.setAttribute("font-weight", meme.fontWeight);
    textElement.setAttribute("font-size", meme.fontSize);
    textElement.setAttribute("x", meme.x);
    textElement.setAttribute("y", meme.y);
    textElement.innerHTML = meme.text;
    textElement.setAttribute("font-style", meme.italic ? "italic" : "normal");
  }
  
}
