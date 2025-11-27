# Trabajo Práctico Cuatro - Tipos en TypeScript

Descripción breve
-----------------

Este repositorio contiene ejemplos y ejercicios prácticos sobre tipos en TypeScript. Los archivos de ejemplo están organizados en la carpeta `src/` y cubren temas como tipos básicos, tipos fundamentales y unión, tipos de función y tipos literales/enums.

Requisitos
----------

- Node.js (recomendado >= 18)
- npm (incluido con Node.js)
- Git (para clonar el repositorio)

Instalación
----------

1. Clonar el repositorio:

```powershell
git clone https://github.com/MaxiColmena/trabajo-practico-cuatro-colman-maximo.git
cd trabajo-practico-cuatro-colman-maximo
```

2. Instalar dependencias:

```powershell
npm install
```

Uso y ejecución
---------------

Este proyecto incluye scripts npm para ejecutar ejemplos directamente con `tsx`, compilar con `tsc` y ejecutar la versión compilada.

- Ejecutar ejemplos (ejecuta TypeScript directamente usando `tsx`):

```powershell
npm run basic_type       # ejecuta src/basic_type/basic.ts
npm run basic_type2      # ejecuta src/basic_type/fundamental.ts
npm run basic_type3      # ejecuta src/basic_type/union.ts
npm run function_type    # ejecuta src/function_type/function.ts
npm run literal          # ejecuta src/literal_type_enum/enum.ts
npm run literal2         # ejecuta src/literal_type_enum/literalType.ts
```

- Modo desarrollo (watch) — si existe `src/app.ts`:

```powershell
npm run dev
```

- Compilar a JavaScript con TypeScript:

```powershell
npm run build
```

- Ejecutar la build compilada (si existe `dist/app.js`):

```powershell
npm start
```

Estructura del repositorio
---------------------------

- `src/basic_type/`
	- `basic.ts` — ejemplos de tipos básicos en TypeScript (string, number, boolean, etc.)
	- `fundamental.ts` — ejemplos de tipos fundamentales y su uso
	- `union.ts` — ejemplos de tipos unión y cómo usarlos

- `src/function_type/`
	- `function.ts` — ejemplos de tipos para funciones, parámetros y valores de retorno

- `src/literal_type_enum/`
	- `enum.ts` — ejemplos usando `enum` en TypeScript
	- `literalType.ts` — ejemplos de tipos literales y discriminación de tipos

Actividades realizadas
----------------------

En este trabajo práctico se implementaron y documentaron los siguientes ejercicios:

- Exploración de tipos primitivos y cómo declararlos en TypeScript.
- Uso de tipos unión para permitir múltiples tipos en una variable/parametro.
- Definición de tipos para funciones: firmas, parámetros opcionales y retorno tipado.
- Uso y ejemplos de `enum` y tipos literales para modelar conjuntos de valores permitidos.

Consejos y notas
----------------

- Si quiere ejecutar los ejemplos sin instalar dependencias globales, los scripts usan `tsx` (devDependency). Tras ejecutar `npm install` los scripts funcionarán.
- Para añadir un nuevo ejemplo, cree un archivo `.ts` dentro de `src/`, y agregue un `script` en `package.json` o ejecútelo directamente con `npx tsx src/ruta/archivo.ts`.

Problemas y reportes
-------------------

Si encuentra errores o quiere sugerir mejoras abra un issue en:

https://github.com/MaxiColmena/trabajo-practico-cuatro-colman-maximo/issues

Licencia
--------

Este repositorio no especifica una licencia en los archivos; revise `package.json` para más detalles o pregunte al autor si necesita usar el código en un proyecto externo.

