import { getBaconImage, setBaconContent, createElement } from './helpers'

function buildNav(items) {
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
  const nav = document.createElement('nav')
  nav.appendChild(fragment)
  return nav
}

function mainPage() {
  const img = document.createElement('img')
  img.src = getBaconImage()

  const headline = document.createElement('h2')
  setBaconContent(headline, {
    type: 'all-meat',
    sentences: 1,
    'start-with-lorem': 1,
  })

  const copy = document.createElement('p')
  setBaconContent(copy, {
    type: 'meat-and-filler',
    paras: 1,
  })

  const nav = buildNav(['Menu', 'Contact'])

  const content = document.querySelector('#content')
  content.append(nav, img, headline, copy)
}

export default mainPage
