# Carpeta de Practicas JavaScript - DOM 3.0

Este repositorio contiene ejercicios avanzados de JavaScript enfocados en **manipulación del DOM**, interacción con el usuario y funciones dinámicas. Todos los ejercicios se ejecutan en el archivo `index.html`.

---

## 📝 Ejercicios

### **Ejercicio 1: Hipervínculo con alerta**
- Muestra un `alert` al pasar el ratón sobre un enlace.
- Permite practicar eventos de mouse y alertas.

---

### **Ejercicio 2: Validación de DNI**
- Valida que el DNI introducido tenga **exactamente 9 caracteres**.
- Función:
  - `validarDNI()` → Comprueba la longitud del DNI y muestra un `alert` de confirmación o error.

---

### **Ejercicio 3: Marcador de puntos**
- Permite **sumar, restar o reiniciar** un marcador de puntos.
- Función:
  - `cambiarMarcador(value)` → Dependiendo del valor del botón:
    - `+10` → Suma 10 puntos.
    - `0` → Reinicia a 0.
    - `-10` → Resta 10 puntos.

---

### **Ejercicio 4: Adivina el número aleatorio**
- Genera un número aleatorio entre 0 y 10.
- Permite al usuario ingresar un número e indica si acertó o no.
- Función:
  - `enviarNumero()` → Compara el número ingresado con el número aleatorio, cambia el color del marcador y muestra un mensaje.

---

### **Ejercicio 5: Abrir una nueva ventana tras temporizador**
- Muestra un cajón desplegable que se abre al hacer clic en una imagen.
- Inicia un **contador regresivo de 10 segundos** y abre una nueva ventana al finalizar.
- Funciones:
  - `abrirCerrar()` → Alterna la apertura/cierre del cajón y la rotación de la imagen.
  - `setCounter()` → Ejecuta el contador regresivo y abre la ventana automáticamente.

---

### **Ejercicio 6: Playground con `eval()` ⚠️**
- Permite ejecutar código JavaScript ingresado por el usuario.
- **Advertencia:** `eval()` puede ser peligroso si se usa con código externo no controlado.
- Función:
  - `runCode()` → Ejecuta el código introducido en el textarea y muestra el resultado o error en pantalla.

---

## ⚡ Tecnologías y conceptos utilizados
- JavaScript puro (ES6+)
- Manipulación del **DOM** (`getElementById`, `getElementsByClassName`, `innerText`, `style`)
- Eventos (`onclick`, `onMouseOver`)
- Funciones de temporización (`setInterval`, `clearInterval`)
- Uso de `eval()` para ejecutar código dinámico (con precaución)
- Generación de números aleatorios (`Math.random()`)

---

## 💡 Notas
- Cada ejercicio está diseñado para ejecutarse en un navegador moderno.
- Algunos ejercicios muestran alertas, temporizadores o resultados interactivos.
- Se recomienda **no usar `eval()` con código desconocido** por motivos de seguridad.
- Los ejercicios combinan DOM, eventos, estilos dinámicos y manipulación de elementos interactivos.

---