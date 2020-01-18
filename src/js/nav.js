import { createElement } from './helpers'

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

function handleEvent(event, siteInfo, pages) {
  if (event.target.matches('.nav-item')) {
    document.querySelectorAll('.nav-item').forEach(navItem => {
      navItem.classList.remove('active')
    })
    event.target.classList.add('active')
    loadContent(siteInfo, pages[event.target.dataset.page])
  }
}

function nav(siteInfo, pages) {
  const navbar = createElement('nav')
  navbar.append(...Object.keys(pages).map(pageName => buildNavItem(pageName)))
  navbar.addEventListener('click', event => handleEvent(event, siteInfo, pages))
  return navbar
}

export default nav
