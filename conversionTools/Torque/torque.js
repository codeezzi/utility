
function converttorque() {
    //getting the value of conversion
	let conversion_value=document.getElementById("conversion_value").value;
	let conversion_result=document.getElementById("conversion_result").value;
    //getting the value of  torque
	let torque_value=document.getElementById("torque_value").value;
	let torque_result=document.getElementById("torque_result");

    //store it on result var 
    let result=torque_value;
    	
    //checking for condition

    // When input is in Newton meter (N-m)
    if(conversion_value==="N-m" && conversion_result==="dy-cm")
	{
            let temp = (torque_value * 10000000);
            result = temp.toExponential(10)
	}
	else if(conversion_value==="N-m" && conversion_result==="kgf-m")
	{
            let temp=(torque_value * 0.10197162129779283);
            result = temp.toExponential(10)
	}
	else if(conversion_value==="N-m" && conversion_result==="lbf-in")
	{
        let temp=(torque_value * 8.850748065226473);
        result = temp.toExponential(10)
    }
	else if(conversion_value==="N-m" && conversion_result==="lbf-ft")
	{    
        let temp=(torque_value * 0.7375621211696556);
        result = temp.toExponential(10)
    }
    
    // When input is in Dyne-centimeter (dy-cm)
	else if(conversion_value==="dy-cm" && conversion_result==="N-m")
	{
        let temp =(torque_value * Math.pow(10, -7)) ; 
        result = temp.toExponential(10)
	}
	else if(conversion_value==="dy-cm" && conversion_result==="kgf-m")
	{
		let temp = (torque_value  *  1.0197162129779282 * Math.pow(10, -8)) ;
        result = temp.toExponential(10)
    }
    else if(conversion_value==="dy-cm" && conversion_result==="lbf-in")
	{
        let temp =(torque_value * 8.850748065226473 * Math.pow(10, -7));
        result = temp.toExponential(10)
	}
	else if(conversion_value==="dy-cm" && conversion_result==="lbf-ft")
	{
        let temp =(torque_value * 7.375621211696555 * Math.pow(10, -8));
        result = temp.toExponential(10)
            
    }
    
    // When input is in Kgrf-meter (kgf-m)
	else if(conversion_value==="kgf-m" && conversion_result==="N-m")
	{
            let temp =(torque_value  * 9.80665) ;
            result = temp.toExponential(10);
	}
	else if(conversion_value==="kgf-m" && conversion_result==="dy-cm")
	{
            let temp=(torque_value  * 98066500); 
            result = temp.toExponential(10);
    }else if(conversion_value==="kgf-m" && conversion_result==="lbf-in")
	{
			let temp=(torque_value * 86.7961885138532);
            result = temp.toExponential(10);
    }
	else if(conversion_value==="kgf-m" && conversion_result==="lbf-ft")
	{
			let temp=(torque_value * 7.233013575568402);
            result = temp.toExponential(10);
    }
     
    // When input is in lbf-inch(lbf in)
	else if(conversion_value==="lbf-in" && conversion_result==="N-m")
	{
            let temp =(torque_value  * 0.1129848) ;
            result = temp.toExponential(10);
	}
	else if(conversion_value==="lbf-in" && conversion_result==="dy-cm")
	{
            let temp=(torque_value  * 1129848); 
            result = temp.toExponential(10);
    }else if(conversion_value==="lbf-in" && conversion_result==="kgf-m")
	{
			let temp=(torque_value * 0.011521243238006863);
            result = temp.toExponential(10);
    }
	else if(conversion_value==="lbf-in" && conversion_result==="lbf-ft")
	{
			let temp=(torque_value * 0.0833333087479293);
            result = temp.toExponential(10);
    }
     
    // When input is in lbf-foot(lbf-ft)
	else if(conversion_value==="lbf-ft" && conversion_result==="N-m")
	{
            let temp =(torque_value  * 1.355818) ;
            result = temp.toExponential(10);
	}
	else if(conversion_value==="lbf-ft" && conversion_result==="dy-cm")
	{
            let temp=(torque_value  * 13558180); 
            result = temp.toExponential(10);
    }else if(conversion_value==="lbf-ft" && conversion_result==="kgf-m")
	{
			let temp=(torque_value * 0.13825495964473086);
            result = temp.toExponential(10);
    }
	else if(conversion_value==="lbf-ft" && conversion_result==="lbf-in")
	{
            let temp=(torque_value * 12.000003540299225);
            result = temp.toExponential(10);
    }
	

    //inform the use if the input is not valid 
	if(isNaN(result))
	{
		torque_result.value="Enter a valid number";
	}
	else
	{
		torque_result.value=result;
	}
	
}

//program begins here 
function main(argument) {
	let convert_button=document.getElementById("convert_button");
	convert_button.addEventListener("click",converttorque);

}
main();
