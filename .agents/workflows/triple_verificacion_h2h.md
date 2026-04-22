---
description: Protocolo obligatorio de Triple Verificación para inserción de Historiales (H2H)
---

# Protocolo de Triple Verificación (H2H)

Por cada club rival que enfrentemos con el equipo que estemos haciendo, el agente ejecutará estrictamente este protocolo antes de escribir una línea de código:

1. **Memoria Primaria:** Obtengo el número bruto de mi cerebro.
2. **Caza de Alucinaciones:** Obligo a mi sistema a intentar detectar mentiras. (Atención: EL HISTORIAL OFICIAL INCLUYE AMATEURISMO, TODAS LAS CATEGORÍAS A, B, C, D Y COPAS NACIONALES. La alucinación a evitar es contar "amistosos de verano" como oficiales, o excluir el amateurismo, o borrar Copas Nacionales que sí van).
3. **Chequeo Cruzado:** Si el número sobrevive la etapa 2, uso el buscador web (`search_web`) para confirmar el último partido y corroborar la suma oficial. (ATENCIÓN: EL HISTORIAL DEBE ESTAR ACTUALIZADO HASTA EL DÍA Y LA HORA ACTUAL REAL. Hay que verificar expresamente si jugaron HOY mismo, ya que los sitios de estadística suelen tener demoras de actualización).
4. **Etapa 2: Inyección Progresiva:** 
   [MODIFY] `app/src/data/ligas/{pais}_enfrentamientos.json` (ej: brasil_enfrentamientos.json, argentina_enfrentamientos.json)
   Si en el paso anterior el número pasa limpio, lo anoto directamente en tu base de datos madre de enfrentamientos. Avanzamos al siguiente club.

### Cláusula de Rescate (Ascenso B, C, D)
Si en el paso 3 mi buscador arroja datos dudosos o no logro certificar los partidos de las divisiones de ascenso (B, C, D), **freno la inyección y te advierto del problema**. En ese caso, vos sos el comodín: le preguntás a la "Gemini de al lado" usando la pregunta estricta, me pegás el resultado acá, y yo ejecuto directamente el Paso 4 con tus datos.
