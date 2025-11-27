# Investigación hecha con el profesor Montellano y Britos
# Glosario — Funcionalidades usadas en el proyecto

Este documento explica de forma concisa las funcionalidades y conceptos de TypeScript y herramientas que se utilizaron en este repositorio.

## Interface
- Definición: Una `interface` en TypeScript define la forma (propiedades y tipos) de un objeto. No se transpila a JavaScript; sirve para verificación estática en tiempo de compilación.
- Uso: Permite declarar contratos para objetos y ayuda a mantener código tipado y legible.
- Ejemplo:

```ts
interface Product {
  name: string;
  price: number;
}

const myProduct: Product = { name: "Motocicleta", price: 100000 };
```

## Enum
- Definición: `enum` es una forma de definir un conjunto de constantes con nombre. Puede usarse para representar estados o valores limitados.
- Uso: Facilita la lectura y evita errores por usar cadenas mágicas o números sin contexto.
- Ejemplo:

```ts
enum Color {
  Red,
  Green,
  Blue
}

const c: Color = Color.Green;
```

## Tipo literal
- Definición: Son tipos que aceptan valores literales específicos (por ejemplo, `'open' | 'closed'`).
- Uso: Sirven para modelar valores permitidos y mejorar la discriminación de tipos.
- Ejemplo:

```ts
type State = 'pending' | 'complete' | 'error';
const s: State = 'pending';
```

## Tipo unión
- Definición: Una unión (`A | B`) permite que una variable tenga uno de varios tipos.
- Uso: Útil cuando una función o variable puede aceptar distintos tipos.
- Ejemplo:

```ts
function format(input: string | number) {
  return String(input);
}
```

## Tipos primitivos
- `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- Uso: Base para tipado de variables y parámetros.

## Tipos de función (Function Types)
- Definición: Se tipan la firma (parámetros y tipo de retorno) de las funciones para mayor seguridad.
- Ejemplo:

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

## `console.log`
- Uso: Función de debugging para mostrar valores en la consola. Muy usada en los ejemplos para ver resultados.

## Herramientas y scripts
- `tsx`:
  - Es una herramienta (devDependency) que permite ejecutar archivos TypeScript directamente sin compilación previa.
  - En este repo se usa en los scripts del `package.json` para ejecutar ejemplos con `npm run <script>`.
- `tsc` (TypeScript Compiler):
  - Compila `.ts` a `.js` según `tsconfig.json`. Se usa para generar una carpeta `dist/` con la build.
- `npm scripts`:
  - En `package.json` hay scripts que ejecutan ejemplos (`basic_type`, `function_type`, etc.), el modo `dev` (watch), `build` y `start`.

## Buenas prácticas observadas
- Tipar las estructuras de datos con `interface` o `type` para detectar errores temprano.
- Usar `enum` o tipos literales para conjuntos finitos de valores en lugar de cadenas sueltas.
- Mantener ejemplos pequeños y con `console.log` para demostrar comportamiento.

## Dónde añadir más entradas
Si deseas que incluya ejemplos adicionales o una sección sobre `generics`, `types` vs `interfaces`, o sobre el `tsconfig.json` del proyecto, dímelo y lo agrego.
# Investigación del proyecto con el profesor Montellano y el profesor Britos