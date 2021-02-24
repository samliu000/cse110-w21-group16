//help.js
document.getElementById("help").addEventListener('click', () => {
	document.getElementById("help-overlay").style.display = "flex";
});

document.getElementById("help-overlay").addEventListener('click', () => {
	document.getElementById("help-overlay").style.display = "none";
});