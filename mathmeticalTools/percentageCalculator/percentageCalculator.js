function findPart(){
	var tot = document.getElementById("tot1").value;
	var perc = document.getElementById("perc1").value;
	var ans = (tot * perc) / 100;
	document.getElementById("ans1").innerHTML = ans;
}

function findPerc(){
	var tot = document.getElementById("tot2").value;
	var part = document.getElementById("part2").value;
	var ans = (part / tot) * 100;
	document.getElementById("ans2").innerHTML = ans+'%';
}

function findTot(){
	var perc = document.getElementById("perc3").value;
	var part = document.getElementById("part3").value;
	var ans;
	if(perc==0 && part==0)
		ans=0;
	else 
		ans = (part * 100) / perc;
	document.getElementById("ans3").innerHTML = ans;
}

function findPercChange(){
	var ini = document.getElementById("ini").value;
	var fin = document.getElementById("fin").value;
	var diff = fin-ini;
	var ans;
	if(ini==0 && diff==0){
		ans=0
	}
	else
		ans = (100 * diff) / ini;
	
	if(diff<0){
		ans = 0-ans;
		document.getElementById("ans4").innerHTML = ans +'% decrease';
	}
	else if(diff==0){

		document.getElementById("ans4").innerHTML = ans +'% increase/decrease';
	}
	else{
		document.getElementById("ans4").innerHTML = ans +'% increase';
	}
}