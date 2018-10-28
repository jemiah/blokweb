/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var downloadKnop = document.querySelector('footer button');
var mijnLijstNotificatie = document.classList('.melding');

downloadKnop.addEventListener('click', function () {
    downloadKnop.classList.toggle('gedownload');
});
mijnLijstNotificatie.addEventListener('click', function () {
    downloadKnop.classList.toggle('.melding');
});


var kruisjes = document.querySelector('footer button');


document.querySelector('#knop').addEventListener('click', meme, false);
