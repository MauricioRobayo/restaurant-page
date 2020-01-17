import {
  getImage,
  setBaconContent,
  createElement,
  getGravatarUrl,
} from './helpers'

function buildNavItem(pageName, selected = '') {
  const token = pageName.toLowerCase()
  const navItemContainer = createElement('div', {
    classes: ['nav-item-wrapper'],
  })
  if (token === selected.toLowerCase()) {
    navItemContainer.textContent = pageName
  } else {
    const navItem = createElement('a', {
      href: `#${token}`,
      id: `nav-${token}`,
      dataset: { page: token },
      textContent: pageName.replace(/^\w/, c => c.toUpperCase()),
      classes: ['nav-item'],
    })
    navItemContainer.append(navItem)
  }
  return navItemContainer
}

function buildNav(siteInfo, pages, selected = '') {
  const nav = createElement('nav')
  nav.append(
    ...Object.keys(pages).map(pageName => buildNavItem(pageName, selected))
  )
  nav.addEventListener('click', event => {
    event.target.parentElement
      .querySelectorAll('.nav-item')
      .forEach(navItem => {
        navItem.classList.remove('active')
      })
    if (event.target.matches('.nav-item')) {
      event.target.classList.add('active')
      // eslint-disable-next-line no-use-before-define
      loadContent(siteInfo, pages[event.target.dataset.page])
    }
  })
  return nav
}

function loadContent(siteInfo, page) {
  const pageContainer = document.querySelector('#page-container')
  const currentPage = pageContainer.firstChild
  if (currentPage !== null) {
    pageContainer.replaceChild(page, currentPage)
  } else {
    pageContainer.append(page)
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
    'Random information for this site is fetched every time you ',
    warning,
    '.'
  )
  return footer
}

function layout(siteInfo, pages) {
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

  const nav = buildNav(siteInfo, pages)
  const pageContainer = createElement('div', {
    id: 'page-container',
  })
  hero.append(buildHeader(siteInfo), img, headlineWrapper)
  content.append(hero, nav, pageContainer, buildFooter())
}

export default layout
