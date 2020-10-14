function findGcd(e) {
    e.preventDefault();
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    if (x < 1 || y < 1 || x != Math.round(x) || y != Math.round(y)) {
        alert("Please enter positive integer values!!")
    }
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  document.getElementById("ans1").innerHTML = x;
  document.getElementById("num1").value="";
  document.getElementById("num2").value="";
}


function findHcf(e) {
    e.preventDefault();
    let a = document.getElementById("num3").value;
    let b = document.getElementById("num4").value;

    if (a < 1 || b < 1 || a != Math.round(a) || b != Math.round(b)) {
        alert("Please enter positive integer values!!")
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (Math.max(a, b) % Math.min(a, b) != 0) {
        if (a > b) {
           a %= b;
        }
        else {
           b %= a;
        }
     }
     
    let ans2 =  Math.min(a,b);
    document.getElementById("ans2").innerHTML = ans2;
    document.getElementById("num3").value="";
    document.getElementById("num4").value="";
}


function findLcm(e) {
    e.preventDefault();

    let p = document.getElementById("num5").value;
    let q = document.getElementById("num6").value;

    if (p < 1 || q < 1 || p != Math.round(p) || q != Math.round(q)) {
        alert("Please enter positive integer values!!")
    }

    p = Math.abs(p);
    q = Math.abs(q);

    let pro =  (p*q);

    if (p<q) {
        let temp = q;
        q=p;
        p=temp;        
    }

    let mod = p%q;
    if (mod==0)
    {
       let ans3 = (pro/q);
    }
    else {
        ans3 = (pro/mod);
    }            

   document.getElementById("ans3").innerHTML = ans3;
   document.getElementById("num5").value="";
   document.getElementById("num6").value="";
 }

