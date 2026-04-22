# Proyecto URBA: App de Resultados en Vivo

## 🏉 Alcance del Proyecto
Aplicación web progresiva (PWA) dedicada a proveer resultados en tiempo real y estadísticas de los torneos de la **Unión de Rugby de Buenos Aires (URBA)**.

- **División Principal:** Top 14
- **Divisiones de Ascenso:** Primera A, Primera B, Primera C, Segunda, Tercera, y Torneo de Desarrollo.
- **Nivel Competitivo Base:** Exclusivamente **Plantel Superior**. Se descartará el seguimiento en vivo de Intermedia y Pre-Intermedia. 
> [!TIP]
> Al enfocarse solo en Plantel Superior, el volumen organizativo se reduce de ~150 partidos a exactamente **~50 partidos máximos en simultáneo** los sábados por la tarde, transformando un problema logístico masivo en un volumen altamente controlable para el servidor.

## 📡 Arquitectura de Recepción de Datos
El principal desafío técnico es que **no existen APIs comerciales (proveedores internacionales)** para el rugby amateur formativo de Argentina. Por lo tanto, el ecosistema de carga de tanteadores en tiempo real recaerá en dos arquitecturas propias:

### 1. Modelo "Bot de Redes" (Automatizado)
Para divisiones altas y ordenadas (Top 14, Primera A y parte de la B).
- **Funcionamiento:** Un script alojado en nuestro servidor consulta los perfiles de X (Twitter) oficiales de los clubes cada 10 segundos.
- **Patrones:** Extrae palabras estructurales ("Try", "Penal", "Drop") y los números actualizados para enviarlos al tablero general.
- **Límite:** Deficiente e inútil para la Primera C en adelante, dado que allí la comunicación se da vía Historias de Instagram (texto sobre imagen incapturable).

### 2. Modelo "Comunidad y Delegado" (El Santo Grial)
La vía obligada para sostener el ascenso, idéntico al motor fundacional de grandes enciclopedias web.
- **El Sistema:** Se habilita un panel de control mínimo ("Botón Rojo") en la app, detrás de una contraseña secreta por club.
- **El Evento:** El delegado, planillero, mánager presiona el botón interactivo **[+5 TRY]** o **[+3 PENAL]** tras la acción al costado de la cancha.
- **El Resultado:** La base de datos asimila el golpe manual e impacta el cambio de resultado en menos de 0.5 segundos en la pantalla de cualquier persona que esté mirando la app.

## 💰 Modelo de Captación e Incentivos (Efecto FOMO)
Para arrancar el proyecto desde cero sin depender de 50 planilleros pagos, se creará deseo impulsado por FOMO (Miedo a Quedarse Afuera):

1. **Lanzamiento Exclusivista:** La app se lanza en estado premium 100% funcional solo cubriendo el Top 14 y la Primera A/B aprovechando el Bot de Twitter.
2. **Generación de Celos de Vidriera:** Los clubes de Segunda, Tercera y Desarrollo descubrirán la app al ver a sus pares y sufrirán de "status anxiety" al no aparecer en el tablero nacional.
3. **Conversión Voluntaria:** Ante la indignación por no estar, el propio club se comunicará exigiendo su lugar. Como condición de ingreso, se les exige que sean ellos mismos quienes descarguen el panel y actualicen el Modelo Delegado los sábados.
4. **Extra (Auspicio Barrial):** A los clubes que reporten velozmente, se les permite publicitar a su propio sponsor menor local (ej. la pinturería barrial) dentro de la app como incentivo.

##  📅 Hoja de Ruta (Roadmap del Proyecto Maestro)
1. **Fase 1 (Actual):** Acabar el sistema completo del Archivo Histórico Mundial del Fútbol (Argentina, Inglaterra, España).
2. **Fase 2:** Implementar módulos en Vivo para el *Mundial México, EEUU & Canadá 2026*.
3. **Fase 3 (Proyecto URBA):** Desplegar esta arquitectura y dar a luz a la mejor PWA del mundo amateur ovalado.
