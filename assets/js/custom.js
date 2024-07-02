// Budget
const budget = document.getElementById('budget')

if (budget) {
  const title = document.getElementById('budget-title')
  const name = document.getElementById('name')
  const web = document.getElementById('web')
  const seo = document.getElementById('seo')
  const sem = document.getElementById('sem')
  const sections = document.getElementById('sections')
  const pages = document.getElementById('pages')
  const langs = document.getElementById('langs')
  // const ecommerceAux = document.getElementById('ecommerce-aux')
  // const ecommerce = document.getElementById('ecommerce')
  // const ecommerceCatalogue = document.getElementById('ecommerce-catalogue')
  // const ecommerceBasic = document.getElementById('ecommerce-basic')
  // const ecommerceFull = document.getElementById('ecommerce-full')
  // const directory = document.getElementById('directory')
  const linkbuilding = document.getElementById('linkbuilding')
  const webMaintenance = document.getElementById('web-maintenance')
  const seoMaintenance = document.getElementById('seo-maintenance')
  const semMaintenance = document.getElementById('sem-maintenance')
  const bill = document.getElementById('bill')
  const resultFixed = document.getElementById('result-fixed')
  const resultOffer = document.getElementById('result-offer')
  const resultMonthly = document.getElementById('result-monthly')
  const resultQuarterly = document.getElementById('result-quarterly')
  const resultSubtotal = document.getElementById('result-subtotal')
  const resultBill = document.getElementById('result-bill')
  const resultIva = document.getElementById('result-iva')
  const resultTotal = document.getElementById('result-total')
  // const pricesFixed = document.getElementById('prices-fixed')
  // const pricesQuarterly = document.getElementById('prices-quarterly')
  const pricesSubtotal = document.getElementById('prices-subtotal')
  const pricesIva = document.getElementById('prices-iva')
  // const pricesTotal = document.getElementById('prices-total')
  const link = document.getElementById('budget-link')
  const print = document.getElementById('budget-print')
  const today = new Date().toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' })

  function calculateBudget () {
    const sectionsValue = Number(sections.value)
    const langsValue = Number(langs.value) || 1
    const pagesValue = Number(pages.value)
    const prices = {
      sections: 100 * sectionsValue,
      langs: 0.15,
      // ecommerce: {
      //   catalogue: 100,
      //   basic: 200,
      //   full: 300
      // },
      // directory: 200,
      pages: {
        web:       { base: 300,  add: 100, active: ( web.checked && !seo.checked && !sem.checked), max: 300,  maxAdd: 100 },
        seo:       { base: 800,  add: 100, active: (!web.checked &&  seo.checked && !sem.checked), max: 800,  maxAdd: 100 },
        sem:       { base: 300,  add: 100, active: (!web.checked && !seo.checked &&  sem.checked), max: 300,  maxAdd: 100 },
        webSeo:    { base: 500,  add: 150, active: ( web.checked &&  seo.checked && !sem.checked), max: 1200, maxAdd: 200 },
        webSem:    { base: 600,  add: 150, active: ( web.checked && !seo.checked &&  sem.checked), max: 600,  maxAdd: 200 },
        seoSem:    { base: 1000, add: 150, active: (!web.checked &&  seo.checked &&  sem.checked), max: 1100, maxAdd: 200 },
        webSeoSem: { base: 700,  add: 200, active: ( web.checked &&  seo.checked &&  sem.checked), max: 1500, maxAdd: 300 }
      },
      linkbuilding: 120,
      maintenance: {
        web: 30,
        seo: 30,
        sem: 30
      }
    }
    const billPercent = bill.checked ? 1.1 : 1
    let priceFixed = 0
    let priceOffer = 0
    let priceMonthly = 0
    let priceQuarterly = 0
    let priceSubtotal = 0
    let priceBill = 0
    let priceIva = 0
    let priceTotal = 0

    Object.entries(prices.pages).forEach(([k, e]) => {
      if (e.active) {
        priceFixed += e.base + pagesValue * e.add
        priceOffer += e.max + pagesValue * e.maxAdd
      }
    })

    if (web.checked) {
      priceFixed += prices.sections
      priceOffer += prices.sections
      // if (ecommerce.checked) {
      //   if (ecommerceCatalogue.checked) { priceFixed += prices.ecommerce.catalogue }
      //   if (ecommerceBasic.checked)     { priceFixed += prices.ecommerce.basic }
      //   if (ecommerceFull.checked)      { priceFixed += prices.ecommerce.full }
      // }
      // if (directory.checked) { priceFixed += prices.directory }
    }

    if (web.checked && webMaintenance.checked) { priceMonthly += prices.maintenance.web * (pagesValue + 1) }
    if (seo.checked && seoMaintenance.checked) { priceMonthly += prices.maintenance.seo * (pagesValue + 1) }
    if (sem.checked && semMaintenance.checked) { priceMonthly += prices.maintenance.sem * (pagesValue + 1) }

    if (web.checked) {
      const langsPercent = (langsValue - 1) * prices.langs + 1
      priceFixed *= langsPercent
      priceOffer *= langsPercent
      priceMonthly *= langsPercent
    }

    priceBill = Math.round(priceFixed + priceMonthly * 3)
    priceFixed = Math.round(priceFixed * billPercent)
    priceOffer = Math.round((priceOffer * billPercent) - priceFixed)
    priceMonthly = Math.round(priceMonthly * billPercent)
    if (seo.checked && linkbuilding.checked) {
      priceMonthly += prices.linkbuilding
      priceSubtotal += prices.linkbuilding * 3
      priceBill += prices.linkbuilding * 3
    }
    priceQuarterly = Math.round(priceMonthly * 3)
    priceSubtotal = Math.round(priceFixed + priceQuarterly)
    priceIva = Math.round(priceSubtotal * 0.21)
    priceTotal = Math.round(priceSubtotal * 1.21)

    resultFixed.innerHTML = priceFixed.toLocaleString('de-DE')
    resultOffer.innerHTML = priceOffer.toLocaleString('de-DE')
    resultMonthly.innerHTML = priceMonthly.toLocaleString('de-DE')
    resultQuarterly.innerHTML = priceQuarterly.toLocaleString('de-DE')

    if (bill.checked) {
      pricesSubtotal.classList.remove('d-none')
      pricesIva.classList.remove('d-none')
      resultSubtotal.innerHTML = priceSubtotal.toLocaleString('de-DE')
      resultBill.innerHTML = priceBill.toLocaleString('de-DE')
      resultIva.innerHTML = priceIva.toLocaleString('de-DE')
      resultTotal.innerHTML = priceTotal.toLocaleString('de-DE')
    } else {
      pricesSubtotal.classList.add('d-none')
      pricesIva.classList.add('d-none')
      resultTotal.innerHTML = priceSubtotal.toLocaleString('de-DE')
    }

    // ecommerceAux.checked = ecommerce.checked && web.checked
  }

  // Link Button
  link.addEventListener('click', e => {
    e.preventDefault()
    const values = [
      name.value,
      web.checked ? 1 : 0,
      seo.checked ? 1 : 0,
      sem.checked ? 1 : 0,
      sections.value,
      pages.value,
      langs.value,
      /* ecommerceAux.checked ? 1 : */ 0,
      /* ecommerce.checked ? 1 : */ 0,
      /* ecommerceCatalogue.checked ? 1 : */ 0,
      /* ecommerceBasic.checked ? 1 : */ 0,
      /* ecommerceFull.checked ? 1 : */ 0,
      /* directory.checked ? 1 : */ 0,
      linkbuilding.checked ? 1 : 0,
      webMaintenance.checked ? 1 : 0,
      seoMaintenance.checked ? 1 : 0,
      semMaintenance.checked ? 1 : 0
    ]
    const obj = JSON.stringify(values)
    navigator.clipboard.writeText(window.location.href.split('#')[0] + '#budget_' + btoa(obj))
  })

  // OnLoad Link
  if (window.location.hash) {
    const hash = window.location.hash
    if (hash.indexOf('budget_') !== -1) {
      const base64 = atob(hash.split('#budget_')[1])
      const values = JSON.parse(base64)
      console.log(values)
      name.value = values[0]
      web.checked = values[1]
      seo.checked = values[2]
      sem.checked = values[3]
      sections.value = values[4]
      pages.value = values[5]
      langs.value = values[6]
      // ecommerceAux.checked = values[7]
      // ecommerce.checked = values[8]
      // ecommerceCatalogue.checked = values[9]
      // ecommerceBasic.checked = values[10]
      // ecommerceFull.checked = values[11]
      // directory.checked = values[12]
      linkbuilding.checked = values[13]
      webMaintenance.checked = values[14]
      seoMaintenance.checked = values[15]
      semMaintenance.checked = values[16]
      bill.checked = values[17] === undefined ? true : values[17]
    }
  }

  // Print Button
  print.addEventListener('click', e => {
    e.preventDefault()
    title.innerHTML = `${name.value || 'ejemplo.com'} · ${today}`
    window.print()
  })

  // Calculate Budget OnLoad Window and OnChange Budget
  calculateBudget()
  budget.addEventListener('change', event => {
    calculateBudget()
  })
}

window.addEventListener('load', () => {
  // Requeriments
  const requirementsForm = document.querySelector('#body-requerimientos .contact__form')

  if (requirementsForm) {
    const allItems = document.querySelectorAll('.contact__form-item:not(:nth-child(4),:nth-child(5)),.row:nth-child(2)')
    const web = document.querySelector('[value="WEB"]')
    const seo = document.querySelector('[value="SEO"]')
    const sem = document.querySelector('[value="SEM"]')
    const webRenew = document.querySelector('[value="Renovar Web"]').parentElement
    // web
    const webRenewItem = webRenew.parentElement
    const domainAccess = document.evaluate('//h3[text()="Acceso a la gestión del dominio"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement
    const domainCompany = document.querySelector('[placeholder="Empresa de contratación"]').parentElement
    const domainUser = document.querySelector('[placeholder="Email y/o Usuario de acceso"]').parentElement
    const domainPassword = document.querySelector('[placeholder="Contraseña"]').parentElement
    const inputsContactForm = document.querySelector('[placeholder="Campos de formulario deseados"]').parentElement
    const contents = document.evaluate('//h3[text()="Contenidos"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement
    const slogan = document.querySelector('[placeholder="Eslogan o breve descripción"]').parentElement
    const features = document.querySelector('[placeholder="Ventajas/Características"]').parentElement
    const sections = document.querySelector('[placeholder="Secciones deseadas"]').parentElement
    const contentsDescription = document.querySelector('.textos').parentElement.parentElement
    const execution = document.querySelector('.columns').parentElement
    const webItems = [
      webRenewItem,
      domainAccess,
      domainCompany,
      domainUser,
      domainPassword,
      inputsContactForm,
      contents,
      slogan,
      features,
      sections,
      contentsDescription,
      execution
    ]
    // seo and sem
    const searchEngin = document.evaluate('//h3[text()="Posicionamiento Web (SEO/SEM)"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement
    const budget = document.querySelector('[placeholder="Presupuesto Mensual"]').parentElement
    const objectives = document.querySelector('[value="Tráfico"]').parentElement.parentElement
    const expectations = document.querySelector('[placeholder="Expectativas"]').parentElement
    const seoSemItems = [
      searchEngin,
      budget,
      objectives,
      expectations
    ]
    // other
    const cms = document.querySelector('[value="Wordpress"]').parentElement.parentElement.parentElement
    const antique = document.querySelector('[placeholder="Antigüedad"]').parentElement
    const webRenewItems = [
      cms,
      antique
    ]

    function requirementsVisibility () {
      if (!web.checked && !seo.checked && !sem.checked) {
        allItems.forEach(e => { e.style.display = 'none' })
      } else {
        allItems.forEach(e => { e.style = null })
        if (web.checked) {
          webItems.forEach(e => { e.style = null })
          if (webRenew.value === 'Renovar Web') {
            webRenewItems.forEach(e => { e.style = null })
          } else {
            webRenewItems.forEach(e => { e.style.display = 'none' })
          }
        } else {
          webItems.forEach(e => { e.style.display = 'none' })
        }
        if (seo.checked || sem.checked) {
          seoSemItems.forEach(e => { e.style = null })
        } else {
          seoSemItems.forEach(e => { e.style.display = 'none' })
        }
      }
    }

    requirementsVisibility()
    document.querySelectorAll('[value="WEB"],[value="SEO"],[value="SEM"],[name="entry.693706772"').forEach(e => {
      e.addEventListener('change', event => {
        requirementsVisibility()
      })
    })
  }
})
