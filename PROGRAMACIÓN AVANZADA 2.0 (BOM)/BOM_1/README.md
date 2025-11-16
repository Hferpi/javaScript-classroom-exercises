# 🌐 **Ejercicios del BOM (Browser Object Model)**

Este proyecto reúne varios ejercicios prácticos sobre el **BOM de JavaScript**, explorando cómo interactuar con el navegador, modificar el DOM en tiempo real, gestionar colores, mostrar información de la página y abrir nuevas ventanas.

Incluye un archivo HTML y un script JS que controlan cada ejercicio visualmente.

---

## 📚 **Contenido de los Ejercicios**

---

### 📅 **1. _Mostrar la fecha actual_**
Al pulsar un botón, se muestra la fecha formateada como:

**“Lunes, 22 de Abril del 2024”**

**Conceptos:**  
- `Date()`  
- `getDate()`, `getDay()`, `getMonth()`, `getFullYear()`  
- Manipulación de `innerText`  
- Control mediante un flag (`isVisible`)  

---

### ⏰ **2. _Mostrar y actualizar la hora con saludo_**
Un botón activa o desactiva la hora en pantalla.  
Cada segundo se actualiza automáticamente gracias a `setInterval`.

Incluye mensajes dinámicos:  
- *Buenos días*  
- *Buenas tardes*  
- *Buenas noches*

**Conceptos:**  
- `setInterval()`  
- `getHours()`, `getMinutes()`, `getSeconds()`  
- Toggle de visibilidad  
- Funciones que retornan cadenas  

---

### 🎨 **3. _Cambiar el color del fondo de la página_**
Tres botones cambian el color del fondo (azul, rojo o verde).  
También hay un botón **RESTART** para restaurar el fondo original.

**Conceptos:**  
- Propiedades del documento: `document.bgColor` y `document.fgColor`  
- Manejo de eventos onclick  
- Control del DOM mediante atributos HTML  

---

### 📄 **4. _Mostrar información de la página actual_**
Se muestran automáticamente:  
- URL del documento  
- Pathname  
- Protocolo utilizado  

Estos datos aparecen al cargar la página con `window.onload`.

**Conceptos:**  
- Objeto `location`  
- `location.href`  
- `location.pathname`  
- `location.protocol`  

---

### 🔗 **5. _Abrir nuevas ventanas o pestañas_**
Dos botones permiten:  
- Abrir Google  
- Abrir una página secreta (`web_secreta.html`)

**Conceptos:**  
- `window.open()`  
- Interacción directa con el navegador  

---

## 🛠️ **Tecnologías utilizadas**
- **JavaScript Vanilla**
- **BOM (Browser Object Model)**
- Manipulación básica del DOM
- HTML para la estructura visual
- Eventos de usuario (`onclick`)

---

## 🚀 **Cómo ejecutarlo**
1. Abre el archivo `index.html` o `pagina_bom.html` (dependiendo del nombre que uses).  
2. Asegúrate de que el archivo `script2.js` esté en la misma carpeta.  
3. Abre el archivo en tu navegador.  
4. Interactúa con los botones para probar cada ejercicio.  

---

## 🎯 **Objetivo**
Este conjunto de ejercicios tiene como finalidad aprender y practicar cómo funciona el **BOM**, manejando propiedades del navegador, respondiendo a eventos y modificando el contenido dinámicamente.

---

