import REST_ADDR, { RESSOURCE_PATH } from "../constantes.js";
export class Ressources {
  // En privée pour garder le controle sur le contenu des array
  #isLoaded = false
  #images = [];
  #memes = [];
  get memes() {
    return this.#memes;
  }
  get images() {
    return this.#images;
  }
  get isLoaded() {
    return this.#isLoaded;
  }
  /**
   * Charges les ressources ncécessaires pour nos memes
   * @param {Function} callback 
   */
  loadRessources(callback) {
  
    const promiseImages = fetch(REST_ADDR + RESSOURCE_PATH.images).then(
      (resp) => resp.json()
    );
    const promiseMemes = fetch(REST_ADDR + RESSOURCE_PATH.memes).then((resp) =>
      resp.json()
    );
    Promise.all([promiseImages, promiseMemes]).then((array) => {
      console.log(array);
      this.#images.splice(0);
      this.#images.push(...array[0]);
      this.#memes.splice(0);
      this.#memes.push(...array[1]);
      this.#isLoaded = true ;
      if(undefined!==callback){
            callback(this)
  }});
  }
}
export const ressource = new Ressources();