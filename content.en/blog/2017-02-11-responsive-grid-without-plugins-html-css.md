---
title: How to create an adaptable grid without plugins, only with HTML and CSS
title_seo: ''
slug: responsive-grid-without-plugins-html-css
description: ''
image: rejilla-adaptable-sin-plugins-html-css.jpg
categories: []
tags: []
author: admin
toc: true
draft: false
noindex: false
date: 2017-02-11
lastmod: 2021-11-30
translationKey: responsive-grid-without-plugins-html-css
---

Hello! With the whole theme east of [#RETOTSA](https://www.youtube.com/watch?v=FXqwMT6bcdw "nofollow") [[2]](https://www.youtube.com/watch?v=2A8XYbPXfo0 "nofollow") we are a few learning a lot based on doubts and answers in the Telegram group, and among many of the doubts arises the issue of creating the product rack or categories for the __tsa-commerce__.

I have asked me several times with which plugin I do, but I don't use plugins and not even WordPress!

> How? But why don't you use WordPress?

Because for something as "static" as the TSAS, to my personally, I find it more cumbersome to have a database, make backups, update Core, topics and plugins, etc. And come on, working directly with HTML the load speed usually improves a lot.

To the grain: I do it directly with HTML and CSS code. Something very simple and clean (in the end I put a link to an example demo).

First I will talk about the HTML code, the structure you have to have and a base template in a simple tool that you can use to expedite the process; and then the CSS code.

**If you don't understand any code, do not fear**, I explain it to you so you can apply it despite this, following the steps you should not have problems. However, some clarifications I will do, since I would have liked to receive them before knowing this.

## HTML code

For the HTML code what we need is something like this:

```html
<ul class="rejilla">
  <li>
    <a href="/product-link-1" rel="nofollow" target="_blank">
      <img src="/url-image-1" width="200" height="200" alt="Example name 1" />
      <h3>Example name 1</h3>
      <p>14.39 €</p>
    </a>
  </li>

  <li>
    <a href="/product-link-2" rel="nofollow" target="_blank">
      <img src="/url-image-2" width="200" height="200" alt="Example name 2" />
      <h3>Example name 2</h3>
      <p>37.95 €</p>
    </a>
  </li>
</ul>
```

Obviously this is an example and you can make many other ways or adding and removing elements, but for you to understand, the elements that care are the `ul` and` li` labels with their `class` and `grid` and `product` respectively, the rest is what you want to have within each element of the rack. For this example, since I write this mainly for those who want to apply it to the Tsas, I have placed for each element what is usually put to each product:

- 1 link that wraps to all the elements, with the attributes `rel nofollow` to be happy to Mr. Google and` target _blank` so that they open in different tabs and do not leave our site.
- 1 image with wide and high of 200px and an attribute `alt`.
- 1 H3 header with the name of the product.
- 1 paragraph where the price is contained.

Everything that is locked in `<li> ... ... </ul> ` is replicable, so you can copy and paste as many as you need, as long as you leave all the products wrapped in `<ul class="rejilla">...</ul>`. I repeat: this can be changed for what pleases one.

### Tool and template to accelerate the process

For these products that we replicate as a base, it would be great to take advantage of a spreadsheet where we each by line and each column with their corresponding information, where to copy and then hit where it corresponds to the HTML, right?

**Well, I leave you even more massively!**:

To that same spreadsheet you can add one more column with some form to automatically return the HTML code you need, **Ready to copy and paste!**

In the following link you can see and copy a ** template of Spreadsheets ** (Google Excel) in your Google Drive account and edit it to your liking:

[btn Spreadsheets Template](https://docs.google.com/spreadsheets/d/1fuPoC3BZ7Tt97j3FcQN7piUu1keMPWl8XC6EUTrIEck "nofollow")

Modifying those formulas (those in yellowish cells) is quite simple and easy to understand if you handle a little html, since all I do is concatenate codes as texts (those in double quotes) with the values ​​with the values of each column through the `&` symbol.

From here, the only thing to do is fill out data in their corresponding columns and copy any yellowish cell (which is where the formulas are) and paste them, inside the same column, in the ranks where there is data, always putting after The last one `</ul>` as seen in the example of the template.

Finally, you just have to select and copy ** All cells with content of the last column ** and paste it where we want. **Details**:

- The result of the codes of the last column are obtained in a single line for each product to prevent Spreadsheet from generating additional quotes when copying (if you use Spreadsheet often for things like that, surely this is familiar to you).
- In the formulas I have put the HTML values ​​in single quotes so that it does not look very chaotic, since putting double quots as text within other double quotes should be duplicated in themselves so that not error, leaving a group of double quotes quite confusing. But come on, so with single quotes is more than valid to copy and paste.

### Where to put the HTML code?

If you use a visual editor, you should look for a botontic that allows you to write directly in code. In the case of WordPress, when writing a post or page, you have it next to where `Visual`, where` HTML` indicates.

![Visual editor HTML WordPress](editor-visual-html-wordpress.png)

**Beware**: After pasteing the data in the WordPress HTML area, if you return to visual mode and again in HTML mode, you will see that it unravels it a little, but the result will finally be the same.

If you stop to think a little, the possibilities that this "nonsense" has to concatenate information as a codes is ... Cremita! And I don't even have the rest of the special formulas of Spreadsheet! What I have put here is something super simple compared to how I do it with my tsas, but it is about making you known the tools so that each one is mounted their own work system the best you can.

## CSS Code

There goes the CSS code with some quite explanatory news in case you do not know about the subject:

```css
.rejilla {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* centered products */
  text-align: center; /* centered text */
}
.rejilla > li {
  width: 228px; /* width of each product */
}
.rejilla a {
  display: block; /* so that the link covers the entire "cell" of the product */
  padding: 15px;
}
.rejilla a:hover {
  box-shadow: 0 0 0 2px #ccc; /* effect to highlight products when passing cursor over */
}
.rejilla img {
  /* for the images to self adjust if the rack is smaller */
  max-width: 100%;
  height: auto;
}
```

By default I have left it so that the width of each product is 228px, so the number of columns will be adjusted depending on the size of the container, whether adapt or not.

Needless to say, you can modify what you want.

### Where to put the CSS code?

If you have wordPress updated to the latest version, it is as easy as copying and paste this code in: `Appearance > Customize > CSS additional`

![css-wordpress](css-wordpress.png)

There goes a demo so you can see how it looks on this same website:

[btn Demo](/en/grid-example/)

All the best!
