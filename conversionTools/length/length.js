		var input = document.getElementById('input');
		var result = document.getElementById('result');
		var inputType = document.getElementById('inputType');
		var resultType = document.getElementById('resultType');
		var inputType, resultType;

		input.addEventListener("keyup", myResult);
		inputType.addEventListener("change", myResult);
		resultType.addEventListener("change", myResult);

		inputTypeValue = inputType.value;
		resultTypeValue = resultType.value;

		function myResult()
		{
			inputTypeValue = inputType.value;
			resultTypeValue = resultType.value;

			if (inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 0.001;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 100;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Meter") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 1000;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.00062137119223733;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 1.0936132983377;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 3.2808398950131;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 39.370078740157;
			}
			else if (inputTypeValue === "Meter" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.00053995680345572;
			}



			if (inputTypeValue === "Kilometer" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 1000;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 100000;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 1000000;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.62137119223733	;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 1093.6132983377;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 3280.8398950131;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 39370.078740157;
			}
			else if (inputTypeValue === "Kilometer" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.53995680345572;
			}



			if (inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 0.01;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 0.00001;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 10;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.0000062137119223733;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 0.010936132983377;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 0.032808398950131;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 0.39370078740157;
			}
			else if (inputTypeValue === "Centimeter" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.0000053995680345572;
			}


			if (inputTypeValue === "Millimetre" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 0.001;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 0.000001;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 0.1;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.00000062137119223733;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 0.0010936132983377;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 0.0032808398950131;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 0.039370078740157;
			}
			else if (inputTypeValue === "Millimetre" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.00000053995680345572;
			}



			if (inputTypeValue === "Mile" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 1609.344;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 1.609344;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 160934.4;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 1609344;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Mile") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 1760;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 5280;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 63360;
			}
			else if (inputTypeValue === "Mile" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.86897624190065;
			}



			if (inputTypeValue === "Yard" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 0.9144;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 0.0009144;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 91.44;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 914.4;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.00056818181818182;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Yard") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 3;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 36;
			}
			else if (inputTypeValue === "Yard" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.00049373650107991;
			}



			if (inputTypeValue === "Foot" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 0.3048;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 0.0003048;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 30.48;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 304.8;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.00018939393939394;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 0.33333333333333;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Foot") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 12;
			}
			else if (inputTypeValue === "Foot" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.0001645788336933;
			}



			if (inputTypeValue === "Inch" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 0.0254;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 0.0000254;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 2.54;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 25.4;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 0.000015782828282828;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 0.027777777777778;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 0.083333333333333;
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Inch") {

				result.value = Number(input.value);
			}
			else if (inputTypeValue === "Inch" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value) * 0.000013714902807775;
			}


			if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Meter") {

				result.value = Number(input.value) * 1852;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Kilometer") {

				result.value = Number(input.value) * 1.852;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Centimeter") {

				result.value = Number(input.value) * 185200;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Millimetre") {

				result.value = Number(input.value) * 1852000;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Mile") {

				result.value = Number(input.value) * 1.1507794480235;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Yard") {

				result.value = Number(input.value) * 2025.3718285214;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Foot") {

				result.value = Number(input.value) * 6076.1154855643;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Inch") {

				result.value = Number(input.value) * 72913.385826772;
			}
			else if (inputTypeValue === "Nautical Mile" && resultTypeValue === "Nautical Mile") {

				result.value = Number(input.value);
			}

		}