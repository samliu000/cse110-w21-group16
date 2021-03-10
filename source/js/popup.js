//popup.js

//Help
/**
 * sets the help overlay to visible when help icon is clicked
 * */
document.getElementById("help").addEventListener('click', () => {
	document.getElementById("help-overlay").style.display = "flex";
});

/**
 * sets the help overlay to invisible when any part of the overlay is clicked
 * */
document.getElementById("help-overlay").addEventListener('click', () => {
	document.getElementById("help-overlay").style.display = "none";
});

//Settings
/**
 * pulls up settings popup on click of settings icon
 * */
document.getElementById("settings").addEventListener('click', () => {
	document.getElementById("focus").value = "";
	document.getElementById("short-break").value = "";
	document.getElementById("long-break").value = "";
	document.getElementById("focus").focus();
	document.getElementById("popup-overlay").style.display = "block";
	document.getElementById("settings-flex").classList.add("active");
});

/**
 * closes settings popup without applying changes when the cancel button is clicked
 * */
document.getElementById("btn-no-set").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "none";
	document.getElementById("settings-flex").classList.remove("active");
});

/**
 * updates the short and long break suggestions when the session time is modified in the settings
 * */
document.getElementById("focus").addEventListener('input', () => {
    let focus = document.getElementById("focus").value;
	let short_break = document.getElementById("short-break");
	let long_break = document.getElementById("long-break");
	short_break.placeholder = "Try: " + Math.ceil((Number(focus) / 5));
	long_break.placeholder = "Try: " + Math.ceil((Number(focus) * 3 / 5));
});

/**
 * closes settings popup without applying changes when the escape key pressed
 * */
document.getElementById("setForm").addEventListener("keydown", ({key}) => {
    if (key === "Escape") {
		document.getElementById("btn-no-set").click();
	}
});

//Done
/**
 * pulls up popup for confirmation of task completion when done is clicked
 * */
document.getElementById("done-btn").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "block";
	document.getElementById("done-flex").classList.add("active");
});

/**
 * closes done popup when not confirmed
 * */
document.getElementById("done-no").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "none";
	document.getElementById("done-flex").classList.remove("active");
});
