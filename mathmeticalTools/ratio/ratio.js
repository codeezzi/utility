var ratio11, ratio12, ratio21, ratio22, s_ratio1, s_ratio2 = "";

function calculate() {
    extract_values();
    if (ratio11 && ratio12) {
        const gcd = gcd_two_numbers(Number(ratio11), Number(ratio12));
        if (gcd === 1) {
            s_ratio1 = ratio11;
            s_ratio2 = ratio12;
        } else {
            s_ratio1 = ratio11 / gcd;
            s_ratio2 = ratio12 / gcd;
        }
        display_results()
    } else {
        document.getElementById("simplificationresult").innerHTML = "Ratio 1 not provided";
        document.getElementById("comparisonresult").innerHTML = "Comparison result";
    }
}

function display_results() {
    let simplification_result, comparison_result;
    if (ratio21 && ratio22) {
        if (ratio11 * ratio22 === ratio12 * ratio21) {
            if (ratio11 === ratio21) {
                simplification_result = ratio11 + ":" + ratio12 + " can be simplified to " + s_ratio1 + ":" + s_ratio2;
                comparison_result = "Ratio 1 and Ratio 2 are the same " + ratio21 + ":" + ratio22;
            } else {
                simplification_result = "Both ratios " + ratio11 + ":" + ratio12 + " and " + ratio21 + ":" + ratio22 + " can be simplified to " + s_ratio1 + ":" + s_ratio2;
                comparison_result = ratio11 + ":" + ratio12 + " is EQUAL to " + ratio21 + ":" + ratio22;
            }
        } else {
            simplification_result = ratio11 + ":" + ratio12 + " can be simplified to " + s_ratio1 + ":" + s_ratio2;
            comparison_result = ratio11 + ":" + ratio12 + " is NOT EQUAL to " + ratio21 + ":" + ratio22;
        }
    } else {
        simplification_result = ratio11 + ":" + ratio12 + " can be simplified to " + s_ratio1 + ":" + s_ratio2;
        comparison_result = "Ratio 2 not provided";
    }
    document.getElementById("simplificationresult").innerHTML = simplification_result;
    document.getElementById("comparisonresult").innerHTML = comparison_result;
}

function extract_values() {
    ratio11 = document.getElementById("ratio11").value;
    ratio12 = document.getElementById("ratio12").value;
    ratio21 = document.getElementById("ratio21").value;
    ratio22 = document.getElementById("ratio22").value;
}

function gcd_two_numbers(x, y) {
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
