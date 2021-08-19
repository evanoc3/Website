"use strict";


// Constants
const header = document.getElementById("header");
const headerTitle = document.getElementById("header__title");
const splashWrapper = document.getElementById("splash__wrapper");
const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
const minimizeThreshold = fontSize * 4;


/** Run immediately when loaded to remove the 'No JS' solution. */
function setup() {
	const splashBounds = splashWrapper.getBoundingClientRect();

	if(splashBounds.bottom > minimizeThreshold) {
		header.classList.remove("min");
	}
}



/** Establishes an event listener on scroll events to detect when the user has scrolled past the thresholds, and cause certain style changes to the header. */
function onScrollHandler() {
	const titleBounds = headerTitle.getBoundingClientRect();
	const splashBounds = splashWrapper.getBoundingClientRect();
	const isDarkAlready = headerTitle.classList.contains("dark");
	const isMinAlready = header.classList.contains("min");

	const colorChangeThreshold = splashBounds.bottom - (fontSize * 3.75);

	// Set the color of the title
	if(titleBounds.bottom > colorChangeThreshold && !isDarkAlready) {
		headerTitle.classList.add("dark");
	}
	else if(titleBounds.bottom < colorChangeThreshold && isDarkAlready) {
		headerTitle.classList.remove("dark");
	}

	// Set whether the header is in minimized form or not
	if(splashBounds.bottom < minimizeThreshold  && !isMinAlready) {
		header.classList.add("min");
	}
	else if(splashBounds.bottom > minimizeThreshold && isMinAlready) {
		header.classList.remove("min");
	}
}


/** Overrides the default link behaviour of the relative links in the nav bar to provide a smooth scroll to the target element.  */
function overrideNavLinks() {
	function setHash(newHash) {
		if(history.pushState) {
			history.pushState(null, null, newHash);
		}
		else {
			location.hash = newHash;
		}
	}

	const navLinks = header.querySelectorAll("a");

	for(const navLink of navLinks) {
		navLink.addEventListener("click", (e) => {
			e.preventDefault();
			
			const targetId = navLink.href.split("#").at(-1);
			const target = document.getElementById( targetId );

			if(target) {
				const targetY = window.scrollY + target.getBoundingClientRect().top - (fontSize * 5.4); /* - header.offsetHeight */
				setHash(navLink.href);

				window.scrollTo({top: targetY, behavior: "smooth"});
			}
		})
	}
}


setup();
window.addEventListener("scroll", onScrollHandler);
overrideNavLinks();