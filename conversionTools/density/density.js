var a={};
a['gcm'] = 1000;
a['kgcm'] = 1000000;
a['gm'] = 0.001;
a['kgm'] = 1;
a['gml'] = 1000;
a['gl'] = 1;
a['kgl'] = 1000;
a['ozi'] = 1729.994;
a['ozf'] = 1.001153;
a['lbi'] = 27679.90471;
a['lbf'] = 16.018463;
a['lby'] = 0.5932764;
a['ozgali'] = 6.236023;
a['ozgalu'] = 7.489151;
a['lbgali'] = 99.776372;
a['lbgalu'] = 119.826;
a['sf'] = 515.3788184;
a['lty'] = 1328.939;
a['sty'] = 1186.553;

// these values are with respect to kg/m^3, i.e.,
// a['gcm'] = 1000; implies 1g/cm^3 is equivalent to 1000kg/m^3

var full={};
full['gcm'] = 'g/cm&sup3;';
full['kgcm'] = 'kg/cm&sup3;';
full['gm'] = 'g/m&sup3;';
full['kgm'] = 'kg/m&sup3;';
full['gml'] = 'g/ml';
full['gl'] = 'g/L';
full['kgl'] = 'kg/L';
full['ozi'] = 'oz/in&sup3;';
full['ozf'] = 'oz/ft&sup3;';
full['lbi'] = 'lb/in&sup3;';
full['lbf'] = 'lb/ft&sup3;';
full['lby'] = 'lb/yd&sup3;';
full['ozgali'] = '(Imperial) oz/gal';
full['ozgalu'] = '(U.S. fluid) oz/gal';
full['lbgali'] = '(Imperial) lb/gal';
full['lbgalu'] = '(U.S. fluid) lb/gal';
full['sf'] = 'slug/ft&sup3;';
full['lty'] = 'l tn/yd&sup3;';
full['sty'] = 'sh tn/yd&sup3;';


var factor = 0;

function i1(){
	factor = a[document.getElementById('s1').value] / a[document.getElementById('s2').value];
	document.getElementById('inp2').value = document.getElementById('inp1').value * factor;
	document.getElementById('formula').innerHTML = '1 '+full[document.getElementById('s1').value]+' = '+factor+' '+full[document.getElementById('s2').value];
}
function i2(){
	factor = a[document.getElementById('s2').value] / a[document.getElementById('s1').value];
	document.getElementById('inp1').value = document.getElementById('inp2').value * factor;
	document.getElementById('formula').innerHTML = '1 '+full[document.getElementById('s2').value]+' = '+factor+' '+full[document.getElementById('s1').value];
}
function i1s(){
	document.getElementById('inp1').value = 1;
	i1();
}
