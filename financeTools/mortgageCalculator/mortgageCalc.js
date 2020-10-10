document.getElementById('submit').addEventListener('click', function(){

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


//add error handling for when a field is left blank
//add field reset button
