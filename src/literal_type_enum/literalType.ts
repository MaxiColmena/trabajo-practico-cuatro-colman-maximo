//toma a la constante con uno de los 3 valores que le pasamos con la doble barra ||
type OrderStatus =  "pending" | "shipped" | "delivered"

//asignación de valor ya que la constante oderStatus con minuscula toma el type OrderStatus con mayuscula
const orderStatus: OrderStatus = "pending"

console.log(orderStatus)