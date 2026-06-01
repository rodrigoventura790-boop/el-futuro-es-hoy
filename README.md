# El Futuro es Hoy

Landing page estatica para la consultoria y coaching de salud integral de Javier Pimentel. La web esta pensada para GitHub Pages y comunica habitos sostenibles, longevidad preventiva, suplementacion responsable y acompanamiento educativo sin promesas medicas.

## Requisitos

- Un navegador moderno.
- Opcional: Node.js si quieres usar `npm run dev` con Vite.
- No hay dependencias nuevas para la landing estatica.

## Como verla localmente

Opcion simple desde la carpeta del proyecto:

```bash
python -m http.server 8080
```

Abre `http://localhost:8080`.

Tambien puedes usar el servidor existente de Vite:

```bash
npm run dev
```

Abre la URL que imprima la terminal, normalmente `http://127.0.0.1:5173`.

## Como publicarla en GitHub Pages

1. Sube estos archivos al repositorio: `index.html`, `styles.css`, `script.js`, `assets/`, `README.md` y `OPEN_DESIGN_AUDIT.md`.
2. En GitHub, entra a `Settings -> Pages`.
3. En `Build and deployment`, elige `Deploy from a branch`.
4. Selecciona la rama principal y la carpeta `/root`.
5. Guarda y espera a que GitHub genere la URL.

Si prefieres publicar desde `dist`, ejecuta:

```bash
npm run build
```

Luego copia los assets estaticos que no procesa Vite y configura GitHub Pages para servir el resultado de build:

```bash
Copy-Item -Path assets\* -Destination dist\assets -Recurse -Force
```

## Como cambiar WhatsApp

Busca `https://wa.me/000000000000` en `index.html` y reemplaza los ceros por el numero real en formato internacional, sin espacios ni signos. Ejemplo:

```html
https://wa.me/5215555555555
```

## Como cambiar correo

Busca `hola@elfuturoeshoy.com` en `index.html` y reemplazalo por el correo real de contacto.

## Como cambiar precios

En `index.html`, busca la seccion `Programas` y edita los textos:

- `Desde $49`
- `Desde $299`
- `A consultar`

## Como cambiar la imagen de Javier

Coloca la foto real en:

```text
assets/javier-pimentel.jpg
```

La pagina ya referencia esa ruta. En esta entrega se uso la imagen encontrada en `out/jpg/javier Pimentel.png` y se genero una version optimizada como `assets/javier-pimentel.jpg`. Si el archivo se elimina, la pagina usa `assets/javier-placeholder.svg` como respaldo.

## Como conectar pagos

La web es estatica, asi que la forma mas segura para GitHub Pages es usar enlaces externos de pago:

- Stripe Payment Links para `Evaluacion Inicial` y `Programa Futuro 360`.
- PayPal Checkout si quieres aceptar pagos internacionales.
- Transferencia o contacto manual para la mentoría premium.

En `index.html`, busca los botones con `data-checkout-url` y reemplaza estos placeholders:

```html
data-checkout-url="https://buy.stripe.com/tu-link-evaluacion"
data-checkout-url="https://buy.stripe.com/tu-link-futuro-360"
```

Cuando el usuario hace clic, se abre un modal de confirmacion y luego el enlace externo de pago.

## Como conectar Formspree

1. Crea un formulario en Formspree.
2. Copia el endpoint que te da Formspree.
3. En `index.html`, busca:

```html
action="https://formspree.io/f/tu-id"
```

4. Sustituyelo por tu endpoint real.

## Como reemplazar testimonios placeholder

La seccion `Lo que las personas valoran del proceso` usa comentarios placeholder eticos. Antes de publicar, reemplazalos por testimonios reales y autorizados. Mantenerlos como placeholder esta marcado en un comentario HTML dentro de `index.html`.

Recomendacion:

- Usa testimonios breves y verificables.
- Evita nombres completos si no hay autorizacion explicita.
- No incluyas promesas medicas ni resultados garantizados.

## Checklist antes de publicar

- [ ] Revisar o reemplazar `assets/javier-pimentel.jpg` si quieres otra foto.
- [ ] Cambiar WhatsApp.
- [ ] Cambiar correo.
- [ ] Cambiar Instagram.
- [ ] Cambiar endpoint de Formspree.
- [ ] Cambiar enlaces de Stripe, PayPal o transferencia.
- [ ] Revisar precios.
- [ ] Reemplazar testimonios placeholder por reales o mantenerlos ocultos.
- [ ] Actualizar `canonical` y Open Graph si ya tienes URL final.
- [ ] Verificar la nota legal del footer.
- [ ] Probar la version movil.

## Open Design

Se intento clonar y descargar Open Design, pero la red de esta sesion no permitio obtener una copia local completa. La auditoria se hizo con README, QUICKSTART y arbol del repositorio consultados por la API de GitHub. Ver `OPEN_DESIGN_AUDIT.md` para el resumen y los comandos de reintento.
