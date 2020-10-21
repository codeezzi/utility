const bits = new Map();
const bibits = new Map();
const bytes = new Map();
const bibytes = new Map();

function map_set(){

	bits.set('kbit', 'kilobits');   
	bits.set('Mbit', 'Megabits');
	bits.set('Gbit', 'Gigabits');
	bits.set('Tbit', 'Terabits');
	bits.set('Pbit', 'Petabits');
	bits.set('Ebit', 'Exabits');
	bits.set('Zbit', 'Zettabits');
	bits.set('Ybit', 'Yottabits');

	bibits.set('Kibit', 'Kibibits');   
	bibits.set('Mibit', 'Mebibits');
	bibits.set('Gibit', 'Gibibits');
	bibits.set('Tibit', 'Tebibits');
	bibits.set('Pibit', 'Pebibits');
	bibits.set('Eibit', 'Exbibits');
	bibits.set('Zibit', 'Zebibits');
	bibits.set('Yibit', 'Yobibits');

	bytes.set('kB', 'kilobytes');   
	bytes.set('MB', 'Megabytes');
	bytes.set('GB', 'Gigabytes');
	bytes.set('TB', 'Terabytes');
	bytes.set('PB', 'Petabytes');
	bytes.set('EB', 'Exabytes');
	bytes.set('ZB', 'Zettabytes');
	bytes.set('YB', 'Yottabytes');

	bibytes.set('KiB', 'Kibibytes');   
	bibytes.set('MiB', 'Mebibytes');   
	bibytes.set('GiB', 'Gibibytes');   
	bibytes.set('TiB', 'Tebibytes');   
	bibytes.set('PiB', 'Pebibytes');   
	bibytes.set('EiB', 'Exbibytes');   
	bibytes.set('ZiB', 'Zebibytes');   
	bibytes.set('YiB', 'Yobibytes');  
 
}

function print_option_values(){
	let i = 0;
	let j = 0;
	let k = 0;
	let l = 0;

	bits.forEach( (value1, key1) => {
		j = 0;
		bibits.forEach( (value2, key2) => {
			k = 0
			bytes.forEach( (value3, key3) => {
				l = 0;
				bibytes.forEach( (value4, key4) => {			
				if (i == j && i == k && i == l){
					fill(key1, value1);
					fill(key2, value2);
					fill(key3, value3);
					fill(key4, value4);
				}
				l++;
				});
			k++;
			});
		j++;
		});
	i++;
	});
}

function fill (key, value){
	let sel_elements = document.getElementsByClassName("storage_dropdown");
	let len = sel_elements.length;

    for(let i = 0; i < len; i++){
		let el = document.createElement("option");
		el.text = value + " [" + key + "]";
		el.value = key;
		sel_elements[i].add(el);
    }
}

function convertStorage() {
	//getting the value
	let conversion_input = document.getElementById("conversion_value").value;
	let conversion_output = document.getElementById("conversion_result").value;
	
	let storage_value = document.getElementById("storage_value").value;
	let storage_result = document.getElementById("storage_result");
	
	let input = get_map_position(conversion_input);
	let output = get_map_position(conversion_output);
	let temp_unit;
	
	//convert to basic unit 
	if (input[0] == 1 || input[0] == 3){
		temp_unit = storage_value * Math.pow(1000, input[1]);
	}
	else if (input[0] == 2 || input[0] == 4){
		temp_unit = storage_value * Math.pow(2, (10 * input[1]));
	}
	
	//convert bytes to bits or vice versa
	if ((input[0] == 1 || input[0] == 2) && (output[0] == 3 || output[0] == 4)){
		// console.log("bits To Bytes / 8");
		if(temp_unit != 0)
			temp_unit = temp_unit / 8;
	}
	else if ((output[0] == 1 || output[0] == 2) && (input[0] == 3 || input[0] == 4)){
		// console.log("Bytes To bites * 8");
		if(temp_unit != 0)
			temp_unit = temp_unit * 8;
	}
	
	//final convert to desired format
	if (output[0] == 1 || output[0] == 3){
		temp_unit = temp_unit / Math.pow(1000, output[1]);
	}
	else if (output[0] == 2 || output[0] == 4){
		temp_unit = temp_unit * Math.pow(2, (-10 * output[1]));
	}
	
	//inform the user if the input is not valid 
	if(isNaN(temp_unit)){
		storage_result.value = "Enter a valid number";
	}
	else{
		storage_result.value = temp_unit;
	}
	
}

function get_map_position(text){
	let map;
	let position;
	
	if(text === "b"){
		return [1, 0];
	}
	
	else if(text === "B"){
		return [3, 0];
	}
	
	// return [map, position]
	// ret 1 for bits
	if(bits.has(text)){ 
		map = 1;
		let a = 1;
		bits.forEach( (value, key) => {
			if(key === text){
				position = a;
			}
			a++;
		});
		return [map, position];
	}
	// ret 2 for bibits
	else if(bibits.has(text)){ 
		map = 2;
		let b = 1;
		bibits.forEach( (value, key) => {
			if(key === text){
				position = b;
			}
			b++;
		});
		return [map, position];
	}
	// ret 3 for bytes
	else if(bytes.has(text)){ 
		map = 3;
		let c = 1;
		bytes.forEach( (value, key) => {
			if(key === text){
				position = c;
			}
			c++;
		});
		return [map, position];
	}	
	// ret 4 for bibytes
	else if(bibytes.has(text)){ 
		map = 4;
		let d = 1;
		bibytes.forEach( (value, key) => {
			if(key === text){
				position = d;
			}
			d++;
		});
		return [map, position];
	}
}

//program begins here 
function main(argument) {
	map_set();
	print_option_values();
	let convert_button = document.getElementById("convert_button");
	convert_button.addEventListener("click",convertStorage);
}
main();
