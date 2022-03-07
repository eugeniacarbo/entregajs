alert("Calculemos cuanto sale tu estadía");

let costoPersona = parseInt(prompt("Confirmanos cuantas personas son?"));

let costoDias = parseInt(prompt("Confirmanos cuantos dias se van a quedar?"));

let costoNoche = 1500;

let costo = 0;

function calcularCosto(costoPersona, costoDias, costoNoche) {

    costo = costoPersona * costoDias * costoNoche;
    return costo;
}

calcularCosto(costoPersona, costoDias, 1500);

let total = costo

alert(`Su reserva tendrá un costo de $ ${total} `);
