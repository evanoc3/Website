"use strict";


// DOM Elements
const header = document.getElementById("header");
const headerTitle = document.getElementById("header__title");
const navMenuButton = document.getElementById("header__nav__button");
const navContainer = document.getElementById("header__nav__links");
const splashWrapper = document.getElementById("splash__wrapper");

// Variables
let fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
let isSmallScreen = window.matchMedia("(min-width: 415px").matches;



function resizeHandler() {
	fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
	isSmallScreen = window.matchMedia("(min-width: 415px").matches;

	scrollHandler();
}


function scrollHandler() {
	const titleY = headerTitle.getBoundingClientRect().bottom;
	const splashY = splashWrapper.getBoundingClientRect().bottom;
	const isDarkAlready = header.classList.contains("contrast");
	const isMinAlready = header.classList.contains("min");

	const minimizeThreshold = isSmallScreen ? (fontSize * 3) : (fontSize * 4);
	const contrastThreshold = isSmallScreen ? (splashY - (fontSize * 3)) : (splashY - (fontSize * 3.75));

	// Set the color of the title
	if(titleY > contrastThreshold && !isDarkAlready) {
		header.classList.add("contrast");
	}
	else if(titleY < contrastThreshold && isDarkAlready) {
		header.classList.remove("contrast");
	}

	// Set whether the header is in minimized form or not
	if(splashY < minimizeThreshold && !isMinAlready) {
		header.classList.add("min");
	}
	else if(splashY > minimizeThreshold && isMinAlready) {
		header.classList.remove("min");
	}
}


function overrideNavLinks() {
	function setHash(newHash) {
		if(history.pushState) {
			history.pushState(null, null, newHash);
		}
		else {
			location.hash = newHash;
		}
	}

	const navLinks = navContainer.querySelectorAll("a.header__link");

	for(const navLink of navLinks) {
		const hrefParts = navLink.href.split("#");
		const targetId = hrefParts[hrefParts.length - 1];

		const target = document.getElementById(targetId);

		navLink.addEventListener("click", (e) => {
			e.preventDefault();

			if(target) {
				const targetY = window.scrollY + target.getBoundingClientRect().top - (fontSize * 5.4);
				setHash(navLink.href);

				window.scrollTo({top: targetY, behavior: "smooth"});
			}
		});
	}
}


window.addEventListener("resize", resizeHandler);
window.addEventListener("scroll", scrollHandler);
navMenuButton.addEventListener("click", () => navContainer.classList.toggle("hidden"));
scrollHandler();
overrideNavLinks();