---
slug: correo-gratis-con-tu-dominio
title: "Correo gratis con tu dominio: recibe en Gmail y envía como info@tunegocio.com"
img: /u/blog/correo-gratis-con-tu-dominio.webp
author: admin
toc: true
date: 2026-11-16 00:00:00
---

¡Hola! Tener un correo con el dominio de tu negocio (`info@tunegocio.com`) da mucha más confianza que un `tunegocio@gmail.com`, y **no hace falta pagar por ello**. En esta guía te cuento cómo **recibir** esos correos en tu Gmail de siempre y cómo **enviar** con tu dominio, gratis, con los pasos para cada dispositivo.

> **Aviso importante:** el truco de siempre para enviar (la función «Enviar como» de Gmail) **desaparece en enero de 2027**. Esta guía usa el método que **sí seguirá funcionando**. Si ya lo usas, te lo explico en [Gmail quita «Enviar como» en enero de 2027](/gmail-enviar-como-2027-alternativas/).

## En pocas palabras

- **Gratis:** recibes en Gmail (15 GB gratis) y envías con tu dominio usando un servicio de envío gratuito (SMTP2GO).
- **La condición clave:** para **enviar con tu dominio** tienes que usar **una app de correo, en el ordenador y en el móvil**. **Desde la web de Gmail ya no podrás** (a partir de enero de 2027), que es justo donde mucha gente está acostumbrada a hacerlo.
- **La única excepción** para seguir usando la web de Gmail con tu dominio es **Google Workspace** (de pago).
- **Contraseña de aplicación de Google:** no siempre hace falta. Solo es obligatoria en algunas apps (por ejemplo la de Gmail para Android); en otras te basta con iniciar sesión con tu cuenta de Google. Mira [cuándo la necesitas](#paso-3-contrasena-de-aplicacion-de-google-solo-si-tu-app-la-pide).
- **Si prefieres no montar nada:** servicios de pago que lo dan todo hecho, web y apps incluidas ([Google Workspace o Microsoft 365](#opciones-todo-en-uno-google-workspace-y-microsoft-365)), o que [te lo configuremos nosotros](#quiero-que-me-lo-configureis).

## La idea: separar recibir y enviar

Un correo con tu dominio son dos tareas distintas, y cada una la resuelve un servicio gratuito:

1. **Recibir:** tu dominio reenvía los correos a tu Gmail. Con [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/) es gratis y se hace en un rato.
2. **Enviar:** un servicio de envío (SMTP) manda tus correos con tu dominio. Yo recomiendo **SMTP2GO**, también gratis.
3. **Leer y contestar:** una app de correo (la de Gmail del móvil, Apple Mail, Thunderbird…) donde lees con tu Gmail y contestas con tu dominio.

## Recibir: reenviar tu dominio a Gmail

Si tu dominio está en Cloudflare, el reenvío es gratis (plan Free) y se hace en tres pasos:

1. En el panel de Cloudflare entra en **Compute → Email Service → Email Routing** y pulsa **Onboard Domain** (Añadir dominio). Elige tu dominio y acepta: Cloudflare añade solo los registros MX, SPF y DKIM necesarios.
2. En **Destination Addresses** (direcciones de destino) añade tu Gmail y pulsa el enlace **Verify email address** del correo que te llega. Hasta que lo hagas, las reglas quedan desactivadas.
3. En **Routing Rules** pulsa **Create routing rule**: escribe la parte de la dirección (`info`), elige la acción **Send to an email** (enviar a un correo) y tu Gmail como destino. Repite para cada dirección (`ventas`, `hola`…) o activa la regla **Catch-all** para recibir todo lo que lleguen a tu dominio, incluso con erratas.

Con esto **recibes**; para contestar con esa dirección necesitas la parte siguiente. Si tu dominio está en otro proveedor (por ejemplo DonDominio), casi todos tienen reenvíos de correo gratis en su panel.

## Enviar: SMTP2GO

### Qué es SMTP2GO y por qué lo recomiendo

[SMTP2GO](https://www.smtp2go.com) es un servicio de envío de correo. Su plan gratuito permite **1.000 correos al mes, con un máximo de 200 al día** ([fuente](https://support.smtp2go.com/hc/en-gb/articles/20483715021081-Billing-Pricing-and-Plans-FAQ)), de sobra para el correo normal de un negocio pequeño.

Lo recomiendo por una razón concreta: **te avisa por correo cuando un mensaje no llega** (rebotes). Parece poca cosa, pero es lo más importante: mandar un correo importante a un cliente importante y no enterarte de que no ha llegado es muy grave. Más abajo cuento por qué insisto tanto.

### Paso 1: crear la cuenta y verificar tu dominio

1. Regístrate en SMTP2GO con un correo que **no** sea de un dominio público como Gmail o Yahoo (lo rechaza).
2. En el panel, ve a **Sending → Verified Senders → Sender domains** y pulsa **Add sender domain**. Escribe tu dominio (`tunegocio.com`).
3. SMTP2GO te mostrará **tres registros CNAME**. Hay que crearlos en el DNS de tu dominio. No hace falta tocar el SPF ni los registros MX.
4. Cuando el dominio aparezca como **Verified**, ya puedes enviar.

Si tu dominio está en Cloudflare, al crear cada CNAME: tipo **CNAME**, en «Nombre» solo la primera parte (por ejemplo `em12345`, sin tu dominio), en «Destino» el valor que te da SMTP2GO, **Proxy en «Solo DNS»** (nube gris) y TTL automático. Y ojo: si tienes activado **CNAME flattening** hay que desactivarlo o no verificará ([guía de SMTP2GO para Cloudflare](https://support.smtp2go.com/hc/en-gb/articles/360022578154-DNS-Setup-for-Cloudflare)).

Si no sabes tocar el DNS, **dínoslo y lo hacemos nosotros**: es un paso que se puede hacer sin ti.

### Paso 2: crear el usuario de envío y el aviso de rebotes

1. En **Sending → SMTP Users** crea un usuario. Te dará un **nombre de usuario** y una **contraseña** (no son los de tu Gmail; son solo para enviar).
2. Entra en ese usuario, pestaña **Advanced**, y activa **Bounce Notifications**. Elige que el aviso vaya a ti (al remitente original o a otra dirección que indiques). A partir de ahora, si un correo rebota, te llegará un correo avisándote ([fuente](https://support.smtp2go.com/hc/en-gb/articles/360023602974-Bounce-Notifications)).

Los datos de conexión para tu app son:

- **Servidor de salida (SMTP):** `mail.smtp2go.com`. Si tu cuenta es del centro de datos europeo, el panel (en **Sending → SMTP Users**, abajo, «Connecting via SMTP») te mostrará `mail-eu.smtp2go.com`: usa el que te indique tu panel.
- **Puerto:** 2525 (también valen 587, 25 y 8025) con **TLS**, o 465 con **SSL**
- **Usuario y contraseña:** los del paso 2

**¿Y si quiero más de una dirección** (`info@`, `ventas@`, `tunombre@`)? No necesitas otra cuenta de SMTP2GO. Una vez verificado tu dominio, con **un solo usuario SMTP** puedes enviar con **cualquier dirección de ese dominio**; la dirección «De» la eliges en tu app. Si prefieres separar credenciales (por ejemplo, una por persona o por programa), puedes crear **más usuarios SMTP dentro de la misma cuenta gratuita** (en **Sending → SMTP Users → Add SMTP user**). Los límites del plan gratuito (1.000 correos al mes, 200 al día) son de la cuenta, no de cada usuario ni de cada dirección.

- **Recibir en cada dirección:** esto es aparte. Cada dirección nueva necesita su propia regla de reenvío en tu servicio de correo del dominio (por ejemplo, una regla por dirección en Cloudflare Email Routing).

### Paso 3: contraseña de aplicación de Google (solo si tu app la pide)

**No la crees por defecto.** Una contraseña de aplicación es una clave de 16 caracteres que Google genera para programas que no saben iniciar sesión con tu cuenta de Google. Muchas apps modernas sí saben: abren una ventanita de Google, inicias sesión y listo, sin clave especial. Resumen de cuándo hace falta:

| App | ¿Contraseña de aplicación? |
|---|---|
| Gmail para Android (cuenta «Otro servicio» por IMAP) | **Sí** |
| Thunderbird en ordenador (Windows, Mac, Linux) | **No** (inicia sesión con Google) |
| Thunderbird para Android (IMAP) | Normalmente no (inicia sesión con Google; con IMAP, no con POP) |
| Mail en Mac y en iPhone | Depende de cómo añadas la cuenta; mira cada sección |
| Outlook y otras apps | Depende de la app: si te ofrece «Iniciar sesión con Google», no |

Si tu app te pide una, esto es lo que necesitas saber: **la opción solo aparece si tienes activada la verificación en dos pasos** en tu cuenta de Google. Si no la tienes, no verás la opción y no sabrás por qué ([fuente](https://support.google.com/accounts/answer/185833)). Tampoco aparece si tu segundo paso son solo llaves de seguridad, si tienes la Protección Avanzada o si es una cuenta de trabajo o centro educativo cuyo administrador la ha desactivado.

Consejo aparte: **activa la verificación en dos pasos de todos modos**. Es una de las medidas que más reduce el riesgo de que te hackeen la cuenta.

Cómo crearla: entra en tu cuenta de Google (`myaccount.google.com`) y, en el buscador de arriba, escribe «contraseñas de aplicación» (también está en **Seguridad**). Escribe un nombre para la aplicación (por ejemplo «correo del móvil») y pulsa **Crear**. Apunta la clave de 16 caracteres, porque no se vuelve a mostrar. Google las revoca si cambias la contraseña de tu cuenta.

Google avisa en esa página de que son «menos seguras» que el inicio de sesión de Google. Por eso conviene crear una **solo para este uso**, no compartirla y, si cambias a una app que no la necesite, **revocarla**.

Enlace directo: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) (confirmado por Loren desde Android).

## Leer y contestar: configura tu app

Elige tu caso:

### Android: app de Gmail

La app de Gmail permite añadir una cuenta «de otro servicio» por IMAP y usar un servidor de envío propio. Así **lees con tu Gmail y envías con tu dominio**: la nueva cuenta aparece en la app como una cuenta más, con tu dirección del dominio.

1. Abre la app de Gmail, toca tu foto y **Añadir otra cuenta**. En «Configura tu correo» elige **Otro servicio**.
2. Escribe **tu dirección del dominio** (`info@tunegocio.com`) y pulsa **Siguiente**.
3. En «¿Qué tipo de cuenta es?» elige **Personal (IMAP)**.
4. Si te pide una contraseña, pon la **contraseña de aplicación** del paso 3 (en esta app **sí** es obligatoria). Después la app muestra los **ajustes del servidor de entrada**, que vienen rellenos con tu dominio y hay que **cambiar**:
   - **Nombre de usuario:** tu dirección de **Gmail** (donde recibes), por ejemplo `tunegocio@gmail.com`
   - **Contraseña:** la contraseña de aplicación
   - **Servidor:** `imap.gmail.com`
   - **Puerto:** 993, con seguridad **SSL/TLS**
5. En los **ajustes del servidor de salida**: deja activado **Exigir inicio de sesión**, y pon el **usuario y la contraseña de SMTP2GO** (los del paso 2), servidor `mail.smtp2go.com`, puerto **465** con **SSL/TLS** (también valen 2525 con TLS).
6. Termina el asistente. Al escribir un correo nuevo, en el campo **De** elige tu dirección del dominio: ya envías con ella.

**Alternativa sin contraseña de aplicación:** otra app de correo para Android que inicie sesión con Google, como Thunderbird para Android (antes K-9 Mail), añadiendo la cuenta de Gmail por IMAP.
Si ya tienes una cuenta añadida, puedes revisar o cambiar estos datos en **Ajustes de la app → tu cuenta → Ajustes de entrada / Ajustes de salida**.

### iPhone y iPad

La app Mail de Apple permite usar un servidor de envío propio. Hay dos formas de añadir tu cuenta de Gmail:

- **Como cuenta de Google** (**Ajustes → Apps → Mail → Cuentas de Mail → Añadir cuenta → Google**): inicias sesión con la ventanita de Google, **sin contraseña de aplicación**. Después, en los ajustes de esa cuenta, puedes editar el **servidor de salida** y poner el de SMTP2GO. Según la versión de iOS, es posible que Apple no te deje cambiar el servidor de envío de una cuenta de Google; si es tu caso, usa la forma siguiente.
- **Como cuenta «Otra»** (**… Añadir cuenta → Otra → Añadir cuenta de correo**): con los mismos datos de entrada (`imap.gmail.com`, puerto 993) y de salida (SMTP2GO) que en Android. Aquí **sí** necesitas la contraseña de aplicación del paso 3.

### Mac: app Mail

En Mail para Mac también hay dos formas. La más cómoda es **Mail → Añadir cuenta → Google**: inicias sesión con la ventanita de Google (**sin contraseña de aplicación**), añades tu dirección del dominio como alias en **Mail → Ajustes → Cuentas → Información de la cuenta** y, en **Servidor de salida**, editas la lista de servidores SMTP para añadir `mail.smtp2go.com` con tu usuario y contraseña de SMTP2GO. Si tu versión no te deja cambiar el servidor de envío de una cuenta de Google, añádela como **Otra** con la contraseña de aplicación y los datos de Android.

### Windows y Linux: Thunderbird (o Outlook)

Thunderbird es gratuito y funciona en Windows, Mac y Linux.

1. En el asistente de cuenta pon tu nombre y tu **dirección de Gmail** (donde recibes) y pulsa **Continuar**. Thunderbird detecta Gmail y propone IMAP con **OAuth2** (inicio de sesión con el navegador). Con OAuth2 **no necesitas contraseña de aplicación** para leer; si prefieres la contraseña de aplicación, pulsa **Editar configuración** y en «Método de autenticación» elige **Contraseña normal**, y escribe la contraseña de aplicación del paso anterior cuando la pida.
2. Termina el asistente. Si te ofrece añadir libretas de direcciones o calendarios de Google, puedes saltarlo.
3. Entra en **Configuración de la cuenta** (rueda dentada abajo a la izquierda) → **Servidor de salida (SMTP)** → **Añadir…** y rellena: descripción `SMTP2GO`; servidor `mail.smtp2go.com` (o el que muestre tu panel, por ejemplo `mail-eu.smtp2go.com`); puerto `465`; seguridad de la conexión **SSL/TLS**; método de autenticación **Contraseña normal**; usuario el de SMTP2GO.
4. Vuelve a la página de tu cuenta, en **Identidad predeterminada** cambia **Dirección de correo** por la de tu dominio (`info@tunegocio.com`) y, más abajo, en **Servidor de salida** elige el de SMTP2GO.
5. Escribe un correo nuevo: en **De** aparecerá tu dirección del dominio. La primera vez que envíes, Thunderbird pedirá la contraseña de SMTP2GO.

Para varias direcciones del dominio, usa **Gestionar identidades…** en esa misma página. En Outlook el proceso es parecido.

### Gmail en la web (ordenador)

La web de Gmail **no** podrá enviar con tu dirección del dominio a partir de enero de 2027. Si te gusta Gmail en el ordenador, puedes seguir **leyendo** ahí, pero para contestar con tu dirección tendrás que usar una de las apps anteriores. Esa es la parte más incómoda del cambio, y por eso para algunas personas la mejor opción es Workspace.

## Alternativa gratuita: Brevo

[Brevo](https://www.brevo.com) también ofrece envío por SMTP gratis, con **300 envíos al día** ([fuente](https://help.brevo.com/hc/en-us/articles/208580669)), bastante más que SMTP2GO. La configuración es parecida: se verifica el dominio y se crea una clave SMTP.

Mi experiencia, que es solo mía: en **dos ocasiones, en meses distintos, con el mismo cliente**, un correo mío enviado con Brevo a una dirección alojada en un servidor de DonDominio **no llegó ni siquiera a la carpeta de spam**, y **Brevo no me avisó**. Me quedé tranquilo pensando que había avisado a un cliente importante y no era así. No sé si pasa a menudo, y no es una mala opción, pero por eso yo prefiero SMTP2GO: el aviso de rebote está en el propio servicio y es fácil de configurar.

## Opción de pago muy barata: el servidor de envío de tu proveedor de dominio

Si los límites de SMTP2GO se te quedan cortos (algo que me extrañaría mucho en un negocio pequeño), hay una vía de pago **muy barata**: el **plan Mini de correo de [DonDominio](https://www.dondominio.com/es/products/email/)**, que cuesta **1 € al año**. Incluye **5 cuentas de correo de 100 MB cada una y 5 alias**, con acceso por IMAP/POP y SMTP. Es poquísimo espacio, pero no importa si **recibes y lees el correo en tu Gmail** (con sus 15 GB gratis) y usas la cuenta de DonDominio **solo para enviar** con su servidor SMTP. Así pagas 1 € al año por poder enviar sin los límites de un servicio gratuito.

Dos precauciones: DonDominio indica que el **envío masivo** está limitado (no es para campañas), y para contratarlo necesitas tener el dominio con ellos (o migrarlo). La configuración en la app es la de siempre, cambiando el servidor, usuario y contraseña de salida por los de DonDominio. Yo a algún cliente se lo he dejado así y le funciona bien. DonDominio tiene además [un tutorial para configurarlo en Gmail](https://blog.dondominio.com/configurar-cuenta-de-correo-personalizada-en-gmail/).

Si tu dominio está en Cloudflare (mi recomendación general), este plan te obligaría a migrar el dominio a DonDominio, así que en ese caso casi siempre compensa más SMTP2GO.

## Opciones todo en uno: Google Workspace y Microsoft 365

Si prefieres no montar nada ni depender de servicios intermedios, hay servicios de pago que **lo dan todo hecho**: buzón con tu dominio, **web, app de escritorio y app de móvil**, con el envío ya resuelto. Los dos más usados:

- **Google Workspace** (antes G Suite): un buzón de Gmail con tu dominio. «Enviar como» de Workspace **no se retira**, y es **la única forma de seguir enviando con tu dominio desde la web de Gmail**. En España, Business Starter cuesta **6,80 € por usuario al mes con compromiso anual, o 8,10 € si pagas mes a mes** ([precios de Google](https://workspace.google.com/intl/es/business/)), con 30 GB por usuario.
- **Microsoft 365 Empresa Básico** (Outlook y Exchange con tu dominio): alrededor de **6 € por usuario al mes (sin IVA, con pago anual)** ([página de Microsoft](https://www.microsoft.com/es-es/microsoft-365/business/microsoft-365-business-basic)). Lo usa mucha gente; el correo funciona en Outlook web, de escritorio y móvil.
Los precios cambian, así que confírmalos antes de contratar.

No es solo pagar. En ambos casos hay que:

1. Contratar y **verificar tu dominio**.
2. **Cambiar los registros MX** del dominio: dejan de apuntar a Cloudflare Email Routing y pasan al nuevo servicio.
3. Si quieres conservar tus correos antiguos, **migrar el histórico** al buzón nuevo.
4. Configurar firmas, alias (`info@`, `ventas@`…) y dar de alta tus apps y móviles.

Es la opción más limpia, pero de pago y con más trabajo inicial. También te lo configuramos.

## Quiero que me lo configuréis

Si tienes poco tiempo o no te apetece pelearte con DNS y contraseñas de aplicación, **te lo dejamos funcionando**.

- **Lo que hacemos sin ti:** crear la cuenta de envío, verificar tu dominio, tocar el DNS y crear el usuario con los avisos de rebote.
- **Lo que necesita tu participación:** la contraseña de aplicación (necesita tu verificación en dos pasos) y tus dispositivos. Lo hacemos en una **llamada guiada de 20 a 30 minutos** compartiendo pantalla. Nunca entramos en tu cuenta de Google desde nuestros equipos.

[Escríbenos](/#contacto) y te decimos cuánto sería para tu caso.

## Resumen

- **Recibir:** tu dominio reenvía a tu Gmail (Cloudflare Email Routing, gratis).
- **Enviar:** SMTP2GO (gratis, 1.000 correos al mes) con tu dominio verificado y aviso de rebotes.
- **Leer y contestar:** una app con IMAP de Gmail y SMTP2GO como servidor de salida. La contraseña de aplicación solo hace falta en algunas apps (y exige verificación en dos pasos).
- **Alternativas:** Brevo (gratis), el SMTP de tu proveedor de dominio (de pago, muy barato) o un servicio todo en uno de pago (Google Workspace o Microsoft 365).

¿Dudas? Escríbenos y te echamos una mano.
