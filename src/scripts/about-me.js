"use strict";


const container = document.getElementById("about__wrapper");
const img = document.getElementById("about__img");


var imageIsVisible = false;


function setup() {
	img.classList.add("hidden");
	window.addEventListener("scroll", onScrollHandler);
	onScrollHandler();
}


function onScrollHandler() {
	const coords = container.getBoundingClientRect();

	if(!imageIsVisible && coords.top > 0 && coords.top < (window.innerHeight * 0.65)) {
		imageIsVisible = true;
		window.removeEventListener("scroll", onScrollHandler)
		img.classList.remove("hidden");
	}
}


setup();
