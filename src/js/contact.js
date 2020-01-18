import { createElement } from './helpers'

function buildLocation(location) {
  const fragment = document.createDocumentFragment()
  const {
    street: { number, name },
    city,
    state,
    country,
  } = location
  const street = createElement('p', {
    textContent: `${number} ${name}`,
  })
  const fullLocation = createElement('p', {
    textContent: `${city}, ${state}, ${country}`,
  })
  fragment.append(street, fullLocation)
  return fragment
}

function contactImg(siteInfo) {
  return createElement('img', {
    classes: ['img-rounded'],
    src: siteInfo.picture.large,
  })
}

function contactLocation(siteInfo) {
  const location = createElement('div', {
    id: 'contact-location',
  })
  location.appendChild(buildLocation(siteInfo.location))
  return location
}

function contactPhone(siteInfo) {
  return createElement('p', {
    textContent: siteInfo.phone,
  })
}

function contactEmail(siteInfo) {
  return createElement('p', {
    textContent: siteInfo.email,
  })
}

function contactName(siteInfo) {
  return createElement('p', {
    id: 'contact-name',
    textContent: Object.values(siteInfo.name).join(' '),
  })
}

function contact(siteInfo) {
  const container = createElement('div', {
    id: 'contact',
  })

  container.append(
    contactImg(siteInfo),
    contactName(siteInfo),
    contactLocation(siteInfo),
    contactEmail(siteInfo),
    contactPhone(siteInfo)
  )

  return container
}
export default contact
