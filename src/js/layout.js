import {
  getImage,
  setBaconContent,
  createElement,
  getGravatarUrl,
} from './helpers'

function buildNavItem(pageName) {
  const token = pageName.toLowerCase()
  const navItemContainer = createElement('div', {
    classes: ['nav-item-wrapper'],
  })
  const navItem = createElement('a', {
    href: `#${token}`,
    id: `nav-${token}`,
    dataset: { page: token },
    textContent: pageName.replace(/^\w/, c => c.toUpperCase()),
    classes: ['nav-item'],
  })
  navItemContainer.append(navItem)
  return navItemContainer
}

function loadContent(siteInfo, page) {
  const container = document.querySelector('#page-container')
  const currentPage = container.firstChild
  if (currentPage !== null) {
    container.replaceChild(page, currentPage)
  } else {
    container.append(page)
  }
}

function buildNav(siteInfo, pages) {
  const nav = createElement('nav')
  nav.append(...Object.keys(pages).map(pageName => buildNavItem(pageName)))
  nav.addEventListener('click', event => {
    if (event.target.matches('.nav-item')) {
      document.querySelectorAll('.nav-item').forEach(navItem => {
        navItem.classList.remove('active')
      })
      event.target.classList.add('active')
      loadContent(siteInfo, pages[event.target.dataset.page])
    }
  })
  return nav
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
function headLineWrapper() {
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
  return headlineWrapper
}

function heroImg() {
  const img = createElement('img', {
    classes: ['background-img'],
  })
  img.src = getImage({
    width: 600,
    height: 460,
    categories: ['bistro', 'restaurant'],
  })
  return img
}

function heroSection(siteInfo) {
  const hero = createElement('div', {
    id: 'hero',
    classes: ['img-overlay'],
  })
  hero.append(buildHeader(siteInfo), heroImg(), headLineWrapper())
  return hero
}

function pageContainer() {
  return createElement('div', {
    id: 'page-container',
  })
}

function layout(siteInfo, pages) {
  document
    .querySelector('#content')
    .append(
      heroSection(siteInfo),
      buildNav(siteInfo, pages),
      pageContainer(),
      buildFooter()
    )
}

export default layout
