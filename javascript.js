/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadKnop = document.querySelector('footer button');
var mijnLijstNotificatie = document.querySelector('.melding');
var deleten = document.querySelector('article>button');
var verstop = document.querySelector('section div article:last-of-type');
var bewerken = document.querySelector('form ul li button');
console.log('test');



downloadKnop.addEventListener('click', function () {
    downloadKnop.classList.toggle('gedownload');
    mijnLijstNotificatie.classList.toggle('ping');
});


bewerken.addEventListener('click', function () {
    bewerken.classList.toggle('klik');
    console.log('pasta');
});


deleten.addEventListener('click', function () {
    deleten.classList.toggle('kruisje');
    verstop.classList.toggle('weg');
    console.log('rijst');
});
