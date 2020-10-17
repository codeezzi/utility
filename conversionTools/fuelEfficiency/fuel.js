function calculateMPG() {
  var miles = document.getElementById("miles").value;
  var gallons = document.getElementById("gallons").value;
  console.log(mpgs);

  
  if (miles < 0) {
		document.getElementById("miles").innerHTML = "";
  } 
  else if (gallons < 0) {
		document.getElementById("gallons").innerHTML = "";
  } 
  else {
    var mpg = miles / gallons;

    document.getElementById("mpgs").innerHTML = mpg.toFixed(2);
    console.log(mpgs);
  }
}