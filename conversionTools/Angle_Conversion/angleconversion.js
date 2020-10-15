/* When the input field receives input, convert the value from degree to radians pi/180 */
function degangleConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputRadian").innerHTML = valNum * 0.01745329;
  }

  /* When the input field receives input, convert the value from radians to degrees 180/pi */
  function radangleConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputDegree").innerHTML = valNum * 57.29577;
  }