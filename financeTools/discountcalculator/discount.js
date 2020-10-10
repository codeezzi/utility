function findPart(){
	var tot = document.getElementById("tot1").value;
	var perc = document.getElementById("perc1").value;
	if(perc<0){
		document.getElementById("error").innerHTML = "Please provide a positive discount value";
		document.getElementById("ans1").innerHTML = "";
		document.getElementById("saved").innerHTML = "";
	}

	else if(tot<0){
		document.getElementById("error").innerHTML = "Price before discount can't be negative ";
		document.getElementById("ans1").innerHTML = "";
		document.getElementById("saved").innerHTML = "";
	}

	else if(perc>100){
		document.getElementById("error").innerHTML = "Please enter a discount less than or equal to 100";
		document.getElementById("ans1").innerHTML = "";
		document.getElementById("saved").innerHTML = "";
	}
	else{
		var ans = (tot * perc) / 100;
		document.getElementById("error").innerHTML = "";
		document.getElementById("ans1").innerHTML = (tot - ans).toFixed(2);
		document.getElementById("saved").innerHTML = ans.toFixed(2);
	}
}