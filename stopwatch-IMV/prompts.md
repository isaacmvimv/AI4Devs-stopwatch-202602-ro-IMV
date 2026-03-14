<small>Nota: Proyecto generado desde ChatGPT</small>

<h2>Prompt 1️⃣ + Stopwatch.png: Generar proyecto</h2>

<p>
Actúa como un Ingeniero de Software senior especializado en desarrollo web frontend que siempre busca la seguridad, simplicidad y alto rendimiento de sus aplicaciones.
Genera la aplicación detallada a continuación y entrega los ficheros "index.html", "styles.css" y "script.js" necesarios para su ejecución.

## 1. Contexto del proyecto

Crear una pequeña aplicación web, con lógica en JavaScript, del tipo StopWatch que permita iniciar un contador, mostrarlo, pausarlo, detenerlo y ponerlo a cero.



## 2. Requerimientos funcionales

La aplicación debe ser lo más parecida posible a la imagen adjunta.

Debe incluir las siguientes funcionalidades:

Panel de contador de tiempo: Muestra el tiempo transcurrido en tiempo real en formato hh:mi:ss ms. Inicialmente su valor es 00:00:01 000.
- Start: Al pulsarlo se inicia el cronómetro desde cero mostrando el tiempo transcurrido en el panel contador de tiempo. Mientras el contador está en progreso, el botón Start se substituye por el de "Pause".
- Pause: Pausa el cronómetro y congela el panel contador de tiempo. Una vez pulsado el botón se substituye por el botón "Continue".
- Continue: Al pulsarlo retoma del contador de tiempo donde se había detenido y continua contando el tiempo. También se substituye de nuevo por el botón "Pause".
- Clear: Botón que reinicia el contador a cero (00:00:00 000) y devuelve el StopWatch a su estado inicial.



## 3. Interfaz de usuario (UI)

- La aplicación debe ser lo más parecida posible a la imagen adjunta.

- El cronómetro se mostrará con este formato de tiempo:

	HH: Hours (00-99)
	MM: Minutes (00-59)
	SS: Seconds (00-59)
	MS: Milliseconds (000-999)

- Debe respetar los tipos de fuente y dimensiones representados en la imagen adjunta.

- La aplicación se debe de mostrar centrada en la pantalla.
- En fondo debe de ser blanco.
- Panel de contador con fondo Gris claro.
- Botón Start con un fondo Azul oscuro.
- Botón Pause con un fondo Verde.
- Botón Continue con un fondo Azul oscuro.
- Botón Clear con un fondo Rojo.
- Todos los botones deben tener un borde de tamaño medio de color Gris oscuro.



## 4. Requisitos técnicos

Tecnologías obligatorias:
- HTML5 Vanilla
- CSS3
- JavaScript (sin frameworks)

Estructura del proyecto:
- index.html
- styles.css
- script.js

Buenas prácticas requeridas:
- Código eficiente, modular y legible
- Comentarios en funciones importantes
- Separación clara entre HTML, CSS y JS
- Diseño Responsive
- Seguir los principios SOLID
- Manejo básico de errores
- Variables y funciones con nombres descriptivos
- Asegurarque que la aplicación es Cross-Browser Compatibility
</p>


<h2>Prompt 2️⃣: Generar documentación .md</h2>
<p>
Ahora genérame un fichero único de documentación del proyecto Stopwatch en formato md (MarkDown) correctamente formateado y que se llame readme.md.
El fichero debe de ser conciso y resumir la infraestructura, tecnología, funcionalidad, etc sin añadir nada que no se deduzca del código.
</p>


<h2>Prompt 3️⃣: Generar diagramas</h2>
<p>
Perfecto, me puedes generar ahora un diagrama mermaid en formato markdown de este proyecto?
</p>


<h2>Prompt 4️⃣: Generar tests unitarios</h2>
<p>
Quiero que elabores un plan de tests unitarios para comprobar que todas las funcionalidades de la aplicación StopWatch funcionan correctamente. Los tests deben de estar encapsulados en un fichero .js distinto llamado "unit-tests.js" y se deben de poder ejecutar en un flujo distinto al de la aplicación. Cada vez que se ejecuten los tests se deben de recoger los resultados, junto con la hora de su ejecución y mostrarlos en un fichero con formato markdown indicando el nombre de cada uno de los tests, la hora y su estado en color rojo si ha fallado o verde si ha sido satisfactorio.
</p>
