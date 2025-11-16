# Carpeta de Practicas JavaScript - DOM 2.0

Este repositorio contiene ejercicios prácticos de JavaScript enfocados en la **manipulación del DOM**, creación de elementos dinámicos, listas, colores y conteo de imágenes. Todos los ejercicios se ejecutan en el mismo archivo `index.html`.

---

## 📝 Ejercicios

### **Ejercicio 1: Manipulación de párrafos**
- Permite añadir, insertar, reemplazar y eliminar párrafos dentro de un `<div>` específico.
- También permite clonar todo el contenedor con sus párrafos.
- Funciones principales:
  - `addP()` → Añade un párrafo al final.
  - `insetP()` → Inserta un párrafo en la segunda posición.
  - `replaceP()` → Reemplaza el segundo párrafo.
  - `deletP()` → Elimina el segundo párrafo.
  - `cloneDiv()` → Clona el `<div>` completo con sus párrafos.

---

### **Ejercicio 2: Manipulación de listas**
- Permite añadir, insertar, reemplazar y eliminar elementos (`<li>`) en una lista.
- También se puede clonar la lista y crear sublistas dinámicas.
- Funciones principales:
  - `addList()` → Añade un elemento aleatorio al final de la lista.
  - `insertList()` → Inserta un elemento aleatorio antes del primer elemento.
  - `replaceList()` → Reemplaza el primer elemento de la lista.
  - `deletList()` → Elimina el primer elemento de la lista.
  - `cloneList()` → Clona la lista completa.
  - `createSublistDOM()` → Crea una sublista usando DOM puro dentro del primer elemento.
  - `createSublistinner()` → Crea una sublista usando `innerHTML`.

---

### **Ejercicio 3: Cambiar color de fondo**
- Permite al usuario seleccionar un color con un `<input type="color">` y aplicarlo a un div (`.cuadrado`).
- Función:
  - `changeColour()` → Cambia el color de fondo del div según la selección.

---

### **Ejercicio 4: Contar imágenes**
- Cuenta el número total de imágenes (`<img>`) presentes en la página y muestra el resultado en un `alert`.
- Función:
  - `countNumberImg()` → Devuelve la cantidad de imágenes en la página.

---

## ⚡ Tecnologías y conceptos utilizados
- JavaScript puro (ES6+)
- Manipulación del **DOM**:
  - Crear, insertar, reemplazar y eliminar elementos (`createElement`, `appendChild`, `insertBefore`, `replaceChild`, `remove`)
  - Acceso a elementos por `id`, `class` y `tagName`
- Eventos en botones (`onclick`)
- Generación de números aleatorios (`Math.random()`)
- Uso de `innerText` y `textContent` para contenido dinámico
- Manejo de estilos dinámicos (`style.backgroundColor`)

---


## 💡 Notas
- Cada ejercicio está diseñado para ejecutarse en un navegador moderno.
- Los botones permiten probar cada función de manera interactiva.
- Se recomienda abrir la consola del navegador para ver posibles mensajes de error o alertas.

---
