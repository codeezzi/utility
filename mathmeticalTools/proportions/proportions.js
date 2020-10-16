var numInputs = document.querySelectorAll(".typenum");
numInputs.forEach(function (el) {
    el.oninput = inputNum;
});
document.querySelector('.checkround input').onclick = calculate;
calculate();
function inputNum() {
    var num = this.value.replace(/\D+/g, '') * 1;
    if (num > 9999) {
        this.value = 9999
    } else if (num == '' || isNaN(num)) {
        this.value = ''
    } else {
        this.value = num;
    }
    if (!this.value) {
        document.querySelector('.resultnum').value = '';
    }
    calculate();
}
function calculate() {
    var valA = numInputs[0].value;
    var valB = numInputs[1].value;
    var valC = numInputs[2].value;
    var valD = numInputs[3].value;
    var valE = numInputs[4].value;
    var valF = document.querySelector('.resultnum');

    if (!valA || !valB || !valC || !valD || !valE) {
        return;
    } else {
        var numX = (valA - valC) / (valB - valD);
        var numY = valA - (valB * numX);
        var result = (valE - numY) / numX;
        if (document.querySelector('.checkround input').checked) {
            valF.value = Math.round(result);
        } else {
            valF.value = result;
        }
    }
}