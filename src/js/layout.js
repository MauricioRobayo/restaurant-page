import {
  getImage,
  setBaconContent,
  createElement,
  getGravatarUrl,
} from './helpers'
import nav from './nav'

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
      nav(siteInfo, pages),
      pageContainer(),
      buildFooter()
    )
}

export default layout
