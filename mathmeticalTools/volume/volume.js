
function convertvolume() {
    //getting the value of conversion
	let conversion_value=document.getElementById("conversion_value").value;
	let conversion_result=document.getElementById("conversion_result").value;
    //getting the value of  volume
	let volume_value=document.getElementById("volume_value").value;
	let volume_result=document.getElementById("volume_result");
    //converting the value to int 
	volume_value=parseInt(volume_value);
	//store it on result var 
	let result=volume_value;	

	//checking for condition

	//Liter conversion
    if(conversion_value==="Liter" && conversion_result==="Milliliter")
	{
			result=(volume_value*1000);
	}
	else if(conversion_value==="Liter" && conversion_result==="Imperial gallon")
	{
			result=(volume_value/4.56);
	}
	else if(conversion_value==="Liter" && conversion_result==="Imperial guart")
	{
			result=(volume_value/1.137);
	}
	else if(conversion_value==="Liter" && conversion_result==="Cubic inch")
	{
			result=(volume_value*61.024);
	}
	else if(conversion_value==="Liter" && conversion_result==="Cubic meter")
	{
			result=(volume_value/1000);
	}
	else if(conversion_value==="Liter" && conversion_result==="Cubic foot")
	{
			result=(volume_value/28.317);
	}

	//Milliliter conversion
	else if(conversion_value==="Milliliter" && conversion_result==="Imperial gallon")
	{
			result=(volume_value/4546);
	}
	else if(conversion_value==="Milliliter" && conversion_result==="Imperial guart")
	{
			result=(volume_value/1137);
	}
	else if(conversion_value==="Milliliter" && conversion_result==="Cubic inch")
	{
			result=(volume_value/16.387);
	}
	else if(conversion_value==="Milliliter" && conversion_result==="Cubic meter")
	{
			result=(volume_value/1000000);
	}
	else if(conversion_value==="Milliliter" && conversion_result==="Cubic foot")
	{
			result=(volume_value/28317);
	}
	else if(conversion_value==="Milliliter" && conversion_result==="Liter")
	{
			result=(volume_value/1000);
	}

	//Imperial gallon conversion
	else if(conversion_value==="Imperial gallon" && conversion_result==="Cubic inch")
	{
			result=(volume_value*277);
	}
	else if(conversion_value==="Imperial gallon" && conversion_result==="Imperial guart")
	{
			result=(volume_value*4);
	}
	else if(conversion_value==="Imperial gallon" && conversion_result==="Cubic meter")
	{
			result=(volume_value/220);
	}
	else if(conversion_value==="Imperial gallon" && conversion_result==="Cubic foot")
	{
			result=(volume_value/6.229);
	}
	else if(conversion_value==="Imperial gallon" && conversion_result==="Liter")
	{
			result=(volume_value*4.546);
	}
	else if(conversion_value==="Imperial gallon" && conversion_result==="Milliliter")
	{
			result=(volume_value*4546);
	}

	//Imperial guart conversion
	else if(conversion_value==="Imperial guart" && conversion_result==="Cubic inch")
	{
			result=(volume_value*69.355);
	}
	else if(conversion_value==="Imperial guart" && conversion_result==="Milliliter")
	{
			result=(volume_value*1137);
	}
	else if(conversion_value==="Imperial guart" && conversion_result==="Cubic meter")
	{
			result=(volume_value/880);
	}
	else if(conversion_value==="Imperial guart" && conversion_result==="Cubic foot")
	{
			result=(volume_value/24.915);
	}
	else if(conversion_value==="Imperial guart" && conversion_result==="Liter")
	{
			result=(volume_value*1.137);
	}
	else if(conversion_value==="Imperial guart" && conversion_result==="Imperial gallon")
	{
			result=(volume_value/4);
	}

	//Cubic inch conversion
	else if(conversion_value==="Cubic inch" && conversion_result==="Imperial gallon")
	{
			result=(volume_value/277);
	}
	else if(conversion_value==="Cubic inch" && conversion_result==="Imperial guart")
	{
			result=(volume_value/69.355);
	}
	else if(conversion_value==="Cubic inch" && conversion_result==="Cubic meter")
	{
			result=(volume_value/61024);
	}
	else if(conversion_value==="Cubic inch" && conversion_result==="Cubic foot")
	{
			result=(volume_value/1728);
	}
	else if(conversion_value==="Cubic inch" && conversion_result==="Liter")
	{
			result=(volume_value/61.024);
	}
	else if(conversion_value==="Cubic inch" && conversion_result==="Milliliter")
	{
			result=(volume_value*16.387);
	}

	//Cubic meter  conversion
	else if(conversion_value==="Cubic meter" && conversion_result==="Cubic inch")
	{
			result=(volume_value*61024);
	}
	else if(conversion_value==="Cubic meter" && conversion_result==="Imperial guart")
	{
			result=(volume_value*880);
	}
	else if(conversion_value==="Cubic meter" && conversion_result==="Cubic foot")
	{
			result=(volume_value*35.315);
	}
	else if(conversion_value==="Cubic meter" && conversion_result==="Liter")
	{
			result=(volume_value*1000);
	}
	else if(conversion_value==="Cubic meter" && conversion_result==="Imperial gallon")
	{
			result=(volume_value*220);
	}	
	else if(conversion_value==="Cubic meter" && conversion_result==="Milliliter")
	{
			result=(volume_value*1000000);
	}

	//Cubic foot conversion
	else if(conversion_value==="Cubic foot" && conversion_result==="Cubic inch")
	{
			result=(volume_value*1728);
	}
	else if(conversion_value==="Cubic foot" && conversion_result==="Imperial guart")
	{
			result=(volume_value*24.915);
	}
	else if(conversion_value==="Cubic foot" && conversion_result==="Cubic meter")
	{
			result=(volume_value/35.315);
	}
	else if(conversion_value==="Cubic foot" && conversion_result==="Liter")
	{
			result=(volume_value*28.317);
	}
	else if(conversion_value==="Cubic foot" && conversion_result==="Milliliter")
	{
			result=(volume_value*28317);
	}

	else if(conversion_value==="Cubic foot" && conversion_result==="Imperial gallon")
	{
			result=(volume_value*6.229);
	}

	else
	{
		result=volume_value;
	}
	//fixed the ouuput to 2 digits
	result=result.toFixed(2);
	//inform the use if the input is not valid 
	if(isNaN(result))
	{
		volume_result.value="Enter a valid number";
	}
	else
	{
		volume_result.value=result;
	}
	
}

//program begins here 
function main(argument) {
	let convert_button=document.getElementById("convert_button");
	convert_button.addEventListener("click",convertvolume);

}
main();
