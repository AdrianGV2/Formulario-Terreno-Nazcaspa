# PWA - Acceso al Formulario Interno

App instalable (frontend puro, sin backend ni base de datos) que abre tu
Microsoft Form. El inicio de sesión NO lo maneja esta app: lo maneja
Microsoft directamente cuando el formulario está configurado como
"Solo personas de mi organización pueden responder". Por eso no tuviste
control real sobre el login en tu intento anterior con Netlify — ese login
es 100% de Microsoft, la app solo necesita llevar al usuario ahí.

## 1. Configura tu formulario (una sola vez)

En Microsoft Forms:
1. Abre tu formulario → botón "Compartir".
2. En "¿Quién puede responder este formulario?" elige
   **"Solo la gente de mi organización puede responder"**.
3. Copia el link que te da ahí (algo como `https://forms.office.com/r/XXXXXXX`).

Con esa opción activada, cualquiera que abra el link deberá iniciar sesión
con su cuenta de Microsoft/Office 365 de la empresa antes de ver el
formulario. Eso es exactamente el "login para personal autorizado" que
buscabas.

## 2. Configura la app (edita 1 archivo)

Abre `index.html` y cambia estas 3 líneas al principio del archivo:

```js
window.APP_CONFIG = {
  FORM_URL: "https://forms.office.com/r/TU-CODIGO-AQUI", // tu link real
  COMPANY_NAME: "Tu Empresa",
  APP_TITLE: "Formulario Interno"
};
```

No necesitas tocar ningún otro archivo.

(Opcional) Si quieres tu propio logo en vez del ícono genérico que viene
incluido, reemplaza `icons/icon-192.png`, `icons/icon-512.png` y
`icons/apple-touch-icon.png` por tus propias imágenes cuadradas
(192x192, 512x512 y 180x180 px respectivamente, mismo nombre de archivo).

## 3. Publica la app

Sirve gratis en Netlify, igual que antes:
1. Arrastra la carpeta completa a Netlify (Sites → "Add new site" →
   "Deploy manually").
2. Netlify te da una URL con HTTPS automático (obligatorio para que la
   app sea instalable).

También funciona igual en GitHub Pages, Vercel, o cualquier hosting
estático — no requiere servidor ni configuración especial, es HTML/CSS/JS
plano.

## 4. Instalar en el teléfono

- **Android (Chrome):** abrir la URL → menú (⋮) → "Instalar app" o
  "Agregar a pantalla de inicio".
- **iPhone (Safari):** abrir la URL → botón compartir (□↑) →
  "Agregar a pantalla de inicio".

Una vez instalada, el ícono queda en el teléfono como una app normal.
Al abrirla, el usuario ve la pantalla de bienvenida y toca
"Iniciar sesión y abrir formulario", lo que lo lleva directo al login de
Microsoft y luego al formulario — ya no hay un link que se pueda perder
o reenviar fuera de la empresa, porque vive dentro de la app instalada.

## Por qué no se usa un iframe

Microsoft bloquea que sus páginas de login/formularios se carguen dentro
de un iframe (por seguridad). Por eso esta app no "embebe" el formulario:
en su lugar, navega de página completa hacia forms.office.com dentro de
la misma ventana de la app instalada. El resultado visual para el
usuario es idéntico a tener el formulario "dentro" de la app.

## Estructura de archivos

```
index.html          → pantalla de inicio + configuración (FORM_URL aquí)
manifest.json        → metadata de instalación (nombre, ícono, colores)
service-worker.js    → hace la app instalable / disponible sin conexión
icons/                → íconos de la app (puedes reemplazarlos)
```
