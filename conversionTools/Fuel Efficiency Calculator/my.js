function computeConsumption(){
  var distance = document.getElementById('distance').value;
  var fuel = document.getElementById('fuel').value;
  var costper = document.getElementById('costper').value;
  var consumed =  (fuel / (distance/100)).toFixed(2);
  var costper100 = (consumed * costper).toFixed(2);
  document.getElementById('consumption').innerHTML = "Consumption is "+consumed+" Litres/100km ( ₹ " + costper100 + " / 100km ) <br><br>Total Fuel cost = ₹ " + (fuel*costper).toFixed(2);
}
