//popup.js

//Help
document.getElementById("help").addEventListener('click', () => {
	document.getElementById("help-overlay").style.display = "flex";
});

document.getElementById("help-overlay").addEventListener('click', () => {
	document.getElementById("help-overlay").style.display = "none";
});

//Settings
document.getElementById("settings").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "block";
	document.getElementById("settings-flex").classList.add("active");
});

document.getElementById("btn-no-set").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "none";
	document.getElementById("settings-flex").classList.remove("active");
});