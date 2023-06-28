import { initHome } from "./js-views/home.js";
// import { initThumb } from "./js-views/thumbnail.js";

/**
 * Variable de configuration des routes
 */
const routeConfig = {
  routes: [
    {
      path: "/thumbnail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation:initHome,
      templateUrl: "/view/home.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/view/CeCheminNexistePas.html",
    },
    {
      path: "/editor",
      initialisation: undefined,
      templateUrl: "/view/editor.html",
    },
    {
      path: "/azertyuiop",
      initialisation: undefined,
      templateUrl: "/view/azertyuiop.html",
    },
  ],
};

class Router {
  #currentRoute;
  get currentRoute() {
    return this.#currentRoute;
  }
  constructor(){
    document.addEventListener('DOMContentLoaded',(evt)=>{
        this.#initRouterLinks()
    })
  }
  // set currentRoute(value){this.#currentRoute=value}
  /**
   * Manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
    this.#currentRoute = routeConfig.routes.find(
      (route) => route.path == pathName
    );
    this.#instanciateCurrentRouteTemplate();
  }
  /**
   * Allez à
   * @param {string} pathName Chemin commencant par /
   */
  changeRoute(pathName) {
    history.pushState(undefined,undefined,pathName);
    this.handleRoute();
  }
  /**
   * Initialise le contenu du template si non présent
   * et déclenche le chargement DOM du contenu
   */
  #instanciateCurrentRouteTemplate() {
    if (undefined !== this.#currentRoute.templateText) {
      this.#loadCurrentDOMContent();
    } else {
      fetch(this.#currentRoute.templateUrl)
        .then((resp) => resp.text())
        .then((t) => {
          this.#currentRoute.templateText = t;
          this.#loadCurrentDOMContent();
        });
    }
  }
  /**
   * Chargement du contenu text/html de la vue dans le noeud du selecteur
   * @param {string} domContainerSelector css selecteur du noeud a charger pour la
   */
  #loadCurrentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }
  #initRouterLinks(baseSelector='body'){
    const links = document.querySelectorAll(baseSelector+'a');
    links.forEach(link=>(
        link.addEventListener('click',(evt)=>{
            evt.preventDefault()
        })
    ))
  }
}
export const router = new Router();
