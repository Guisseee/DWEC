'use strict';

const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.btn--close-modal');
const btnsOpenModal= document.querySelectorAll('.btn--show-modal');

const openModal = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
  }
});


// Repaso Dom Parte3 en el classroom.

const header= document.querySelector('.header');
console.log(header);

const section= document.querySelectorAll('.section');
console.log(section);

const section1= document.getElementById('section--1');
console.log(section1);

const allButtons= document.getElementsByTagName('button');
console.log(allButtons);

const allButtons1= document.getElementsByClassName('button');
console.log(allButtons1);

const message= document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML= 
  'cookie message <button class="btn btn--close-cookie">Got It!</button>';
header.prepend(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function(){
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor= '#37383d';
message.style.width= '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color);
console.log(getComputedStyle(message).color);

console.log('height antes: '+getComputedStyle(message).height);
message.style.height= 
  Number.parseFloat(getComputedStyle(message).height, 10)+ 30+ 'px';
console.log('height después: '+getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orange');

const logo= document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.alt= 'logo interesante';
console.log(logo.alt);
logo.setAttribute('alt', 'nuevo Mensaje');
console.log(logo.alt);
logo.setAttribute('designer', 'Juan');
console.log(logo.getAttribute('designer'));
logo.setAttribute('nuevo_atributo', 'nn');
console.log(logo.getAttribute('nuevo_atributo'));
console.log(logo);

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link= document.querySelector('.nav__lin--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

console.log(logo.getAttribute('data-version-number'));

logo.classList.add('c', 'j');
logo.classList.remove('c');
console.log(logo.classList);
console.log('j: '+logo.classList.contains('j'));
console.log('j: '+logo.classList.contains('c'));

console.log(logo.classList.toggle('c'));
console.log(logo.classList);
console.log(logo.classList.toggle('j'));
console.log(logo.classList);

logo.className= 'clase-nueva';
console.log(logo.classList);

//Parte 4 Smooth scrolling
const btnScrollTo= document.querySelector('.btn--scroll-to');
const section1= document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const btnCoords= e.target.getBoundingClientRect();
  console.log(btnCoords);
  const X= window.scrollX;
  const Y= window.scrollY;
  console.log('X: '+ X);
  console.log('Y: '+ Y);
});

console.log(
  'heigth / width viewport: ',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
);

section1.scrollIntoView({ behavior: 'smooth'});

//Parte 5.Eventos
//Bankist-Eventos

const h1= document.querySelector('h1');
h1.addEventListener('mouseenter', function (e){
  alert('leyendo el título');
});

const alertH1= function (e){
  alert('leyendo el título');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

//Bankist - Propagacion de eventos
document.querySelector('.nav__link').addEventListener('click', function (e){
  console.log('LINK');
  this.style.backgroundColor= 'green';
});

document.querySelector('.nav__links').addEventListener('click', function (e){
  console.log('LINK');
  this.style.backgroundColor= 'orange';
});

document.querySelector('.nav').addEventListener('click', function (e){
  console.log('LINK');
  this.style.backgroundColor= 'blue';
});

+ñf3r