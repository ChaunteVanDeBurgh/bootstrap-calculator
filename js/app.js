const writedisplay = (x) => {
	let current_display = document.getElementById("display").value;
	let input = (x);

	if (current_display == '0') {
		document.getElementById("display").value = x;
	} else {
		next_display = current_display + input;
		document.getElementById("display").value = next_display;
	}
};

const cleardisplay = () => {
	const clear_value = '0'
	document.getElementById("display").value = clear_value;
};