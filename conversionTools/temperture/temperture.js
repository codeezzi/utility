
function converttemperture() {
    //getting the value of conversion
	let conversion_value=document.getElementById("conversion_value").value;
	let conversion_result=document.getElementById("conversion_result").value;
    //getting the value of  temperture
	let temperture_value=document.getElementById("temperture_value").value;
	let temperture_result=document.getElementById("temperture_result");
    //converting the value to int 
	temperture_value=parseInt(temperture_value);
	//store it on result var 
	let result=temperture_value;	
	//checking for condition
    if(conversion_value==="Celsius" && conversion_result==="Fahrenheit")
	{
			result=(temperture_value * 9/5) + 32;
	}
	else if(conversion_value==="Celsius" && conversion_result==="Kelvin")
	{
			result=(temperture_value+273.15);
	}
	else if(conversion_value==="Fahrenheit" && conversion_result==="Celsius")
	{
			result=(temperture_value - 32)* 5/9;
	}
	else if(conversion_value==="Fahrenheit" && conversion_result==="Kelvin")
	{
			result=(temperture_value- 32)* 5/9 + 273.15;
	}
	else if(conversion_value==="Kelvin" && conversion_result==="Fahrenheit")
	{
			result=(temperture_value  - 273.15)* 9/5 + 32 ;
	}
	else if(conversion_value==="Kelvin" && conversion_result==="Celsius")
	{
			result=(temperture_value  - 273.15) ;
	}
	//fixed the ouuput to 2 digits
	result=result.toFixed(2);
	//inform the use if the input is not valid 
	if(isNaN(result))
	{
		temperture_result.value="Enter a valid number";
	}
	else
	{
		temperture_result.value=result;
	}
	
}

//program begins here 
function main(argument) {
	let convert_button=document.getElementById("convert_button");
	convert_button.addEventListener("click",converttemperture);

}
main();
