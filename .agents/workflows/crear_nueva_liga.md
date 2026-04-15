---
description: Guía maestra y reglas estrictas para crear una nueva liga desde cero.
---

# Reglas Maestras para Empezar una Nueva Liga

Esta guía establece el flujo de trabajo sagrado y las directrices obligatorias dictadas por Gonzalo para la creación o auditoría de cualquier liga nueva en el proyecto de Historia del Fútbol. Leer antes de ejecutar.

## 0. Temporada Vigente
- **OBLIGATORIO:** Trabajar siempre, siempre sobre la lista de equipos de la **liga actual en el tiempo presente**, NUNCA sobre la temporada anterior. Prestar atención a ascensos y descensos recientes.

## 1. Historial (Fundación)
- El apartado de historia debe arrancar imperativamente con un **relato periodístico detallado de la fundación y sus fundadores.**
- Deben mencionarse nombres propios, apellidos y el contexto histórico. Nada de resúmenes formales y muertos de una línea ni un exceso de poesía exagerada o adjetivación épica.

## 2. Escudos
- Buscar y mapear exhaustivamente el escudo **actual** y todos los **antiguos** existentes en la base.
- Si las imágenes no se encuentran o faltan, el bot debe detenerse e informar la falta: **"los busca Gonzalo".**
- 🔴 **PROHIBICIÓN ABSOLUTA:** Cero tolerancia al uso de la API de Wikipedia. Nunca usar archivos SVG dudosos de Wikipedia. Recurrir a TheSportsDB o archivos bajados a mano por Gonzalo en las carpetas fìsicas.

## 3. Estadios y Direcciones
- Todos los estadios cargados en la base de datos deben tener OBLIGATORIAMENTE su link a **Google Maps** (`url`) y su **dirección** física exacta (`direccion`).
- En el caso moderno donde los estadios cambian de nombre por acuerdos comerciales (Naming Rights), la identidad subyacente y la correlación entre el estadio viejo y el nuevo se determina rigurosamente de acuerdo a **la dirección del mismo**.

## 4. Palmarés
- Ingresar todo lo que ganó el club de élite (Ligas, Copas, Internacionales) computando las consagraciones hasta el año 2026 inclusive.
- Mapear con precisión el `nombre` exacto del torneo y desglosar los años en los que fue campeón.

## 5. Equipación
- Ingresar la evolución de las camisetas desglosando por **cambios de colores** y siempre detallando explícitamente los **años** de dicho cambio.
- Especificar en la descripción de las casacas las tramas históricas, prestando especial atención y detalle si tienen **rayas y líneas verticales**, horizontales o una **banda diagonal**.

## 6. Leyendas e Ídolos
- La matriz humana del club se compone exactamente de 15 jugadores históricos divididos así:
  - **5 Ídolos**
  - **5 Máximos Goleadores**
  - **5 Jugadores con Máximas Presencias**
- El relato sobre cada jugador no debe ser estadístico ni robótico, debe estar escrito en tono de **crónica periodística resumida**.

## 7. Arquitectura de UI: Inicio de Cada Liga (Campeonatos)
- En la página principal de inicio de cada liga, se debe mantener y agregar de forma irrenunciable la solapa **"Campeonatos"**.
- Dentro de Campeonatos se construyen **sub-solapas** específicas cuyo nombre deberá mapearse y corresponderse perfectamente a los nombres de las Ligas y Copas originales de cada país particular.

## 8. Arquitectura de UI: Inicio de Cada Liga (Historial)
- En esa misma página de inicio para cada país individual, es obligatorio mantener e integrar la solapa general de **"Historial"** que centralice los cruces.
