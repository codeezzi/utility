function findPart(){
	var tot = document.getElementById("tot1").value;
	var perc = document.getElementById("perc1").value;
	var ans = (tot * perc) / 100;
	document.getElementById("ans1").innerHTML = (tot - ans);
	document.getElementById("saved").innerHTML = ans;
}
