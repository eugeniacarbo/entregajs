let nombre = prompt("Holaa, como es tu nombre?");

let edad = parseInt(prompt("Hola " + nombre + " Cuantos años tienes?"));

if (edad < 18) {
    alert("Este sitio solo acepta mayores de edad.");

} else if (edad >= 18 && edad <= 100) {
    alert("Ya estas a un paso de tus Vacaciones!!!");

} else {
    alert("Por favor indicanos tu edad para continuar tu reserva.");
}
class Cabana {

    constructor(nombre, cantidad, capacidad, costo) {

        this.nombre = nombre;
        this.cantidad = cantidad;
        this.capacidad = capacidad;
        this.costo = costo

    }

    saluda() {
        return alert(`Hola somos complejo ${this.nombre} tenemos ${this.cantidad} cabañas para ofrecerte, 
        la cabaña A cuenta con una capacidad de hasta ${this.capacidad} personas  y tendrá un costo de
         $ ${this.costo} por persona.`);
    }
    opcion2() {
        return alert(`Mientras que nuestra cabaña B cuenta con una capacidad de ${this.capacidad}
         personas y tendrá un costo de $ ${this.costo} por persona.`)
    }


}

const cabana1 = new Cabana("refugio", "dos", "seis", 1500);

const cabana2 = new Cabana("refugio", "dos", "diez", 3000);

console.log(cabana1.saluda());

console.log(cabana2.opcion2());

let cantidadPersonas = prompt("Cuantas personas van a ser?");

let cantidadNoches = prompt("Cuantas noches quieren alquilar?");

let costo1 = 1500;

let costo2 = 3000;

let total1 = (costo1 * cantidadPersonas * cantidadNoches);

let total2 = (costo2 * cantidadPersonas * cantidadNoches);

let reserva = prompt("Que cabaña te gustaria alquilar A o B"); {

    if (reserva == "A") {
        alert(`La cabaña A es tuya y tendrá un costo de $ ${total1} `);
    } else if (reserva == "B") {
        alert(`La cabaña B es tuya y tendrá un costo de $ ${total2} `);
    } else {
        alert("La opcion es incorrecta")
    }

}
