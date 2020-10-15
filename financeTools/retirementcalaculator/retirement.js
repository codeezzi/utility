var early = null;
var compute = function(years, amount, roi, draw, current, inflation) {
  var rate = roi/100/12;
  var fv = 0;

  if(inflation) {
    amount = amount * (1+(0.0315*years));
  }

  var required = amount / (draw/100);
  var monthly = 1;
  early = null;
  while(fv < required) {
  	fv = current || 0;
    for(var i = 0; i < years * 12; i++) {
    	fv += monthly;
      fv = fv * (1+rate);

      if(fv > required && i < years*12-1) {
        console.log("early", i);
        early = i;
        break;
      }
    }

    if(fv < required) {
    	monthly += 1
    }
  }

  return monthly
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.computeNow = function() {
var draw = document.getElementById("draw").value;
var roi = document.getElementById("roi").value;
var amount = document.getElementById("amount").value;
var years = document.getElementById("years").value;
var current = document.getElementById("current").value;
var inflation = document.getElementById("inflation").checked;

 var computed = numberWithCommas(compute(+years, +amount, +roi, +draw, +current, inflation).toFixed(2));

 var amountAdjusted = inflation ? amount * (1+(years*0.0315)) : amount;
 var amountRequired = amountAdjusted / (draw/100);

var output = document.getElementById("output");
  output.innerHTML = (inflation ? "Amount required per year: $" + numberWithCommas(amountAdjusted.toFixed(2)) + "<br/>" : "")
    + (early != null ? "You can get there early! Only " + (early/12).toFixed(1) + " years required. <br/>": "")
    + "Total Networth Required: $"+ numberWithCommas(amountRequired.toFixed(2));
	output.innerHTML += "<div>$" + computed +"/month saving required</div>"
}
