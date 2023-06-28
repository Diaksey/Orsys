/**
 * Fonction d'initialisation
 * @returns {undefined} aucun retour
 */
function init() {

  document
    .querySelector("#theme-switch")
    .addEventListener("change", function (evt) {
    changeTheme(evt.target.checked);
    });

    loadSelectImages(images);
    initMemeEditor();
    
  const event = new Date();
  console.log(event.toISOString());
  var footer = document.getElementsByTagName("footer")[0];
  /** footer.innerHTML=event.toISOString(); **/
  footer.style.backgroundColor = "rgba(255,145,130,0.5)";
  footer.style.color = "#DC143C";
  footer.style.fontStyle = "italic";
  footer.style.fontWeight = "800";
  footer.style.textDecoration = "underline";
}
/**
 * Changement du thème de la page
 * @param {boolean} isDark état du choix de thème Sombre/Clair
 */
function changeTheme(isDark) {
  var nav = document.getElementsByTagName("nav")[0];
  var slider = document.getElementById("theme-switch");
  var lbl = document.querySelector("#theme label");
  if (isDark) {
    document.body.className = "dark";
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
    slider.checked = true;
    lbl.innerHTML = "Clear";
  } else {
    document.body.className = "";
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
    slider.checked = false;
    lbl.innerHTML = "Dark";
  }
}
document.addEventListener("DOMContentLoaded", function (evt) {
  console.log(evt);
  init();
});