document.getElementById('submit').addEventListener('click', function(){

  // let amount = document.getElementById("amount").value;
  // let frequency = document.getElementById("frequency").value;
  // let interest = parseFloat(document.getElementById("interest").value/100);
  // let period = document.getElementById("period").value;


  term = document.getElementById("trm").value;
  apr = document.getElementById("apr").value;
  amt = document.getElementById("amt").value;


  term *= 12;

  if((amt === "") || (apr === "")){
    alert("Please enter a value for Mortgage Amount AND Interest Rate.");
    if(amt === ""){
      document.getElementById("amt").style.borderColor = "red";

    }
    if(apr === ""){
      document.getElementById("apr").style.borderColor = "red";
    }
    document.getElementById('result').textContent="____________";
  }
  else{
    apr /= 1200;
    document.getElementById("amt").style.borderColor = "black";
    document.getElementById("apr").style.borderColor = "black";
    var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);

    document.getElementById('result').textContent="$" + payment.toFixed(2);
  }

  console.log(apr === "");

})

document.getElementById("reset").addEventListener("click", function(){
  document.getElementById("amt").style.borderColor = "black";
  document.getElementById("apr").style.borderColor = "black";
  document.getElementById("trm").value = 1;
  document.getElementById("apr").value = "";
  document.getElementById("amt").value = "";
  document.getElementById('result').textContent="____________";
})

  apr /= 1200;
  term *= 12;



  var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
    // calc = amount * (((interest / 12) * ((1 + interest / 12)^(period*12))) / (1 + (interest/12)^(period*12) - 1));

  document.getElementById('result').textContent="$" + payment.toFixed(2);




//add error handling for when a field is left blank
//add field reset button

