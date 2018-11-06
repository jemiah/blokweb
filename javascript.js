/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadKnop = document.querySelector('footer button');
var mijnLijstNotificatie = document.querySelector('.melding');
var bewerken = document.querySelector('form ul li button');
var deletenEen = document.querySelector('article>button');
var deletenTwee = document.querySelector('article:nth-of-type(2)>button');
var verstop = document.querySelector('.verdwijn');
var form = document.querySelector('nav > ul > li:nth-child(4)');
var zoek = document.querySelector('.zoek');
console.log('test');


downloadKnop.addEventListener('click', function () {
    downloadKnop.classList.toggle('gedownload');
    mijnLijstNotificatie.classList.toggle('ping');
});


bewerken.addEventListener('click', function (event) {
    event.preventDefault();
    bewerken.classList.toggle('klik');
    deletenEen.classList.toggle('show');
    deletenTwee.classList.toggle('show');
    console.log('pastaaaaa');
});

form.addEventListener('click', function (event) {
    event.preventDefault();
    zoek.classList.toggle('laatzien');
    form.addEventListener('zoekknop');
    console.log('testa');
});

deletenTwee.addEventListener('click', function () {
    verstop.classList.toggle('verwijderen');
    deletenTwee.classList.toggle('kruisje');
    console.log('rijst');
});
