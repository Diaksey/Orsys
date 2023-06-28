/**
 * Variable de configuration des routes
 */
const routerConfif = {
  routes: [
    {
        path:'/thumbnail',
        initialisation:undefined,
        templateUrl:'/view/thumbnail.html'
    },
    {
        path:'/',
        initialisation:undefined,
        templateUrl:'/view/home.html'
    },
    {
        path:'/break',
        initialisation:undefined,
        templateUrl:'/view/CeCheminNexistePas.html'
    }
    
  ],
};

class Router{
    /**
     * Manage la route en cours
     */
     handleRoute(){
        const pathName = location.pathname;
        console.log(pathName);
     }
     /**
      * Allez à
      * @param {string} pathName Chemin commencant par / 
      */
     changeRoute(pathName){}
}
const router = new Router();
router.handleRoute();
router.changeRoute();