
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var d1 = document.querySelector("#d1");
var d2 = document.querySelector("#d2");
var d3 = document.querySelector("#d3");
var submit = document.querySelector("#submit");
var tryAgain = document.querySelector("#tryagain");
var doubleVar = document.querySelector("#doubleVar");
var tripleVar = document.querySelector("#tripleVar");
var xshow = document.querySelector("#x");
var yshow = document.querySelector("#y");
var zshow = document.querySelector("#z");
var doubleVarSwitch = false;
var tripleVarSwitch = false;
inputs= document.getElementsByTagName("input")
for(var i=0;i<inputs.length;i++)
{
    inputs[i].disabled=true;
}


doubleVar.addEventListener("click",function(){
    doubleVar.classList.add("selected");
    tripleVar.classList.remove("selected");
    doubleVarSwitch=true;
    tripleVarSwitch=false;
    document.getElementById("eqn3").style.visibility = 'hidden';
    d1.style.visibility="hidden";
    d2.style.visibility="hidden";
    document.getElementById("eqnDescription").innerHTML="equation of the form ax + by + c = 0";
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].disabled=false;
    }
    
})
tripleVar.addEventListener("click",function(){
    tripleVar.classList.add("selected");
    doubleVar.classList.remove("selected");
    doubleVarSwitch=false;
    tripleVarSwitch=true;
    document.getElementById("eqn3").style.visibility = 'visible';
    d1.style.visibility="visible";
    d2.style.visibility="visible";
    document.getElementById("eqnDescription").innerHTML="equation of the form ax + by + cz + d = 0";
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].disabled=false;
    }
})

submit.addEventListener("click",function(){
    if(doubleVarSwitch==true){
        a1=a1.value,a2=a2.value,b1=b1.value,b2=b2.value,c1=c1.value,c2=c2.value;
        var y = ((a2*c1)-(a1*c2))/((a1*b2)-(a2*b1));
        var x = ((b2*c1)-(b1*c2))/((a2*b1)-(a1*b2));
        document.getElementById("answers").style.visibility="visible";
        zshow.style.visibility="hidden";
        xshow.innerHTML="x="+ x;
        yshow.innerHTML="y="+ y;
    }
    else if(tripleVarSwitch==true){
        a1=a1.value,a2=a2.value,a3=a3.value,b1=b1.value,b2=b2.value,b3=b3.value,c1=c1.value,c2=c2.value,c3=c3.value,d1=-d1.value,d2=-d2.value,d3=-d3.value;
        Dx = d1*((b2*c3)-(c2*b3)) - b1*((d2*c3)-(c2*d3)) + c1*((d2*b3)-(b2*d3));
        Dy = a1*((d2*c3)-(c2*d3)) - d1*((a2*c3)-(a3*c2)) + c1*((a2*d3)-(a3*d2));
        Dz = a1*((d3*b2)-(b3*d2)) - b1*((a2*d3)-(a3*d2)) + d1*((a2*b3)-(a3*b2));
        D = a1*((b2*c3)-(b3*c2)) - b1*((a2*c3)-(a3*c2)) + c1*((a2*b3)-(a3*b2));
        x = -Dx/D;
        y = -Dy/D;
        z = -Dz/D;
        document.getElementById("answers").style.visibility="visible";
        xshow.innerHTML="x="+ x;
        yshow.innerHTML="y="+ y;
        zshow.innerHTML="z="+ z;
    }
    
});

tryAgain.addEventListener("click",function(){
    inputs= document.getElementsByTagName("input")
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].value=null;
    }
    document.getElementById("answers").style.visibility="hidden";
});

