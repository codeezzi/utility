var powerfrom,powerto,powerfromval,powervalto,constr="";

function powercalc()
{
	powerfromval=document.getElementById("powerfromval").value;
	powerfrom=document.getElementById("powerfrom").value;
	powerto=document.getElementById("powerto").value;
	calculate();
}
function resultdisplay()
{
	if(powerto==="hp")
		powertofull="horsepower";
	else if(powerto==="kw")
		powertofull="kilo Watt";
	else if(powerto==="btu")
		powertofull="Btu (IT)/hour";
	else if(powerto==="ton")
		powertofull="Ton";
	else if(powerto==="cal")
		powertofull="Calorie/sec";
	else if(powerto==="jou")
		powertofull="Joule/sec";


	if(!(Number.isInteger(powervalto)))
	powervalto=powervalto.toFixed(5);

	document.getElementById("powertoval").value=powervalto;
	document.getElementById("resulttext").innerHTML=powervalto+" "+powertofull;
	document.getElementById("formulatext").innerHTML=constr;
}

function calculate()
{
	if(powerfrom==="hp")//if conversion is from hp to other
	{
		constr="1 horsepower = ";

		if(powerto==="hp")
		{
			powervalto = powerfromval *1;
            constr+="1 horsepower";	
		}
		else if(powerto==="kw")
		{
			powervalto = powerfromval *0.7456998;
            constr+="0.7456998 kilowatt";	
		}
		else if(powerto==="btu")
		{
			powervalto = powerfromval *2544.4335776;
            constr+="2544.4335776 Btu (IT)/hr";	
		}
		else if(powerto==="ton")
		{
			powervalto = powerfromval *0.2120361;
            constr+="0.2120361 ton";	
		}
		else if(powerto==="cal")
		{
			powervalto = powerfromval *178.1073544;
            constr+="178.1073544 Calorie/sec";	
		}
		else if(powerto==="jou")
		{
			powervalto = powerfromval *745.6998715;
            constr+="745.6998715 Joule/sec";	
		}
	}

	if(powerfrom==="kw")//if conversion is from kilowatt to other
	{
		constr="1 kilowatt = ";

		if(powerto==="hp")
		{
			powervalto = powerfromval *1.3410220;
            constr+="1.3410220 horsepower";	
		}
		else if(powerto==="kw")
		{
			powervalto = powerfromval *1;
            constr+="1 kilowatt";	
		}
		else if(powerto==="btu")
		{
			powervalto = powerfromval *3412.1416331;
            constr+="3412.1416331 Btu (IT)/hr";	
		}
		else if(powerto==="ton")
		{
			powervalto = powerfromval *0.2843451;
            constr+="0.2843451 ton";	
		}
		else if(powerto==="cal")
		{
			powervalto = powerfromval *238.8458966;
            constr+="238.8458966 Calorie/sec";
		}
		else if(powerto==="jou")
		{
			powervalto = powerfromval *1000;
            constr+="1000 Joule/sec";	
		}
	}

	if(powerfrom==="btu")//if conversion is from btu to other
	{
		constr="1 Btu (IT)/hr = ";

		if(powerto==="hp")
		{
			powervalto = powerfromval *0.0003930;
            constr+="0.0003930 horsepower";	
		}
		else if(powerto==="kw")
		{
			powervalto = powerfromval *0.0002930;
            constr+="0.0002930 kilowatt";	
		}
		else if(powerto==="btu")
		{
			powervalto = powerfromval *1;
            constr+="1 Btu (IT)/hr";	
		}
		else if(powerto==="ton")
		{
			powervalto = powerfromval *0.0000833;
            constr+="0.0000833 ton";	
		}
		else if(powerto==="cal")
		{
			powervalto = powerfromval *0.0699988;
            constr+="0.0699988 Calorie/sec";	
		}
		else if(powerto==="jou")
		{
			powervalto = powerfromval *0.2930710;
            constr+="0.2930710 Joule/sec";	
		}
	}

	if(powerfrom==="ton")//if conversion is from ton to other
	{
		constr="1 Ton = ";

		if(powerto==="hp")
		{
			powervalto = powerfromval *4.7161773;
            constr+="4.7161773 horsepower";	
		}
		else if(powerto==="kw")
		{
			powervalto = powerfromval *3.5168528;
            constr+="3.5168528 kilowatt";	
		}
		else if(powerto==="btu")
		{
			powervalto = powerfromval *12000;
            constr+="12000 Btu (IT)/hour";	
		}
		else if(powerto==="ton")
		{
			powervalto = powerfromval *1;
            constr+="1 Ton";	
		}
		else if(powerto==="cal")
		{
			powervalto = powerfromval *839.9858703;
            constr+="839.9858703 Calorie/sec";
		}
		else if(powerto==="jou")
		{
			powervalto = powerfromval *3516.8528421;
            constr+="3516.8528421 Joule/sec";	
		}
	}

	if(powerfrom==="cal")//if conversion is from cal to other
	{
		constr="1 Calorie/sec = ";

		if(powerto==="hp")
		{
			powervalto = powerfromval *0.0056145;
            constr+="0.0056145 horsepower";	
		}
		else if(powerto==="kw")
		{
			powervalto = powerfromval *0.0041868;
            constr+="0.0041868 kilowatt";	
		}
		else if(powerto==="btu")
		{
			powervalto = powerfromval *14.2859545;
            constr+="14.2859545 Btu (IT)/hour";	
		}
		else if(powerto==="ton")
		{
			powervalto = powerfromval *0.0011904;
            constr+="0.0011904 ton";	
		}
		else if(powerto==="cal")
		{
			powervalto = powerfromval *1;
            constr+="1 Calorie/sec";	
		}
		else if(powerto==="jou")
		{
			powervalto = powerfromval *4.1868;
            constr+="4.1868 Joule/sec";	
		}
	}

	if(powerfrom==="jou")//if conversion is from joule to other
	{
		constr="1 Joule/sec = ";

		if(powerto==="hp")
		{
			powervalto = powerfromval *0.0013410;
            constr+="0.0013410 horsepower";	
		}
		else if(powerto==="kw")
		{
			powervalto = powerfromval *0.001;
            constr+="0.001 kilowatt";	
		}
		else if(powerto==="btu")
		{
			powervalto = powerfromval *3.4121416;
            constr+="3.4121416 Btu (IT)/hour";	
		}
		else if(powerto==="ton")
		{
			powervalto = powerfromval *0.0002843;
            constr+="0.0002843 ton";	
		}
		else if(powerto==="cal")
		{
			powervalto = powerfromval *0.2388458;
            constr+="0.2388458 Calorie/sec";	
		}
		else if(powerto==="jou")
		{
			powervalto = powerfromval *1;
            constr+="1 Joule/sec";	
		}
	}

	
	resultdisplay();//calling display
}