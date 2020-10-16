MathJax.Hub.Config({    
    extensions: ["tex2jax.js"],    
    "HTML-CSS": { scale: 100}    
  });   


// function convertToFraction(){
// 	var decimal = document.getElementById("decimal").value;
// 	document.getElementById("ans1").innerHTML = decimal;
// }

function gcd(a, b) {
	return (b) ? gcd(b, a % b) : a;
}

function convertToFraction() {
	var decimal = document.getElementById("decimal").value;
	var top		= decimal.toString().replace(/\d+[.]/, '');
	var bottom	= Math.pow(10, top.length);
	if (decimal > 1) {
		top	= +top + Math.floor(decimal) * bottom;
	}
	var x = gcd(top, bottom);
	document.getElementById("top").innerHTML = (top / x)+"/";
	document.getElementById("bottom").innerHTML =  (bottom / x);
};