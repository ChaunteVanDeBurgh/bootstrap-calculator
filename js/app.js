let no_value = true;
let first_value;
let second_value;
let solution;

const display = (x) => {
	document.getElementById('display').value = x;
}

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

const ce = () => {
	cleardisplay();
	no_value = true;
}

const addition = () => {
	if (no_value == true) {
		first_value = document.getElementById('display').value;
		no_value = false;
		cleardisplay();
	} else {
		second_value = document.getElementById('display').value;
		solution = Number(first_value) + Number(second_value);
		display(solution);
	}
};

const equal = () => {
	display(solution);
};