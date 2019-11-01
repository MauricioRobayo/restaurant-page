import { createElement } from './helpers'

function buildLocation(location) {
  const fragment = document.createDocumentFragment()
  const {
    street: { number, name },
    city,
    state,
    country,
  } = location
  const street = createElement('div', {
    textContent: `${number} ${name}`,
  })
  const fullLocation = createElement('div', {
    textContent: `${city}, ${state}, ${country}`,
  })
  fragment.append(street, fullLocation)
  return fragment
}

function contact(siteInfo) {
  const container = createElement('div', {
    classes: ['container'],
  })

  const image = createElement('img', {
    src: siteInfo.picture.thumbnail,
  })

  const name = createElement('div', {
    id: 'contact-name',
    textContent: Object.values(siteInfo.name).join(' '),
  })

  const email = createElement('div', {
    textContent: siteInfo.email,
  })

  const phone = createElement('div', {
    textContent: siteInfo.phone,
  })

  const cell = createElement('div', {
    textContent: siteInfo.cell,
  })

  const location = createElement('div', {
    id: 'contact-location',
  })

  location.appendChild(buildLocation(siteInfo.location))
  container.append(image, name, location, email, phone, cell)
  return container
}
export default contact
