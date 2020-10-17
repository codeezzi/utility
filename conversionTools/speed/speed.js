function convertSpeed() {

    var speed = document.getElementById("idSpeedInput").value;
    var from = document.getElementById("speedOne").value;
    var to = document.getElementById("speedTwo").value;
    var resultado = 0;

    switch (from) {
        case 'km/h':
            if (to == "km/h") {
                resultado = speed;
            } else if (to == "m/s") {
                resultado = speed * 0.277778;
            } else if (to == "mph") {
                resultado = speed * 0.621371;
            } else if (to == "ft/s") {
                resultado = speed * 0.911344;
            } else if (to == "knots") {
                resultado = speed * 0.539957;
            }
            break;
        case 'm/s':
            if (to == "km/h") {
                resultado = speed / 0.277778;
            } else if (to == "m/s") {
                resultado = speed;
            } else if (to == "mph") {
                resultado = speed / 0.44704;
            } else if (to == "ft/s") {
                resultado = speed / 0.3048;
            } else if (to == "knots") {
                resultado = speed / 0.514444;
            }
            break;
        case 'mph':
            if (to == "km/h") {
                resultado = speed / 0.621371;
            } else if (to == "m/s") {
                resultado = speed * 0.44704;
            } else if (to == "mph") {
                resultado = speed;
            } else if (to == "ft/s") {
                resultado = speed / 0.681818;
            } else if (to == "knots") {
                resultado = speed * 0.868976;
            }
            break;

        case 'ft/s':
            if (to == "km/h") {
                resultado = speed / 0.911344;
            } else if (to == "m/s") {
                resultado = speed * 0.3048;
            } else if (to == "mph") {
                resultado = speed * 0.681818;
            } else if (to == "ft/s") {
                resultado = speed;
            } else if (to == "knots") {
                resultado = speed * 0.592484;
            }
            break;

        case 'knots':
            if (to == "km/h") {
                resultado = speed / 0.539957;
            } else if (to == "m/s") {
                resultado = speed * 0.514444;
            } else if (to == "mph") {
                resultado = speed / 0.868976;
            } else if (to == "ft/s") {
                resultado = speed / 0.592484;
            } else if (to == "knots") {
                resultado = speed;
            }
            break;
    }

    document.getElementById("idResult").innerHTML = resultado;

}