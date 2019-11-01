import crypto from 'crypto'
import { getBaconImage, setBaconContent, createElement } from './helpers'
import menu from './menu'
import contact from './contact'

function loadContent(siteInfo, page) {
  const pageContainer = document.querySelector('#page-container')
  pageContainer.innerHTML = ''
  switch (page) {
    case 'menu':
      pageContainer.appendChild(menu(3))
      break
    case 'contact':
      pageContainer.appendChild(contact(siteInfo))
      break
    default:
      break
  }
}

function buildNav(siteInfo, items) {
  const fragment = document.createDocumentFragment()
  items.forEach(item => {
    const token = item.toLowerCase()
    const navItem = createElement('a', {
      href: `#${token}`,
      id: `nav-${token}`,
      dataset: { page: token },
      textContent: item,
      classes: ['nav-item'],
    })
    fragment.appendChild(navItem)
  })
  const nav = createElement('nav')
  nav.appendChild(fragment)
  nav.addEventListener('click', event => {
    if (event.target.classList.contains('nav-item')) {
      loadContent(siteInfo, event.target.dataset.page)
    }
  })
  return nav
}

function layout(siteInfo) {
  const img = createElement('img', { id: 'hero-img' })
  img.src = getBaconImage({ width: 600, height: 400 })

  const content = document.querySelector('#content')

  const headline = createElement('h2')
  setBaconContent(headline, {
    type: 'all-meat',
    sentences: 1,
    'start-with-lorem': 1,
  })

  const copy = createElement('p')
  setBaconContent(copy, {
    type: 'meat-and-filler',
    paras: 1,
  })

  const nav = buildNav(siteInfo, ['Menu', 'Contact'])
  const pageContainer = createElement('div', {
    id: 'page-container',
  })
  content.append(img, headline, copy, nav, pageContainer)

  const header = createElement('header')
  const hash = crypto
    .createHash('md5')
    .update(siteInfo.email)
    .digest('hex')
  const logo = createElement('img', {
    id: 'logo',
    alt: 'logo',
    src: `https://www.gravatar.com/avatar/${hash}?s=64&d=identicon`,
  })
  const title = createElement('h1', {
    id: 'title',
    textContent: `${siteInfo.name.last}'s Restaurant`,
  })
  header.append(logo, title)
  content.prepend(header)
}

export default layout
