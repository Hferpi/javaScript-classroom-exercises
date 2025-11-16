# Carpeta de Practicas JavaScript - DOM y Eventos

Este repositorio contiene varios ejercicios prácticos en JavaScript orientados a la manipulación del DOM, eventos y elementos interactivos en una página web.

---

## 📝 Ejercicios

### **Ej_1: Barra de progreso**
- Incrementa el valor de una barra de progreso (`<progress>`) de 0 a 100 automáticamente.
- Función `restartProgresBar()` permite reiniciar la barra y volver a comenzar la animación.

---

### **Ej_2: Cambiar título aleatorio**
- Cambia el contenido de un título (`<h1>` o `<span>`) con un mensaje aleatorio de un array de saludos.
- Función: `changeTitle()`.

---

### **Ej_3: Cambiar color del título**
- Permite modificar el color del texto de un título según la selección del usuario en un input color.
- Función: `changeTitleColour()`.

---

### **Ej_4: Crear divs dinámicamente**
- Genera nuevos `<div>` con un emoji 🎃 al hacer clic en un botón.
- Actualiza el contador de divs creados en pantalla.
- Funciones: `createNewDiv()` y `actualizarNumero(operacion)`.

---

### **Ej_5: Eliminar divs**
- Elimina el último `<div>` creado dinámicamente.
- Actualiza el contador de divs.
- Función: `removeDiv()`.

---

### **Ej_6: Pie de foto dinámico**
- Muestra o esconde la descripción (`alt`) de una imagen dentro de un `<figure>` al interactuar con ella.
- Función: `ponerPiedeFoto(figure)`.

---

### **Ej_7: Mostrar fuentes de imágenes**
- Extrae la URL de las primeras tres imágenes de la página y las muestra en párrafos debajo de un contenedor.
- Desactiva el botón después de ejecutar.
- Función: `cargarFuentes(boton)`.

---

### **Ej_8: Cambiar clase aleatoria del título**
- Aplica una clase CSS aleatoria a un título para cambiar estilo: cursiva, subrayado, mayúsculas o fuente Franklin.
- Hace scroll al inicio de la página.
- Función: `cambiarClasse()`.

---

### **Ej_9: Añadir texto debajo del título**
- Inserta dinámicamente un `<div>` con texto "Página web." debajo del título principal.
- Función: `anadirDebajoTitulo()`.

---

### **Ej_10: Ocultar/Mostrar botones**
- Alterna la visibilidad de todos los botones de la página (excepto el que activa la acción).
- Cambia el texto del botón entre "Ocultar" y "Mostrar".
- Función: `esconderMostrarBotones(boton)`.

---

## ⚡ Tecnologías y conceptos utilizados
- JavaScript puro (ES6+)
- Manipulación del **DOM** (`document.createElement`, `appendChild`, `getElementById`, `getElementsByTagName`)
- Eventos (`onclick`, `window.onload`)
- Control de estilos dinámicos y clases (`setAttribute`, `style`)
- Funciones de temporización (`setTimeout`)
- Randomización (`Math.random()`)

---


## 💡 Notas
- Cada ejercicio está diseñado para ejecutarse en un navegador moderno.
- Los botones permiten probar cada función de manera interactiva.
- Se recomienda abrir la consola del navegador para ver posibles mensajes de error o alertas.

---

