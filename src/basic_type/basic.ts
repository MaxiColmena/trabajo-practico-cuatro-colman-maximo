//esta interfas no es transpilada a JavaScript 
interface Product {
  name: string;
  price: number;
}

// Aquí declaramos una constante que que tiene como valor el interfaz de Product
// Respetando los valores que le asignamos en el interfaz de string y number
const myProduct: Product = {
  name: "Motocicleta Zanella ZB 110",
  price: 1000000
}

console.log(myProduct)