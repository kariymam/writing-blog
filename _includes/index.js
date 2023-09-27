
/*     navigation effect      */
const indicator = document.querySelector('.indicator'); // target element
const navLinks = document.querySelectorAll('.transition'); // Get references to the hoverable

navLinks.forEach(transition => {
  transition.addEventListener('mouseover', () => {
    // Check if the mouse is hovering over a specific ID
			if (transition.id === 'home') { indicator.style.transform = "translate(-126px)";
			} else if (transition.id === 'writing') { indicator.style.transform = "translate(-42px)";
			} else if (transition.id === 'projects') { indicator.style.transform = "translate(42px)";
			} else if (transition.id === 'reading') { indicator.style.transform = "translate(126px)";
			} else {  }
			// indicator.style.transform = "translate(0)";
			// indicator.style.opacity = "1";
			indicator.style.backgroundColor = "var(--nav-indicator-hover)";
		});

		transition.addEventListener('mouseleave', () => {
			indicator.style.transform = 'translate(0)';
			// indicator.style.opacity = "0";
			indicator.style.backgroundColor = "transparent";
		});

	});

