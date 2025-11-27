enum LogLevel {
  Info,
  Warning,
  Error,
}

/* 
Esta función recibe los niveles del enum, como realizamos un console.log no es necesario poner un return
ni tampoco poner algún de valor fuera de los (), porque sino es como decir que vamos a retornar algo 
y como  nunca se retorna, se rompe
*/

function logMessage(level:LogLevel, message: string){
  console.log(`${level} ${message}`)
}

logMessage(LogLevel.Info, "<- Este número indica el indice del objeto que viene de Enum, por ende el siguiente será 1")

