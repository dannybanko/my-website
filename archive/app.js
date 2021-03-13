const mainImage = document.querySelector('.mainImage');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('#nav');
const footer = document.querySelector('#footer');

const tl = new TimelineMax();

tl.fromTo(mainImage, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(mainImage, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=.5")
.fromTo(navLinks, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=.5")
.fromTo(nav, 0.5, {opacity: 0, y: -30}, {opacity: .7, y: 0}, "-=.5")
.fromTo(footer, 0.5, {opacity: 0, x: 30}, {opacity: .7, x: 0}, "-=.5");

const overview = document.querySelector('.overview');

const t2 = new TimelineMax();
t2.fromTo(overview, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});
