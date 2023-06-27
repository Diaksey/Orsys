/**
 * Fonction d'initialisation
 * @returns {undefined} aucun retour
 */
function init() {
    console.log('Coucou!');
    const event = new Date();
    console.log(event.toISOString());
    var footer=document.getElementsByTagName('footer')[0];
    /** footer.innerHTML=event.toISOString(); **/
    footer.style.backgroundColor='rgba(255,145,130,0.5)';
    footer.style.color='#DC143C';
    footer.style.fontStyle='italic';
    footer.style.fontWeight='800';
    footer.style.textDecoration='underline';

}
document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init();
})
