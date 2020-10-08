function findPart(){
	var weight = document.getElementById("tot1").value;
	var height = document.getElementById("perc1").value;
	if(height<0){
		document.getElementById("error").innerHTML = "Please provide a positive height";
		document.getElementById("ans1").innerHTML = "";
		document.getElementById("saved").innerHTML = "";
	}

	if(weight<0){
		document.getElementById("error").innerHTML = "Please provide a positive weight";
		document.getElementById("ans1").innerHTML = "";
		document.getElementById("saved").innerHTML = "";
	}

	else {
		var ans = weight / (height * height) * 703 ;
		document.getElementById("error").innerHTML = "";
		document.getElementById("ans1").innerHTML = ans.toFixed(1);
	}
}