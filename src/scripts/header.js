"use strict";


const headerTitle = document.getElementById("header__title");
const splashWrapper = document.getElementById("splash__wrapper");
const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);


window.addEventListener("scroll", () => {
	const titleBounds = headerTitle.getBoundingClientRect();
	const splashBounds = splashWrapper.getBoundingClientRect();
	const isDarkAlready = headerTitle.classList.contains("dark");

	const threshold = splashBounds.bottom - (fontSize * 3.75);

	if(titleBounds.bottom > threshold && !isDarkAlready) {
		headerTitle.classList.add("dark");
	}
	else if(titleBounds.bottom < threshold && isDarkAlready) {
		headerTitle.classList.remove("dark");
	}
});