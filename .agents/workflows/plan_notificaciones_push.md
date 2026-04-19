# Plan Arquitectónico: Sistema de Notificaciones Push (Modo Offline)

Este documento detalla la hoja de ruta para evolucionar la aplicación DataFútbol de una PWA estática a una aplicación híbrida con Backend activo en tiempo real, permitiendo notificaciones en vivo con la app cerrada.

## 1. Infraestructura de Servidor y Recepción (El Backend)
Actualmente el frontend lee de manera directa y bajo demanda. Para las notificaciones cerradas, se debe implementar:
- **Tecnología Recomendada:** Node.js + Express (Hosteado en Vercel, Render o Railway).
- **El "Cron Job" Central:** Un script en este servidor debe consultar la API-Football periódicamente (ej. cada 1 minuto) a nivel centralizado, ahorrando cuota de API (1 llamada en vez de que cada usuario dispare la API).
- **Procesador de Eventos:** Si el servidor detecta que el minuto `N+1` tiene un puntaje distinto al `N`, o hay un evento de tarjeta/arranque, dispara un trigger.

## 2. Base de Datos de Usuarios y Favoritos
Para saber a quién notificar, el Frontend no alcanza. Necesitamos memoria persistente:
- **Servicio:** Firebase Auth + Firestore o Supabase.
- **Registro de Usuario:** Los usuarios deberán poder loguearse (Google / Correo).
- **Matriz de Intereses:** En la cuenta de cada usuario, guardaremos un array: `favoritos: ["boca-juniors", "penarol", "real-madrid"]`.

## 3. Emisión de la Notificación (Push Provider)
- Cuando el usuario da permisos (Aceptar Notificaciones) en su celular, el navegador nos emite un `Push Token` único (VAPID / FCM Token).
- Este Token se asocia al perfil del usuario en la Base de Datos.
- Cuando el servidor detecta gol de Peñarol, escanea la Base de Datos buscando aquellos con "penarol" en sus favoritos, extrae sus `Push Tokens`, y le manda el payload a los servidores de Firebase (FCM).

## 4. El "Despertador" del Celular (Service Worker)
- Para que la pantalla de un celular bloqueado vibre y muestre el mensaje, se debe registrar un archivo llamado `firebase-messaging-sw.js` (o service-worker personalizado).
- Este proceso invisible de fondo interceptará la orden de Google/Apple y fabricará la tarjeta visual (`Gol de Peñarol - 1 a 0`) sin requerir que la interfaz visual en React esté cargada en la memoria RAM del teléfono.

## Pasos de Implementación Progresiva:
1. **Fase 1:** Implementar Firebase Auth (Login).
2. **Fase 2:** Crear la UI *"Mi Perfil"* y almacenar el Array de Favoritos en base de datos.
3. **Fase 3:** Solicitud de permisos al usuario (VAPID integration) y guardado del Token Push asociativo.
4. **Fase 4:** Compilación y despliegue del Bot Node.js 24/7 que consume API-Football.

---
**Clasificación de Riesgo:** Alto (Implica consumo continuo, manejo de datos y privacidad, y sincronización estricta).
**Prioridad Actual:** Pausado/Guardado para fase de expansión futura.
