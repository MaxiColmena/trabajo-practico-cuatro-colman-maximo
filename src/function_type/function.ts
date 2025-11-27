//Las funciones reciben argumentos que su tipo es declarado en los (), a esa función
function updateStock(currentStock:number, quantityChange:number):number{
  return currentStock + quantityChange;
}

//Cuando llamamos a la funcion asignando los parametros y realizando operaciones
const result = updateStock( 100, 50 );

console.log(result);