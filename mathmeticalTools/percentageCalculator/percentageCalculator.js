MathJax.Hub.Config({    
    extensions: ["tex2jax.js"],    
    "HTML-CSS": { scale: 100}    
  });   

function op(){
var coll = document.getElementById("collapsible");
var i;
console.log("hi");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    console.log("hi");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}}

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
	document.getElementById("error2").innerHTML = "";
	document.getElementById("ans2").innerHTML = ans+'%';
	if(tot==0){
		document.getElementById("error2").innerHTML = "You tried to divide by 0. Check out the formula!";
	}
}

function findTot(){
	var perc = document.getElementById("perc3").value;
	var part = document.getElementById("part3").value;
	var ans;
	if(perc==0 && part==0)
		ans=0;
	else 
		ans = (part * 100) / perc;
	document.getElementById("error3").innerHTML = "";
	document.getElementById("ans3").innerHTML = ans;
	if(perc == 0 && part!=0)
		document.getElementById("error3").innerHTML = "You tried to divide by 0. Check out the formula!";
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
	document.getElementById("error4").innerHTML = "";
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
	if(ini==0 && fin!=0){
		document.getElementById("error4").innerHTML = "You tried to divide by 0. Check out the formula!";
	}
}