var resistancefrom,resistanceto,resistancefromval,resistancevalto,constr="";

function resistancecalc()
{
	resistancefromval=document.getElementById("resistancefromval").value;
	resistancefrom=document.getElementById("resistancefrom").value;
	resistanceto=document.getElementById("resistanceto").value;
	calculate();
}
function resultdisplay()
{
	if(resistanceto==="ohm")
		resistancetofull="Ohm";
	else if(resistanceto==="abohm")
		resistancetofull="Ab Ohm";
	else if(resistanceto==="gigaohm")
		resistancetofull="Giga Ohm";
	else if(resistanceto==="megaohm")
		resistancetofull="Mega Ohm";
	else if(resistanceto==="kiloohm")
		resistancetofull="Kilo Ohm";
	else if(resistanceto==="microohm")
		resistancetofull="Micro Ohm";
	else if(resistanceto==="milliohm")
		resistancetofull="Milli Ohm";
	else if(resistanceto==="nanoohm")
		resistancetofull="Nano Ohm";


	// if(!(Number.isInteger(resistancevalto)))
	// resistancevalto=resistancevalto.toFixed();

	document.getElementById("resistancetoval").value=resistancevalto;
	document.getElementById("resulttext").innerHTML=resistancevalto+" "+resistancetofull;
	document.getElementById("formulatext").innerHTML=constr;
}

function calculate()
{
	if(resistancefrom==="ohm")//if conversion is from ohm to other
	{
		constr="1 Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *1000000000 ;
            constr+="1000000000  Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /1000000000;
            constr+="0.0000000001 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval /1000000;
            constr+="0.000001 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval *0.001;
            constr+="0.001 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval *1000000;
            constr+="1000000 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval *1000;
            constr+="1000 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *1000000000 ;
            constr+="1000000000 Nano Ohm";	
		}
	}

	if(resistancefrom==="abohm")//if conversion is from abohm to other
	{
		constr="1 Ab Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval /1000000000;
            constr+="1E-9 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,18);
            constr+="1E-18 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,15);
            constr+="1E-15 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,12);
            constr+="1E-12 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval /1000;
            constr+="0.001 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval /1000000;
            constr+="0.000001 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Nano Ohm";	
		}
	}

	if(resistancefrom==="gigaohm")//if conversion is from gigaohm to other
	{
		constr="1 Giga Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,9);
            constr+="1000000000 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,18);
            constr+="1E+18 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval *1000;
            constr+="1000 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,6);
            constr+="1000000 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,15);
            constr+="1E+15 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,12);
            constr+="1E+12 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,18);
            constr+="1E+18 Nano Ohm";	
		}
	}

	if(resistancefrom==="megaohm")//if conversion is from megaohm to other
	{
		constr="1 Mega Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval *1000000;
            constr+="1000000 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,15);
            constr+="1E+15 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /1000;
            constr+="0.001 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval *1000;
            constr+="1000 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,12);
            constr+="1E+12 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,9);
            constr+="1E+9 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,15);
            constr+="1E+15 Nano Ohm";	
		}
	}

	if(resistancefrom==="kiloohm")//if conversion is from kiloohm to other
	{
		constr="1 Kilo Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval *1000;
            constr+="1000 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,12);
            constr+="1E+12 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,6);
            constr+="1E-6 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,3);
            constr+="0.001 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,9);
            constr+="1E+9 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval *1000000;
            constr+="1000000 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,12);
            constr+="1E+12 Nano Ohm";	
		}
	}
	if(resistancefrom==="microohm")//if conversion is from microohm to other
	{
		constr="1 Micro Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,6);
            constr+="0.000001 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *1000;
            constr+="1000 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,15);
            constr+="1E-15 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,12);
            constr+="1E-12 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,9);
            constr+="1E-9 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,3);
            constr+="0.001 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *1000;
            constr+="1000 Nano Ohm";	
		}
	}

	if(resistancefrom==="milliohm")//if conversion is from milliohm to other
	{
		constr="1 Milli Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,3);
            constr+="0.001 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,6);
            constr+="1000000 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,12);
            constr+="1E-12 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,9);
            constr+="1E-9 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,6);
            constr+="0.000001 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,3);
            constr+="1000 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *Math.pow(10,6);
            constr+="1000000 Nano Ohm";	
		}
	}

	if(resistancefrom==="nanoohm")//if conversion is from nanoohm to other
	{
		constr="1 Nano Ohm = ";

		if(resistanceto==="ohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,9);
            constr+="1E-9 Ohm";	
		}
		else if(resistanceto==="abohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Ab Ohm";	
		}
		else if(resistanceto==="gigaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,18);
            constr+="1E-18 Giga Ohm";	
		}
		else if(resistanceto==="megaohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,15);
            constr+="1E-15 Mega Ohm";	
		}
		else if(resistanceto==="kiloohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,12);
            constr+="1E-12 Kilo Ohm";	
		}
		else if(resistanceto==="microohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,3);
            constr+="0.001 Micro Ohm";	
		}
		else if(resistanceto==="milliohm")
		{
			resistancevalto = resistancefromval /Math.pow(10,6);
            constr+="0.000001 Milli Ohm";	
		}
		else if(resistanceto==="nanoohm")
		{
			resistancevalto = resistancefromval *1;
            constr+="1 Nano Ohm";	
		}
	}
	
	resultdisplay();//calling display
}

