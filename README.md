# Calistenia Asiatica para Mulheres

Clon identico del quiz funnel original (build estatico de Vite/React,
descargado byte a byte del deploy original) al que se habia perdido el
acceso de edicion. Incluye:

- El quiz completo (preguntas, transiciones, prueba social).
- La pagina de resultado con el VSL (player ConverteAI/VTurb) que
  desbloquea el contenido de abajo cuando termina.
- El bloque de oferta, testimonios, garantia y FAQ.
- Tracking original: UTMify (UTM + Meta Pixel) y Microsoft Clarity.
- Boton final que enlaza al checkout de Lastlink.

## Correr localmente

\`\`\`bash
npm install
npm start
\`\`\`

Abre http://localhost:3000

## Deploy

Pensado para desplegarse tal cual en Railway (o cualquier host Node):
`npm install && npm start`, puerto tomado de `process.env.PORT`.
