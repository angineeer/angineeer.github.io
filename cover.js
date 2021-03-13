function getURL()
{
	//Get the raw auth URL.
	var rawURL = window.location.href;

	//Extract verifier from the raw URL.
	var verifier = rawURL.substr((rawURL.length-32), (rawURL.length-1));

	/* Get the verifier field */
	var verhtm = document.getElementById("verifier");
	verhtm.innerHTML = verifier;

	/* Get the instructions field */
	var instru = document.getElementById("instructions");
	instru.innerHTML = "Now go paste this verifier to the application.";

	/* Select the text field */
	verhtm.select();
	verhtm.setSelectionRange(0, 99999); /*For mobile devices*/

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Your verifier is: " + verifier);
}