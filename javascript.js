/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadKnop = document.querySelector('footer button');
//console.log("downloadKnop", downloadKnop);
downloadKnop.addEventListener('click', function () {
    //console.log("downloadKnop", downloadKnop);
    downloadKnop.classList.toggle('gedownload');
});




var mijnLijstNotificatie = document.classList('.melding');



mijnLijstNotificatie.addEventListener('click', function () {
    downloadKnop.classList.toggle('.melding');
});
//

//var kruisjes = document.querySelector('footer button');


//document.querySelector('#knop').addEventListener('click', meme, false);
