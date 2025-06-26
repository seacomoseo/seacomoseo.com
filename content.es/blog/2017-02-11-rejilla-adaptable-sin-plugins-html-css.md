---
slug: rejilla-adaptable-sin-plugins-html-css
title: Cómo crear una rejilla adaptable sin plugins, sólo con HTML y CSS
summary: ''
image: blog/rejilla-adaptable-sin-plugins-html-css.jpg
author: admin
toc: true
draft: false
noindex: false
date: 2017-02-11 00:00:00
lastmod: 2021-11-30 00:00:00
translationKey: responsive-grid-without-plugins-html-css
seo: ''
description: ''
---

¡Hola! Con todo el tema este del [#RETOTSA](https://www.youtube.com/watch?v=FXqwMT6bcdw "[nofollow]") ^[[2](https://www.youtube.com/watch?v=2A8XYbPXfo0 "[nofollow]")]^ estamos unos cuantos aprendiendo un montón a base de dudas y respuestas en el grupo de Telegram, y entre muchas de las dudas surge el tema de crear la rejilla de productos o categorías para los __TSA-commerce__.

Me han preguntado varias veces con qué plugin lo hago yo, ¡pero no uso plugins y ni siquiera wordpress!

> ¿Cómo? ¿Pero por qué no usas Wordpress?

Porque para algo tan "estático" como los TSAs, a mi personalmente, me parece más engorroso tener una base de datos, hacer copias de seguridad, actualizar core, temas y plugins, etc. Y vamos, que trabajando directamente con HTML la velocidad de carga por lo general mejora bastante.

Al grano: lo hago directamente con código HTML y CSS. Algo muy sencillo y limpio (al final pongo un enlace a una demo de ejemplo).

Primero hablaré del código HTML, la estructura que tiene que tener y una plantilla de base en una simple herramienta que podéis usar vosotros mismos para agilizar mucho el proceso; y después el código CSS.

**Si no entiendes nada de código, no temas**, te lo explico para que lo puedas aplicar a pesar de ello, siguiendo los pasos no deberías tener problemas. No obstante, algunas aclaraciones haré, ya que a mi me hubiese gustado recibirlas antes de saber esto.

## Código HTML

Para el código HTML lo que necesitamos es algo así:

```html
<ul class="rejilla">
  <li>
    <a href="/enlace-producto-1" rel="nofollow" target="_blank">
      <img src="/url-imagen-1" width="200" height="200" alt="Nombre de ejemplo 1" />
      <h3>Nombre de ejemplo 1</h3>
      <p>14.39 €</p>
    </a>
  </li>

  <li>
    <a href="/enlace-producto-2" rel="nofollow" target="_blank">
      <img src="/url-imagen-2" width="200" height="200" alt="Nombre de ejemplo 2" />
      <h3>Nombre de ejemplo 2</h3>
      <p>37.95 €</p>
    </a>
  </li>
</ul>
```

Obviamente esto es un ejemplo y se puede hacer de muchas otras maneras o añadiendo y quitando elementos, pero para que lo entendáis, los elementos que nos importan son las etiquetas `ul` y `li` con sus `class` y valores `rejilla` y `producto` respectivamente, el resto es lo que queráis que tenga dentro de cada elemento de la rejilla. Para este ejemplo, ya que escribo esto principalmente para los que quieren aplicarlo a los TSAs, he colocado para cada elemento lo que se le suele poner a cada producto:

- 1 enlace que envuelve a todos los elementos, con los atributos `rel nofollow` para tener contento a Mr. Google y `target _blank` para que se abran en pestañas diferentes y no se vayan de nuestro sitio.
- 1 imagen con ancho y alto de 200px y un atributo `alt`.
- 1 encabezado h3 con el nombre del producto.
- 1 párrafo donde está contenido el precio.

Todo lo que está encerrado dentro de `<li>...</li>` es replicable, así que puedes copiar y pegar tantos como necesites, siempre y cuando dejes todos los productos envueltos en `<ul class="rejilla">...</ul>`. Repito: esto se puede cambiar por lo que le plazca a uno.

### Herramienta y plantilla para acelerar el proceso

Para estos productos que replicamos como base, sería genial aprovechar una hoja de cálculo donde tengamos cada uno por línea y cada columna con su información correspondiente, donde ir copiando y pegando luego donde corresponda en el HTML, ¿no?

**¡Pues te lo dejo más mascado todavía!**:

a esa misma hoja de cálculo le puedes añadir una columna más con unas formulitas para que te devuelva automáticamente el código HTML que necesitas, **¡listo para copiar y pegar!**

En el siguiente enlace podéis ver y copiar una **plantilla de Spreadsheets** (el Excel de Google) en vuestra cuenta de Google Drive y editarla a vuestro gusto:

[[Plantilla Spreadsheets]](https://docs.google.com/spreadsheets/d/1fuPoC3BZ7Tt97j3FcQN7piUu1keMPWl8XC6EUTrIEck "[nofollow]")

Modificar esas fórmulas (las que hay en las celdas amarillentas) es bastante simple y fácil de entender si manejas un poco de HTML, ya que lo único que hago es concatenar códigos a modo de textos (los que hay entre comillas dobles) con los valores de cada columna mediante el símbolo `&`.

A partir de aquí, lo único que hay que hacer es rellenar datos en sus columnas correspondientes y copiar cualquier celda amarillenta (que es donde están las fórmulas) y pegarlas, dentro de la misma columna, en las filas donde haya datos, poniendo siempre tras la última un `</ul>` como se ve en el ejemplo de la plantilla.

Para terminar, solamente hay que seleccionar y copiar **todas las celdas con contenido de la última columna** y pegarla donde queramos. **Detalles**:

- El resultado de los códigos de la última columna se obtienen en una sola línea por cada producto para evitar que spreadsheet genere comillas adicionales al copiar (si usais spreadsheet a menudo para cosas así, seguramente esto os resulte familiar).
- En las fórmulas he puesto los valores HTML entre comillas simples para que no se vea muy caótico, ya que poner comillas dobles como texto dentro de otras comillas dobles se deberían duplicar de por sí para que no de error, quedando un grupo de comillas dobles bastante confuso. Pero vamos, que así con comillas simples es más que válido para copiar y pegar.

### ¿Dónde poner el código HTML?

Si usáis un editor visual, deberías buscar algún botoncico que te permita escribir directamente en código. En el caso de Wordpress, al escribir un post o página, lo tienes al lado de donde pone `Visual`, donde indica `HTML`.

![](blog/editor-visual-html-wordpress.png)

**Ojo**: Tras pegar los datos en la zona de HTML de Wordpress, si vuelves al modo visual y otra vez al modo HTML, verás que te lo descuadra un poco, pero el resultado finalmente será el mismo.

Si os paráis a pensar un poco, las posibilidades que tiene esta "tontería" de concatenar información a modo de códigos es... ¡cremita! ¡Y ni os cuento con el resto de fórmulas especiales de spreadsheet! Esto que os he puesto aquí es algo súper simple en comparación a como lo hago yo con mis TSAs, pero se trata de daros a conocer las herramientas para que cada uno se monte su propio sistema de trabajo lo mejor que pueda.

## Código CSS

Ahí va el código CSS con algunas noticas bastante aclaratorias por si no sabéis del tema:

```css
.rejilla {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* productos centrados */
  text-align: center; /* texto centrado */
}
.rejilla > li {
  width: 228px; /* ancho de cada producto */
}
.rejilla a {
  display: block; /* para que el enlace abarque toda la "celda" del producto */
  padding: 15px;
}
.rejilla a:hover {
  box-shadow: 0 0 0 2px #ccc; /* efecto para remarcar productos al pasar el cursor por encima */
}
.rejilla img {
  /* para que las imágenes se autoajusten si la rejilla es más pequeña */
  max-width: 100%;
  height: auto;
}
```

Por defecto lo he dejado para que el ancho de cada producto sea de 228px, por lo que el número de columnas se ajustará dependiendo del tamaño del contenedor, sea adaptabe o no.

Sobra decir que podéis modificar lo que querais.

### ¿Dónde poner el código CSS?

Si tenéis Wordpress actualizado a la última versión, es tan fácil como copiar y pegar este código en: `Apariencia > Personalizar > CSS adicional`

![css-wordpress](blog/css-wordpress.png)

Ahí va una demo para que veáis cómo se ve en este mismo sitio web:

[[Demo]](/ejemplo-rejilla/)

¡Un saludo!
