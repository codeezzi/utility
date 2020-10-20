function generateSeries() {

    var serieSelected;
    var listCheckbox = document.getElementsByName("series");
    for (i = 0; i < listCheckbox.length; i++) {
        if (listCheckbox[i].checked) {
            serieSelected = listCheckbox[i].value;
        }
    }

    var amountItemsToGenerate = document.getElementById("valueAmountItems").value;
    var initialValueOfSerie = document.getElementById("valueInitialValue").value;
    var factor = document.getElementById("valueFactor").value;
    var result;

    switch (serieSelected) {
        case 'Fibonacci':
            result = generateFibonacci(amountItemsToGenerate);
            break;
        case 'GP':
            result = generateGeometricProgression(amountItemsToGenerate, factor, initialValueOfSerie);
            break;
        case 'AP':
            result = generateArithmeticProgression(amountItemsToGenerate, factor, initialValueOfSerie);
            break;
        case 'HP':
            result = generateHarmonicProgression(amountItemsToGenerate, factor, initialValueOfSerie);
            break;
        case 'PSS':
            result = generatePerfectSquareSeries(amountItemsToGenerate);
            break;
        case 'TNS':
            result = generateTriangularNumberSeries(amountItemsToGenerate);
            break;
        case 'PNS':
            result = generatePentagonalNumberSeries(amountItemsToGenerate);
            break;
        case 'HNS':
            result = generateHexagonalNumberSeries(amountItemsToGenerate);
            break;
    }

    document.getElementById("idResult").innerHTML = result;
}

function disableInputFactorAndInitialValue() {
    document.getElementById("valueInitialValue").disabled = true;
    document.getElementById("valueFactor").disabled = true;
    document.getElementById("buttonGenerate").disabled = false;
}

function enableInputFactorAndInitialValue() {
    document.getElementById("valueInitialValue").disabled = false;
    document.getElementById("valueFactor").disabled = false;
    document.getElementById("buttonGenerate").disabled = false;
}

function generateFibonacci(amountItemsToGenerate) {

    // amountItensGenerate is more than 0.

    var result = "0";
    var count;
    var previous = 0;
    var current = 1;
    var acumulate = 0;

    if (amountItemsToGenerate > 1) {
        result += ",1";
    }

    for (count = 3; count <= amountItemsToGenerate; count++) {
        acumulate = previous + current;
        result += "," + acumulate;
        previous = current;
        current = acumulate;
    }

    return result;
}

function generateGeometricProgression(amountItemsToGenerate, coeficient, initialValue) {

    // amountItensGenerate is more than 0.

    var result = "" + initialValue;
    var count;
    var acumulate = 0;
    var previous = initialValue;

    for (count = 2; count <= amountItemsToGenerate; count++) {
        acumulate = previous * coeficient;
        result += ", " + acumulate;
        previous = acumulate;
    }

    return result;
}

function generateArithmeticProgression(amountItemsToGenerate, coeficient, initialValue) {
    // amountItensGenerate is more than 0.

    var result = "" + initialValue;
    var count;
    var acumulate = 0;
    var previous = initialValue;

    for (count = 2; count <= amountItemsToGenerate; count++) {
        acumulate = previous + coeficient;
        result += ", " + acumulate;
        previous = acumulate;
    }

    return result;
}

function generateHarmonicProgression(amountItemsToGenerate, coeficient, initialValue) {
    // amountItensGenerate is more than 0.

    var result = "1/" + initialValue;
    var count;
    var acumulate = 0;
    var previous = initialValue;

    for (count = 2; count <= amountItemsToGenerate; count++) {
        acumulate = previous + coeficient;
        result += ", 1/" + acumulate;
        previous = acumulate;
    }

    return result;
}

function generatePerfectSquareSeries(amountItemsToGenerate) {

    // amountItensGenerate is more than 0.

    var count;
    var result = "1";

    for (count = 2; count <= amountItemsToGenerate; count++) {
        result += ", " + count * count;
    }

    return result;
}

function generateTriangularNumberSeries(amountItemsToGenerate) {
    var result = "0";
    var count;
    var acumulate = 0;

    if (amountItemsToGenerate > 1) {
        result += ", 1";
    }

    for (count = 2; count <= amountItemsToGenerate; count++) {
        acumulate = (count * (count + 1)) / 2;
        result += ", " + acumulate;
    }

    return result;
}

function generatePentagonalNumberSeries(amountItemsToGenerate) {
    var result = "0";
    var count;
    var acumulate = 0;

    for (count = 1; count <= amountItemsToGenerate; count++) {
        acumulate = ((3 * (count * count)) - count) / 2;
        result += ", " + acumulate;
    }

    return result;
}

function generateHexagonalNumberSeries(amountItemsToGenerate) {
    var result = "1";
    var count;
    var acumulate = 0;

    for (count = 2; count <= amountItemsToGenerate; count++) {
        acumulate = (2 * count * ((2 * count) - 1)) / 2;
        result += ", " + acumulate;
    }

    return result;
}