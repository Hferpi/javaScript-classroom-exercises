# 🌍 **Ejercicios del BOM — Manipulación del Navegador, Ventanas y Pantalla**

Este proyecto contiene varios ejercicios prácticos diseñados para comprender a fondo el **BOM (Browser Object Model)** usando JavaScript: redimensionar ventanas, moverse entre páginas, obtener información del navegador y consultar las propiedades de la pantalla.

Cada ejercicio está separado y enfocado en una parte distinta del BOM.

---

## 📂 **Contenido del proyecto**
- **Ejercicio 1:** Control de ventana (mover, redimensionar, cerrar).  
- **Ejercicio 2:** Navegación entre páginas con `history.back()` y `history.forward()`.  
- **Ejercicio 3:** Información del navegador (user agent, sistema, idioma...).  
- **Ejercicio 4:** Información sobre la pantalla del usuario (ancho, alto, profundidad de color).

---

# 🧪 **Ejercicio 1 — Manipulación de Ventanas**

![Demo](../readme-sources/ventana-trol.gif)

Este script actúa como "trol":  
- Al cargar la página, automáticamente ejecuta 3 acciones programadas:  
  - 🔵 A los **2s** → **redimensiona la ventana** a 600x600px y cambia el color de fondo.  
  - 🟠 A los **5s** → **mueve la ventana** 300px hacia la derecha y abajo.  
  - ❌ A los **10s** → muestra un **alert** y **cierra la ventana**.

**Conceptos aplicados:**  
- `window.onload`  
- `setTimeout()`  
- `window.resizeTo()`  
- `window.moveBy()`  
- `window.close()`  
- Modificación del DOM con `document.getElementsByTagName()`  

---

# 🧭 **Ejercicio 2 — Navegación entre páginas usando `history`**

![Demo](../readme-sources/ventana-adelante-atras.gif)

Se trata de una pequeña **mini-web** con varias páginas enlazadas entre sí (index → página 1 → 2 → 3 → 4).

Cada página incluye:

- Botón **←** para ir atrás: `history.back()`  
- Botón **→** para ir adelante: `history.forward()`  
- Botón **NEXT PAGE** para avanzar manualmente  
- Diseño consistente gracias a `style.css`  
- Una página final con animación, audio y botón deshabilitado

**Objetivo:** aprender cómo funciona el historial del navegador y navegar entre páginas sin recargar desde cero.

**Conceptos aplicados:**  
- `history.back()`  
- `history.forward()`  
- `location.href`  
- Estructura HTML multi-página  
- Uso básico de imágenes y audio  

---

# 🖥️ **Ejercicio 3 — Información del Navegador**

Este ejercicio obtiene datos en tiempo real del navegador:

- 🧭 **Nombre y detalles del navegador** (`navigator.userAgent`)  
- 💻 **Sistema operativo** (`navigator.platform`)  
- 🌐 **Idioma configurado** (`navigator.language`)  
- 📶 **Estado online/offline** (`navigator.onLine`)  

Además, según si el usuario está online, cambia un elemento a clase `"on"` o `"off"`.

**Conceptos aplicados:**  
- Objeto `navigator`  
- `innerText`  
- `setAttribute()`  
- Validaciones rápidas con operador ternario  

---

# 🖼️ **Ejercicio 4 — Información de la Pantalla**

Obtiene automáticamente:

- 📏 Ancho de pantalla → `screen.width`  
- 📐 Alto de pantalla → `screen.height`  
- 🎨 Profundidad de color → `screen.colorDepth`  

Los datos se muestran al cargar la página usando `window.addEventListener("load")`.

**Conceptos aplicados:**  
- Objeto `screen`  
- `innerText`  
- Eventos del navegador (`load`)  

---

## 🛠️ **Tecnologías usadas**
- **JavaScript Vanilla**
- **HTML5**
- **CSS básico**
- Interacción con:
  - `window`  
  - `navigator`  
  - `screen`  
  - `history`  
  - `location`  

---

## 🚀 **Cómo ejecutar cada ejercicio**
1. Coloca los archivos HTML y JS en la misma carpeta.  
2. Abre cada HTML en tu navegador.  
3. Interactúa con los botones y observa el comportamiento de la ventana o la información mostrada.  

---

## 🎯 **Objetivo del proyecto**
Aprender de manera práctica cómo funcionan las APIs del **BOM**, entendiendo cómo el navegador expone información y cómo podemos manipular ventanas, historial y propiedades del sistema desde JavaScript.

---

