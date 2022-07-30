let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar-producto");
let calcular = document.getElementById("btn-calcular-total");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

// funciones
// primero agrego los productos y salen en la lista
const agregaralCarrito = () => {
  // metodo push
  productos.push(producto.value);
  precios.push(precio.value);

  lista?.innerHTML += `<li> ${producto.value} : $${precio.value} </li>`;

  producto.value = "";
  precio.value = "";
};

// segunda ir sumando los valores de la lista
const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = ` $ ${suma}`;
};

const vaciarCarrito = () => {
  lista?.innerHTML = "";
  total?.innerHTML = "";
};

agregar?.addEventListener("click", agregaralCarrito);
calcular?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarCarrito);
