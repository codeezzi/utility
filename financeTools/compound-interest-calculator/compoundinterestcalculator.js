function compoundInterest() {
    var p = parseInt(document.getElementById("principal").value);
    var r = parseInt(document.getElementById("rate").value);
    var t = parseInt(document.getElementById("time").value);
    var n = parseInt(document.getElementById("part").value);

    var power = n * t;
    var brack = (1 + (r / (100 * n)));
    var amount = p * (brack ** power);
    var ci = amount - p;

    var res = document.getElementById("final-amount");
    res.value = amount;
    var val = document.getElementById("compound");
    val.value = ci;
}