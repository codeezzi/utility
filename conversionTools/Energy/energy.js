var unitWeights={};
unitWeights['nJ'] = 0.000000001;
unitWeights['uJ'] = 0.000001;
unitWeights['mJ'] = 0.001;
unitWeights['J'] = 1;
unitWeights['kJ'] = 1000;
unitWeights['MJ'] = 1000000;
unitWeights['GJ'] = 1000000000;
unitWeights['W-h'] = 3600;
unitWeights['kW-h'] = 3600000;
unitWeights['MW-h'] = 3600000000;
unitWeights['GW-h'] = 3600000000000;
unitWeights['calIT'] = 4.1868;
unitWeights['kcalIT'] = 4186.8;
unitWeights['calth'] = 4.184;
unitWeights['kcalth'] = 4184;
unitWeights['hp-h'] = 2684519.5369;
unitWeights['eV'] = 1.60217733e-19;
unitWeights['keV'] = 1.60217733e-16;
unitWeights['MeV'] = 1.60217733e-13;
unitWeights['GeV'] = 1.60217733e-10;
unitWeights['erg'] = 1e-7;
unitWeights['Nm'] = 1;
unitWeights['dyn-cm'] = 1e-7;
unitWeights['kgf-m'] = 9.8066499997;
unitWeights['gf-m'] = 0.00980665;
unitWeights['gf-cm'] = 0.0000980665;
unitWeights['kgf-cm'] = 0.0980665;
unitWeights['lbf-ft'] = 1.3558179483;
unitWeights['lbf-in'] = 0.112984829;
unitWeights['ozf-in'] = 0.0070615518;
unitWeights['kp-m'] = 9.8066499997;
unitWeights['btu-it'] = 1055.0558526;
unitWeights['btu-th'] = 1054.35;
unitWeights['ton'] = 4184000000;
unitWeights['kton'] = 4184000000000;
unitWeights['Mton'] = 4184000000000000;



var formula={};
formula['nJ'] = 'nJ';
formula['uJ'] = '&mu;J';
formula['mJ'] = 'mJ';
formula['J'] = 'J';
formula['kJ'] = 'kJ';
formula['MJ'] = 'MJ';
formula['GJ'] = 'GJ';
formula['W-h'] = 'W-h';
formula['kW-h'] = 'kW-h';
formula['MW-h'] = 'MW-h';
formula['GW-h'] = 'GW-h';
formula['calIT'] = 'cal (IT)';
formula['kcalIT'] = 'kcal (IT)';
formula['calth'] = 'cal (th)';
formula['kcalth'] = 'kcal (th)';
formula['hp-h'] = 'hp.h';
formula['eV'] = 'eV';
formula['keV'] = 'keV';
formula['MeV'] = 'MeV';
formula['GeV'] = 'GeV';
formula['erg'] = 'erg';
formula['Nm'] = 'N.m';
formula['dyn-cm'] = 'dyn.cm';
formula['kgf-m'] = 'kgf.m';
formula['gf-m'] = 'gf.m';
formula['gf-cm'] = 'gf.cm';
formula['kgf-cm'] = 'kgf.cm';
formula['lbf-ft'] = 'lbf.ft';
formula['lbf-in'] = 'lbf.in';
formula['ozf-in'] = 'ozf.in';
formula['kp-m'] = 'kp.m';
formula['btu-it'] = 'Btu (IT)';
formula['btu-th'] = 'Btu (th)';
formula['ton'] = 'ton (explosive)';
formula['kton'] = 'kton (explosive)';
formula['Mton'] = 'Mton (explosive)';

const findFloatingCorrection = (x) => {
    let correction = 1;
    let xSplit;
    if (x.toString().includes('e')) {
        xSplit = x.toString().split('e');
        correction =  Math.pow(10, Math.abs(xSplit[1]));
    }
    if ((x*correction).toString().includes('.')) {
        let parts = x.toString().split('.');
        correction = correction * Math.pow(10, parts[1].length);
    }
    return correction;
}


let factor = 0;

function calculateUnit1(){
    const unit1 = Number(unitWeights[document.getElementById('s1').value].toString());
    const unit2 = unitWeights[document.getElementById('s2').value];
    const correctionFactor = Math.max(findFloatingCorrection(unit1),findFloatingCorrection(1 / unit2));
	factor = unit1*correctionFactor / (unit2 *correctionFactor);
	document.getElementById('inp2').value = document.getElementById('inp1').value * factor;
	document.getElementById('formula').innerHTML = '1 '+formula[document.getElementById('s1').value]+' = '+factor+' '+formula[document.getElementById('s2').value];
}

function calculateUnit2(){
	const unit1 = Number(unitWeights[document.getElementById('s1').value].toString());
    const unit2 = unitWeights[document.getElementById('s2').value];
    const correctionFactor = Math.max(findFloatingCorrection(unit2),findFloatingCorrection(1 / unit1));
	factor = unit2*correctionFactor / (unit1 *correctionFactor);
	document.getElementById('inp1').value = document.getElementById('inp2').value * factor;
	document.getElementById('formula').innerHTML = '1 '+formula[document.getElementById('s2').value]+' = '+factor+' '+formula[document.getElementById('s1').value];
}
function recalculateUnits(){
	document.getElementById('inp1').value = 1;
	calculateUnit1();
}
