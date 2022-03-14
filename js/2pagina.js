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

const extras = [
    { extras: "sombrilla", precio: 2000 },
    { extras: "reposera", precio: 1000 },
    { extras: "heladerita", precio: 3000 },
];
const carrito = [];

let misExtras;
let finalizacion;

do {

    misExtras = prompt("Tenemos para alquilar sombrilla, reposera y heladerita. Ingrese un pedido o ingrese finalizar pedido ");

    const seleccionExtras = extras.find(extras => extras.extras === misExtras);

    carrito.push(seleccionExtras);

    finalizacion = prompt('1. Termina pedido \n2.Sigue haciendo pedidos')

} while (finalizacion !== "1");

console.log(carrito);


const total = (array) => {
    return array.reduce((acc, el) => acc + el.precio, 0)
};

const lista = (array) => {
    return array.map((data) => `${data.extras} : $${data.precio}.\n`)

}

alert(`su cuenta es un total de $${total(carrito)} \n\n Carrito:\n\n${lista(carrito)}`);






