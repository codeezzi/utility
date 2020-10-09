document.getElementById('submit').addEventListener('click', function(){
  // let amount = document.getElementById("amount").value;
  // let frequency = document.getElementById("frequency").value;
  // let interest = parseFloat(document.getElementById("interest").value/100);
  // let period = document.getElementById("period").value;

  term = document.getElementById("trm").value;
  apr = document.getElementById("apr").value;
  amt = document.getElementById("amt").value;
  apr /= 1200;
  term *= 12;



  var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
    // calc = amount * (((interest / 12) * ((1 + interest / 12)^(period*12))) / (1 + (interest/12)^(period*12) - 1));

  document.getElementById('result').textContent="$" + payment.toFixed(2);

})


//add error handling for when a field is left blank
//add field reset button
