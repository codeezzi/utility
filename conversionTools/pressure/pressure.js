var pressfrom,pressto,pressfromval,pressvalto,constr="";

function presscalc()
{
	pressfromval=document.getElementById("pressurefromval").value;
	pressfrom=document.getElementById("pressfrom").value;
	pressto=document.getElementById("pressto").value;
	calculate();
}
function resultdisplay()
{
	if(pressto==="bar")
		presstofull="Bar";
	else if(pressto==="pascal")
		presstofull="Pascal";
	else if(pressto==="torr")
		presstofull="Torr";
	else if(pressto==="sa")
		presstofull="Standard atmosphere";
	else if(pressto==="pfi")
		presstofull="Pound-force per sq inch";
	if(!(Number.isInteger(pressvalto)))
	pressvalto=pressvalto.toFixed(5);
	document.getElementById("presstoval").value=pressvalto;
	document.getElementById("resulttext").innerHTML=pressvalto+" "+presstofull;
	document.getElementById("formulatext").innerHTML=constr;
}

function calculate()
{
	if(pressfrom==="bar")//if conversion is from bar to other
	{
		constr="1 bar = ";

		if(pressto==="bar")
		{
			pressvalto = pressfromval *1;
            constr+="1 bar";	
		}
		else if(pressto==="pascal")
		{
			pressvalto = pressfromval * 100000;
            constr+="100000 pascal";	
		}
		else if(pressto==="torr")
		{
			pressvalto = pressfromval * 750.0616827;
            constr+="750.0616827 torr";	
		}
		else if(pressto==="sa")
		{
			pressvalto = pressfromval * 0.9869232;
            constr+="0.9869232 Standard atmosphere";	
		}
		else if(pressto==="pfi")
		{
			pressvalto = pressfromval * 14.5037737;
            constr+="14.503773773 Pound-force per sq inch";	
		}
	}



	else if(pressfrom==="pascal")//if conversion is from pascal to other
	{
		constr="1 pascal = ";

		if(pressto==="bar")
		{
			pressvalto = pressfromval * 0.00001;
            constr+="0.00001 bar";	
		}
		else if(pressto==="pascal")
		{
			pressvalto = pressfromval * 1;
            constr+="1 pascal";	
		}
		else if(pressto==="torr")
		{
			pressvalto = pressfromval * 0.0075006;
            constr+="0.0075006 torr";	
		}
		else if(pressto==="sa")
		{
			pressvalto = pressfromval * 0.0000098;
            constr+="0.0000098 Standard atmosphere";	
		}
		else if(pressto==="pfi")
		{
			pressvalto = pressfromval * 0.0001450;
            constr+="0.0001450 Pound-force per sq inch";	
		}
	}




	else if(pressfrom==="torr")//if conversion is from torr to other
	{
		constr="1 torr = ";

		if(pressto==="bar")
		{
			pressvalto = pressfromval * 0.0013332;
            constr+="0.0013332 bar";	
		}
		else if(pressto==="pascal")
		{
			pressvalto = pressfromval * 133.3223684;
            constr+="133.3223684 pascal";	
		}
		else if(pressto==="torr")
		{
			pressvalto = pressfromval * 1;
            constr+="1 torr";	
		}
		else if(pressto==="sa")
		{
			pressvalto = pressfromval * 0.0013157;
            constr+="0.0013157 Standard atmosphere";	
		}
		else if(pressto==="pfi")
		{
			pressvalto = pressfromval * 0.0193367;
            constr+="0.0193367 Pound-force per sq inch";	
		}
	}

	else if(pressfrom==="sa")//if conversion is from standard atmosphere to other
	{
		constr="1 standard atmosphere = ";

		if(pressto==="bar")
		{
			pressvalto = pressfromval * 1.01325;
            constr+="1.01325 bar";	
		}
		else if(pressto==="pascal")
		{
			pressvalto = pressfromval * 101325;
            constr+="101325 pascal";	
		}
		else if(pressto==="torr")
		{
			pressvalto = pressfromval * 760;
            constr+="760 torr";	
		}
		else if(pressto==="sa")
		{
			pressvalto = pressfromval * 1;
            constr+="1 standard atmosphere";	
		}
		else if(pressto==="pfi")
		{
			pressvalto = pressfromval * 14.6959487;
            constr+="14.6959487 Pound-force per sq inch";	
		}
	}

	else if(pressfrom==="pfi")//if conversion is from pound force per sq inch to other
	{
		constr="1 Pound-force per sq inch = ";

		if(pressto==="bar")
		{
			pressvalto = pressfromval * 0.068947572;
            constr+="0.068947572 bar";	
		}
		else if(pressto==="pascal")
		{
			pressvalto = pressfromval * 6894.7572932;
            constr+="6894.7572932 pascal";	
		}
		else if(pressto==="torr")
		{
			pressvalto = pressfromval * 51.7149325;
            constr+="51.7149325 torr";	
		}
		else if(pressto==="sa")
		{
			pressvalto = pressfromval * 0.0680459;
            constr+="0.0680459 Standard atmosphere";	
		}
		else if(pressto==="pfi")
		{
			pressvalto = pressfromval * 1;
            constr+="1 Pound-force per sq unit";	
		}
	}
	resultdisplay();//calling display
}