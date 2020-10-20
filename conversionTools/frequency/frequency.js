var fromUnit,toUnit = "";
var fromVal,toVal = "";
var textDesc = "";
var refDesc = "";

//Full-forms:
var abbr = new Map([
	["Hz","Hertz"],
	["kHz","KiloHertz"],
	["MHz","MegaHertz"],
	["rpm","Revolutions/min"],
	["rps","Revolutions/sec"],
	["rads","Radians/min"],
	["radm","Radians/sec"]
]);

//Reference:
// 1 KiloHertz = 1000 Hertz
// 1 MegaHertz = 1000 Kilohertz
// 1 radian/second = 0.159155 Hertz
// 1 radian/second = 9.5492966 RPM
var valMap = new Map([
	["Hz:Hz","1"],
	["Hz:kHz","0.001"],
	["Hz:MHz","0.000001"],
	["Hz:rpm","60"],
	["Hz:rps","1"],
	["Hz:rads","6.28318531"],
	["Hz:radm","0.104719755"],
	["kHz:Hz","1000"],
	["kHz:kHz","1"],
	["kHz:MHz","0.001"],
	["kHz:rpm","0.06"],
	["kHz:rps","0.001"],
	["kHz:rads","6283.18531"],
	["kHz:radm","104.719755"],
	["MHz:Hz","1000000"],
	["MHz:kHz","1000"],
	["MHz:MHz","1"],
	["MHz:rpm","0.00006"],
	["MHz:rps","0.000001"],
	["MHz:rads","6283185.31"],
	["MHz:radm","104719.755"],
	["rpm:Hz","0.016666667"],
	["rpm:kHz","16.666667"],
	["rpm:MHz","16666.667"],
	["rpm:rpm","1"],
	["rpm:rps","60"],
	["rpm:rads","0.104719755"],
	["rpm:radm","0.01745329"],
	["rps:Hz","1"],
	["rps:kHz","0.001"],
	["rps:MHz","0.000001"],
	["rps:rpm","0.016666667"],
	["rps:rps","1"],
	["rps:rads","6.28318531"],
	["rps:radm","0.104719755"],
	["rads:Hz","0.159154943"],
	["rads:kHz","159.154943"],
	["rads:MHz","159154.943"],
	["rads:rpm","9.5492966"],
	["rads:rps","572.957795"],
	["rads:rads","1"],
	["rads:radm","0.016666667"],
	["radm:Hz","0.00265258333"],
	["radm:kHz","2.65258333"],
	["radm:MHz","2652.58333"],
	["radm:rpm","572.957795"],
	["radm:rps","34377.46776"],
	["radm:rads","60"],
	["radm:radm","1"]
]);

function convert()
{
	fromUnit=document.getElementById("fromUnit").value;
	toUnit=document.getElementById("toUnit").value;
	fromVal=document.getElementById("fromVal").value;
	
	calcAndDisp(fromUnit,toUnit,fromVal);
}

function dispRes()
{
	document.getElementById("toVal").value=toVal;
	document.getElementById("textDesc").innerText=textDesc;
	document.getElementById("refDesc").innerText=refDesc;
}

function calcAndDisp(fromUnit,toUnit,fromVal)
{
	toVal = fromVal*parseFloat(valMap.get(fromUnit+":"+toUnit));
	console.log("toVal:"+toVal);
	textDesc = fromVal + " " + abbr.get(fromUnit) + " = " + toVal + " " + abbr.get(toUnit);
	refDesc = "1 " + abbr.get(fromUnit) + " = " + valMap.get(fromUnit+":"+toUnit) + " " + abbr.get(toUnit);
	console.log("textDesc:"+textDesc);

	dispRes();
}