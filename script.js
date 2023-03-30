// Get all the links with the "hover-effect" class
const links = document.querySelectorAll('.hover-effect');

// Loop through each link and add a mouseover event listener
links.forEach(link => {
	link.addEventListener('mouseover', function() {
		// Change the background color to gray
		this.style.backgroundColor = '#ccc';
	});

	// Add a mouseout event listener to reset the background color
	link.addEventListener('mouseout', function() {
		this.style.backgroundColor = 'transparent';
	});

	// Add a click event listener to redirect to the URL specified in the "data-url" attribute
	link.addEventListener('click', function(event) {
		event.preventDefault();
		const url = this.getAttribute('data-url');
		window.location.href = url;
	});
});
