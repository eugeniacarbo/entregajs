let nombre = prompt("Holaa, como es tu nombre?");

let edad = parseInt(prompt("Hola " + nombre + " Cuantos años tienes?"));

if (edad < 18) {
    alert("Este sitio solo acepta mayores de edad.");

} else if (edad >= 18 && edad <= 100) {
    alert("Ya estas a un paso de tus Vacaciones!!!");

} else {
    alert("Por favor indicanos tu edad para continuar tu reserva.");
}

alert("Tnemos 2 cabañas, cada una tiene capacidad para 6 personas");

let cantidad = prompt("Cuantas personas van a ser?");

if (cantidad <= 6) {
    alert("Tu estadia saldrá $9000 por noche.");
} else if (cantidad > 6 && cantidad < 13) {
    alert("Vas a necesitar dos cabañas, tu estadia saldrá $18000 por noche");
} else if (capacidad > 12) {
    alert("No contamos con esa capacidad");
}

let noches = 40;

let totalReservas = 0;

while (noches >= 40) {
    totalReservas = parseInt(prompt("Cuantas noches desas reservar?"));
    if (totalReservas > noches) {
        alert("No disponemos de tantas noches");
    }
    noches = noches - totalReservas;

    console.log(`Queda un total de ${noches} disponibles`);
}

alert(`Queda un total de ${noches} noches disponibles.`);

alert("Calculemos cuanto sale tu estadía");

let costoPersona = parseInt(prompt("Confirmanos cuantas personas son?"));

let costoDias = parseInt(prompt("Confirmanos cuantos dias se van a quedar?"));

let costoNoche = 1500;

function costo(costoPersona, costoDias, costoNoche) {

    costo = costoPersona * costoDias * costoNoche;
}

costo(costoPersona, costoDias, 1500);

total = costo

alert(`Su reserva tendrá un costo de $ ${total} `);



/*let metodoDePago = prompt("Indicá el metodo de pago: credito, debito o trasferencia");
while (metodoDePago != "") {
    switch (metodoDePago.toLocaleUpperCase()) {
        case ("CREDITO"):
            alert("Hasta 1, 3 y 6 pagos sin interés");
            let cuotas = prompt("¿Cuantas cuotas querés?");
            if (cuotas === "1") {
                alert(`El valor de la cuota es $ ${costo}`);
                break;
            } else if (cuotas === "3") {
                alert(`El valor de la cuota es $ ${costo / 3}`);
                break;
            } else if (cuotas === "6") {
                alert(`El valor de la cuota es $ ${costo / 6}`);
            }


        case ("DEBITO O TRASFERENCIA"):
            alert("Con débito tienes un 10% de descuento y con trasferencia un 20%, con que deseas abonar?");
            let metodo = prompt("Debito o trasferencia?");
            if (metodo === "DEBITO") {
                alert(`El valor de la cuota es $ ${costo * 0,9}`);
                break;
            } else if (metodo === "TRANSFERENCIA") {
                alert(`El valor de la cuota es $ ${costo * 0,8}`);
            }

    }
}*/