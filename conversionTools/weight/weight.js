
function convertweight() {
    //getting the value of conversion
	let conversion_value=document.getElementById("conversion_value").value;
	let conversion_result=document.getElementById("conversion_result").value;
    //getting the value of  weight
	let weight_value=document.getElementById("weight_value").value;
	let weight_result=document.getElementById("weight_result");
    //converting the value to int 
	weight_value=parseInt(weight_value);
	//store it on result var 
	let result=weight_value;	

	//checking for condition
	//killogram conversion
    if(conversion_value==="Kilogram" && conversion_result==="Gram")
	{
			result=(weight_value*1000);
	}
	else if(conversion_value==="Kilogram" && conversion_result==="Ounces")
	{
			result=(weight_value*35.274);
	}
	else if(conversion_value==="Kilogram" && conversion_result==="Pounds")
	{
			result=(weight_value*2.205);
	}
	else if(conversion_value==="Kilogram" && conversion_result==="Stone")
	{
			result=(weight_value/6.35);
	}
	else if(conversion_value==="Kilogram" && conversion_result==="Tonnes")
	{
			result=(weight_value/1000);
	}
	//gram conversion
	else if(conversion_value==="Gram" && conversion_result==="Kilogram")
	{
			result=(weight_value/1000);
	}
	else if(conversion_value==="Gram" && conversion_result==="Ounces")
	{
			result=(weight_value/28.35);
	}
	else if(conversion_value==="Gram" && conversion_result==="Pounds")
	{
			result=(weight_value/454);
	}
	else if(conversion_value==="Gram" && conversion_result==="Stone")
	{
			result=(weight_value/6350);
	}
	else if(conversion_value==="Gram" && conversion_result==="Tonnes")
	{
			result=(weight_value/1000000);
	}
	//Ounces conversion
	else if(conversion_value==="Ounces" && conversion_result==="Kilogram")
	{
			result=(weight_value/35.274);
	}
	else if(conversion_value==="Ounces" && conversion_result==="Gram")
	{
			result=(weight_value*28.35);
	}
	else if(conversion_value==="Ounces" && conversion_result==="Pounds")
	{
			result=(weight_value/16);
	}
	else if(conversion_value==="Ounces" && conversion_result==="Stone")
	{
			result=(weight_value/224);
	}
	else if(conversion_value==="Ounces" && conversion_result==="Tonnes")
	{
			result=(weight_value/35274);
	}
	//pounds conversion
	else if(conversion_value==="Pounds" && conversion_result==="Kilogram")
	{
			result=(weight_value/2.205);
	}
	else if(conversion_value==="Pounds" && conversion_result==="Gram")
	{
			result=(weight_value*454);
	}
	else if(conversion_value==="Pounds" && conversion_result==="Ounces")
	{
			result=(weight_value/16);
	}
	else if(conversion_value==="Pounds" && conversion_result==="Stone")
	{
			result=(weight_value/14);
	}
	else if(conversion_value==="Pounds" && conversion_result==="Tonnes")
	{
			result=(weight_value/2205);
	}
	//Stone conversion
	else if(conversion_value==="Stone" && conversion_result==="Kilogram")
	{
			result=(weight_value*6.35);
	}
	else if(conversion_value==="Stone" && conversion_result==="Gram")
	{
			result=(weight_value*6350);
	}
	else if(conversion_value==="Stone" && conversion_result==="Ounces")
	{
			result=(weight_value*224);
	}
	else if(conversion_value==="Stone" && conversion_result==="Pounds")
	{
			result=(weight_value*14);
	}
	else if(conversion_value==="Stone" && conversion_result==="Tonnes")
	{
			result=(weight_value/157);
	}
	//Tonnes conversion
	else if(conversion_value==="Tonnes" && conversion_result==="Kilogram")
	{
			result=(weight_value*1000);
	}
	else if(conversion_value==="Tonnes" && conversion_result==="Gram")
	{
			result=(weight_value*1000000);
	}
	else if(conversion_value==="Tonnes" && conversion_result==="Ounces")
	{
			result=(weight_value*35274);
	}
	else if(conversion_value==="Tonnes" && conversion_result==="Pounds")
	{
			result=(weight_value*2205);
	}
	else if(conversion_value==="Tonnes" && conversion_result==="Stone")
	{
			result=(weight_value*157);
	}
	else
	{
		result=weight_value;
	}
	//fixed the ouuput to 2 digits
	result=result.toFixed(2);
	//inform the use if the input is not valid 
	if(isNaN(result))
	{
		weight_result.value="Enter a valid number";
	}
	else
	{
		weight_result.value=result;
	}
	
}

//program begins here 
function main(argument) {
	let convert_button=document.getElementById("convert_button");
	convert_button.addEventListener("click",convertweight);

}
main();
