---
title: Ejemplo de rejilla adaptable sólo con HTML y CSS
slug: ejemplo-rejilla
noindex: true
---

<style type="text/css">
ul.rejilla {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* productos centrados */
  text-align: center; /* texto centrado */
}
ul.rejilla > li {
  width: 228px; /* ancho de cada producto */
}
ul.rejilla a {
  display: block; /* para que el enlace abarque toda la "celda" del producto */
  padding: 15px;
}
ul.rejilla a:hover {
  box-shadow: 0 0 0 2px #ccc; /* efecto para remarcar productos al pasar el cursor por encima */
}
ul.rejilla img {
  /* para que las imágenes se autoajusten si la rejilla es más pequeña */
  max-width: 100%;
  height: auto;
}

ul.rejilla > li:before {
  content: none;
}
ul.rejilla > li > div {
  padding: 0;
}
ul.rejilla h3 {
  font-size: 1.2em;
  margin-top: 1em;
}
</style>
<ul class='rejilla'>
<li><a href='https://www.amazon.es/dp/B00K76QAEW?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/41nxVS2RBqL._AC_US218_.jpg' width='200' height='200' alt='Técnicas Avanzadas de posicionamiento en buscadores (Títulos Especiales)' /><h3>Técnicas Avanzadas de posicionamiento en buscadores (Títulos Especiales)</h3><p>14,24 €</p></a></li>
<li><a href='https://www.amazon.es/dp/8441537283?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/41RtJ94F3eL._AC_US218_.jpg' width='200' height='200' alt='Seo. Las claves esenciales (Social Media)' /><h3>Seo. Las claves esenciales (Social Media)</h3><p>18,95 €</p></a></li>
<li><a href='https://www.amazon.es/dp/8441537305?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/51oWjrp4zlL._AC_US218_.jpg' width='200' height='200' alt='SEO. Técnicas Avanzadas (Social Media)' /><h3>SEO. Técnicas Avanzadas (Social Media)</h3><p>28,98 €</p></a></li>
<li><a href='https://www.amazon.es/dp/8494568310?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/41yR2JODdwL._AC_US218_.jpg' width='200' height='200' alt='Google AdWords: Trucos y estrategias para el éxito' /><h3>Google AdWords: Trucos y estrategias para el éxito</h3><p>23,75 €</p></a></li>
<li><a href='https://www.amazon.es/dp/B00HH960BU?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/51CkkImQcGL._AC_US218_.jpg' width='200' height='200' alt='Marketing Online: Colección: La serie el completo' /><h3>Marketing Online: Colección: La serie el completo</h3><p>9,99 €</p></a></li>
<li><a href='https://www.amazon.es/dp/8441537097?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/51XnRzjoOKL._AC_US218_.jpg' width='200' height='200' alt='Marketing Analytics (Social Media)' /><h3>Marketing Analytics (Social Media)</h3><p>15,2 €</p></a></li>
<li><a href='https://www.amazon.es/dp/B01A8ZF5H4?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/51pp8Y8AS7L._AC_US218_.jpg' width='200' height='200' alt='Las 25 mejores páginas de Facebook: Cómo conseguir miles de fans para vender más' /><h3>Las 25 mejores páginas de Facebook: Cómo conseguir miles de fans para vender más</h3><p>9,99 €</p></a></li>
<li><a href='https://www.amazon.es/dp/1449304214?tag=seacomoseo-21' rel='nofollow' target='_blank'><img src='https://images-eu.ssl-images-amazon.com/images/I/41gZRfKJTWL._AC_US218_.jpg' width='200' height='200' alt='The Art of SEO (Theory in Practice)' /><h3>The Art of SEO (Theory in Practice)</h3><p>41,6 €</p></a></li>
</ul>