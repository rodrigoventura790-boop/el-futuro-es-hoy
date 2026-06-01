# Auditoria breve de Open Design

## Estado de acceso

No fue posible clonar el repositorio `https://github.com/nexu-io/open-design.git` desde esta sesion. `git clone` fallo dos veces con timeout al conectar a `github.com:443`. Docker si esta disponible en el equipo, pero no se pudo preparar `deploy/.env` ni ejecutar `docker compose up -d` porque el repositorio no quedo descargado localmente. Tambien se intento descargar el ZIP desde GitHub/codeload; la descarga quedo incompleta y se descarto.

Si quieres reintentar manualmente:

```bash
git clone https://github.com/nexu-io/open-design.git
cd open-design/deploy
cp .env.example .env
# genera un token seguro y pegalo en OD_API_TOKEN
docker compose up -d
```

Como alternativa desde source, Open Design pide Node.js 24.x y pnpm 10.33.x con Corepack:

```bash
cd open-design
corepack enable
pnpm install
pnpm tools-dev run web
```

## Recursos utiles detectados

- Skills de estructura: `saas-landing`, `faq-page`, `copywriting`, `frontend-design`, `web-design-guidelines`, `ui-ux-pro-max`, `design-review`.
- Sistemas visuales relevantes: `clean`, `minimal`, `editorial`, `elegant`, `luxury`, `warm-editorial`, `corporate`, `application`.
- Practicas valiosas: formulario de descubrimiento antes de disenar, direccion visual determinista, checklist anti-AI-slop, placeholders honestos, autocritica por jerarquia, especificidad y contencion.

## Estilo recomendado

Health-tech premium sobrio: fondo blanco calido, tipografia editorial en titulares, Inter para lectura, verde profundo como color principal, azul petroleo como soporte y dorado suave solo para detalles de confianza. El resultado debe sentirse como consultoria seria, no como tecnologia futurista agresiva.

## Elementos adaptados

- Hero editorial con foto real y tarjeta de confianza.
- Sistema de secciones con mucho aire, bordes finos y tarjetas contenidas.
- Pricing claro, sin presion comercial excesiva.
- FAQ y limites legales visibles.
- Testimonios placeholder identificados en codigo para reemplazo responsable.

## Elementos descartados

- Fondos oscuros dominantes, estetica crypto, WebGL hero, gradientes intensos, blobs decorativos, metricas inventadas y testimonios falsos demasiado especificos.
- Direcciones brutalistas o experimentales que podrian restar confianza a una marca de salud integral.

## Sistema visual final

La web final usa una direccion editorial-minimal premium: espacios amplios, blancos calidos, acentos emerald/petrol, microdetalles dorados, iconografia SVG lineal, tarjetas con radio pequeno, lenguaje responsable y jerarquia clara para publicar en GitHub Pages.
