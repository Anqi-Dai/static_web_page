// Animate smooth scroll to the projects and contact sections.
$('#view-projects').on('click', function() {
	const images = $('#projects').position().top;

	$('html, body').animate(
		{
			scrollTop : images
		},
		900
	);
});

$('#view-contact').on('click', function() {
	const contact = $('#contact-info').position().top;

	$('html, body').animate(
		{
			scrollTop : contact
		},
		900
	);
});
