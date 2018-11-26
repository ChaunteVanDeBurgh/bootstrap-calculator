const writedisplay = (x) => {
	document.getElementById("display").value = x;
};

const cleardisplay = () => {
	const clear_value = '0'
	document.getElementById("display").value = clear_value;
};