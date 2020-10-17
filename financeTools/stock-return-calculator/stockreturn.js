function StockReturn() {
    var p0 = parseInt(document.getElementById("intialprice").value);
    var p1 = parseInt(document.getElementById("endingprice").value);
    var D = parseInt(document.getElementById("dividends").value);
    var t =parseInt(document.getElementById("time").value);


    var diff = p1-p0;
    var result1 = diff+D;
    result1=result1/p0;
    result1=result1*100;
    
    var result2;
    var divi=p1/p0;
    var exp=1/t;
    divi=Math.pow(divi,exp);
    result2=divi-1;
    result2=result2*100;

    var val1 = document.getElementById("stockreturnvalue");
    val1.value = result1;

    var val2 = document.getElementById("compoundgrowth");
    val2.value=result2;
}