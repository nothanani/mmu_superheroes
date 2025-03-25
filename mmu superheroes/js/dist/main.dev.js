"use strict";

var menuBtn = document.querySelector('.menu-btn'); //cons= dont wanna change, keep it constant

var hamburger = document.querySelector // The querySelector() = returns the first element that matches a CSS selector.
//querySelectorAll() = return all matches
('.menu-btn_burger');
var nav = document.querySelector('.nav');
var menuNav = document.querySelector('.menu-nav');
var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    showMenu = false;
  }
}