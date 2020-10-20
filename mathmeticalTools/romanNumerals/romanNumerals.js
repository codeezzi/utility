function toRomanNum() {
	let num_value = parseInt(document.getElementById("numeric_value").value);
	let resultContainer = document.getElementById("result_container");

	if (resultContainer.innerText !== "") {
		resultContainer.innerText = "";
	}
	if (isNaN(num_value)) {
		$("#exampleModal").modal("show");
	}

	const romanObj = {
		1000: "M",
		900: "CM",
		500: "D",
		400: "CD",
		100: "C",
		90: "XC",
		50: "L",
		40: "XL",
		10: "X",
		9: "IX",
		5: "V",
		4: "IV",
		1: "I"
	};
	const keys = Object.keys(romanObj).sort((a, b) => b - a);
	let output = "";

	function innerLoop() {
		for (var i = 0; i < keys.length; i++) {
			if (num_value >= keys[i]) {
				output += romanObj[keys[i]];
				num_value -= keys[i];
				return;
			}
		}
	}
	while (num_value > 0) {
		innerLoop();
	}
	return (resultContainer.innerText = output);
}

const targetButton = document.getElementById("convert_button");
targetButton.addEventListener("click", toRomanNum);
