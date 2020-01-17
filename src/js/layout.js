import {
  getImage,
  setBaconContent,
  createElement,
  getGravatarUrl,
} from './helpers'
import menu from './menu'
import contact from './contact'
import about from './about'

const ABOUT_PARAGRAPHS = 6
const MENU_ITEMS = 12

const menuItems = ['Menu', 'About', 'Contact']

function buildNavItem(item, selected = '') {
  const token = item.toLowerCase()
  const navItemContainer = createElement('div', {
    classes: ['nav-item-wrapper'],
  })
  if (token === selected.toLowerCase()) {
    navItemContainer.textContent = item
  } else {
    const navItem = createElement('a', {
      href: `#${token}`,
      id: `nav-${token}`,
      dataset: { page: token },
      textContent: item,
      classes: ['nav-item'],
    })
    navItemContainer.append(navItem)
  }
  return navItemContainer
}

function buildNav(siteInfo, items, selected = '') {
  const nav = createElement('nav')
  nav.append(...items.map(item => buildNavItem(item, selected)))
  nav.addEventListener('click', event => {
    event.target.parentElement
      .querySelectorAll('.nav-item')
      .forEach(navItem => {
        navItem.classList.remove('active')
      })
    if (event.target.classList.contains('nav-item')) {
      event.target.classList.add('active')
      // eslint-disable-next-line no-use-before-define
      loadContent(siteInfo, event.target.dataset.page)
    }
  })
  return nav
}

function loadContent(siteInfo, page) {
  const pageContainer = document.querySelector('#page-container')
  document.querySelector('nav').replaceWith(buildNav(siteInfo, menuItems, page))
  pageContainer.innerHTML = ''
  switch (page) {
    case 'menu':
      pageContainer.appendChild(menu(MENU_ITEMS))
      break
    case 'contact':
      pageContainer.appendChild(contact(siteInfo))
      break
    case 'about':
      pageContainer.appendChild(about(ABOUT_PARAGRAPHS))
      break
    default:
      break
  }
}

function buildHeader(siteInfo) {
  const header = createElement('header')
  const logo = createElement('img', {
    classes: ['img-rounded'],
    id: 'logo',
    alt: 'logo',
    src: getGravatarUrl({ email: siteInfo.email, size: 48 }),
  })
  const title = createElement('h1', {
    id: 'title',
    textContent: `${siteInfo.name.last}'s Bistro`,
  })
  header.append(logo, title)
  return header
}

function buildFooter() {
  const footer = createElement('footer')
  const warning = createElement('a', {
    href: './',
    textContent: 'refresh it',
  })
  footer.append(
    'New information for this site is fetched every time you ',
    warning,
    '.'
  )
  return footer
}

function layout(siteInfo) {
  const img = createElement('img', {
    classes: ['background-img'],
  })
  img.src = getImage({
    width: 600,
    height: 460,
    categories: ['bistro', 'restaurant'],
  })

  const content = document.querySelector('#content')

  const hero = createElement('div', {
    id: 'hero',
    classes: ['img-overlay'],
  })

  const headlineWrapper = createElement('div', {
    classes: ['headline', 'overlay'],
  })
  const headline = createElement('h2')
  setBaconContent(headline, {
    type: 'all-meat',
    sentences: 1,
    'start-with-lorem': 1,
  })
  headlineWrapper.append(headline)

  const nav = buildNav(siteInfo, menuItems)
  const pageContainer = createElement('div', {
    id: 'page-container',
  })
  hero.append(buildHeader(siteInfo), img, headlineWrapper)
  content.append(hero, nav, pageContainer, buildFooter())
}

export default layout
