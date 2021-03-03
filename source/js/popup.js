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
	document.getElementById("focus").value = "";
	document.getElementById("short-break").value = "";
	document.getElementById("long-break").value = "";
	document.getElementById("focus").focus();
	document.getElementById("popup-overlay").style.display = "block";
	document.getElementById("settings-flex").classList.add("active");
});

document.getElementById("btn-no-set").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "none";
	document.getElementById("settings-flex").classList.remove("active");
});

document.getElementById("focus").addEventListener('input', () => {
    let focus = document.getElementById("focus").value;
	if (focus == "e")
		return;
	let short_break = document.getElementById("short-break");
	let long_break = document.getElementById("long-break");
	short_break.placeholder = "Try: " + Math.ceil((Number(focus) / 5));
	long_break.placeholder = "Try: " + Math.ceil((Number(focus) * 3 / 5));
});

document.getElementById("setForm").addEventListener("keydown", ({key}) => {
    if (key === "Escape") {
		document.getElementById("btn-no-set").click();
	}
});

//Done
document.getElementById("done-btn").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "block";
	document.getElementById("done-flex").classList.add("active");
});

document.getElementById("done-no").addEventListener('click', () => {
	document.getElementById("popup-overlay").style.display = "none";
	document.getElementById("done-flex").classList.remove("active");
});