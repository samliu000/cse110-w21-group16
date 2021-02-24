//help.js
document.getElementById("help").addEventListener('click', () => {
	document.getElementById("overlay").style.display = "flex";
});

document.getElementById("overlay").addEventListener('click', () => {
	document.getElementById("overlay").style.display = "none";
});