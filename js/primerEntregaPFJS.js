const respuestaClick = () => alert ("Iniciar app desde aqui proximamente");
const eventoClick = 'click'

btn1.addEventListener(eventoClick, respuestaClick);
btn1.onclick =  respuestaClick;

const IVA = 1.21;
const impuestosTasas = 1.50;
let totalcompra = 0;

class Pasaje {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  calcularPrecio() {
    return ((this.precio) * 1.50) * 1.21;
  }
}

const pasaje1 = new Pasaje("Mendoza", 60000);
const pasaje2 = new Pasaje("Bariloche", 70000);
const pasaje3 = new Pasaje("Cataratas", 50000);

let realizoCompraPrevia = false;

function confirmarCompra() {
  let respuesta = "";
  if (realizoCompraPrevia) {
    respuesta = prompt ("Desde adquirir otro pasaje? \nEscriba el número de su elección: \n1) Si \n2) No");
  } else {
    respuesta = prompt("Desea adquirir un pasaje? \nEscriba el número de su elección:\n1) Si \n2) No");
  } if (respuesta === "1" || respuesta === "Si" || respuesta === "SI" || respuesta === "si") {
    realizoCompraPrevia = true;
    return true;
  } else {
    return false;
  }
}

function comprarPasaje() {
  while (confirmarCompra()) {
    const pasajeSeleccionado = prompt("¿Elija su proximo destino?\nEscriba el número de su elección:\n1) Mendoza - $ 60.000.- \n2) Bariloche - $ 70.000.- \n3) Cataratas - $ 50.000.-");

    switch (pasajeSeleccionado) {
      case "1":
      case "Mendoza":
        let cantidad1 = prompt("Cuántos pasajes desea?");
        alert("Has comprado para viajar a " + pasaje1.nombre + " por " + "$ " + cantidad1 * pasaje1.calcularPrecio() + ".-" + "\nEl valor incluye IVA, impuestos y tasas");
        totalcompra = totalcompra + cantidad1 * pasaje1.calcularPrecio() 
        break;
      case "2":
      case "Bariloche":
        let cantidad2 = prompt("Cuántos pasajes desea?");
        alert("Has comprado para viajar a " + pasaje2.nombre + " por " + "$ " + cantidad2 * pasaje2.calcularPrecio() + ".-" + "\nEl valor incluye IVA, impuestos y tasas");
        totalcompra = totalcompra + cantidad2 * pasaje2.calcularPrecio()
        break;
      case "3":
      case "Cataratas":
        let cantidad3 = prompt("Cuántos pasajes desea?");
        alert("Has comprado para viajar a " + pasaje3.nombre + " por " + "$ " + cantidad3 * pasaje3.calcularPrecio() + ".-" + "\nEl valor incluye IVA, impuestos y tasas");
        totalcompra = totalcompra + cantidad3 * pasaje3.calcularPrecio()
        break;
      default:
        alert("No has seleccionado ningun pasaje");
        break;
    }


  }
  alert("El total de su compra es de " + "$ " + totalcompra + ".-" + "\nEl valor incluye IVA, impuestos y tasas \n\nMuchas gracias por su compra.");
}

comprarPasaje();

// Arrays de vuelos internacionales
const vuelosInternacionales = [
  {  region: "Sudamerica", pais: "Brasil", precio: 130000 },
  {  region: "Sudamerica", pais: "Uruguay", precio:120000 },
  {  region: "Sudamerica", pais: "Colombia", precio: 140000},
  {  region: "Norteamerica", pais: "Estados Unidos", precio: 270000 },
  {  region: "Norteamerica", pais: "Mejico", precio:240000 },
  {  region: "Norteamerica", pais: "Canada", precio:240000 },
  {  region: "Centroamerica", pais: "Costa Rica", precio: 200000},
  {  region: "Centroamerica", pais: "Panama", precio: 190000 },
  {  region: "Centroamerica", pais: "Belice", precio: 250000},
];

// Metodo de filtrado - Filter

const destino = vuelosInternacionales.filter( destino => destino.pais.includes("Cost")); // Costa Rica
 
console.log(destino);


// Metodo de busqueda - Find

const busqueda = vuelosInternacionales.find((el) => el.pais === "Brasil") // encontrado
const busqueda2 = vuelosInternacionales.find((el) => el.pais === "Angola") // sin definir

console.log(busqueda) 
console.log(busqueda2) 

// Metodo de modificacion - Map

const pais = vuelosInternacionales.map((seguro) => seguro.pais) // Agregar el costo de seguro a los paises de destino
console.log(pais)

 const seguroCovid = vuelosInternacionales.map((seguro) => {
  return {
      pais: seguro.pais,
      precio: seguro.precio *1.05
  }
})

console.log(seguroCovid)

// Sentencia - For..of

for (const vueloDisponible of vuelosInternacionales) {
  console.log("Vuelo disponible: " + "\nRegion: " + vueloDisponible.region + " - " + "Pais: " + vueloDisponible.pais + " - " + "Precio: " + vueloDisponible.precio);
}

