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

function contact(siteInfo) {
  const container = createElement('div', {
    id: 'contact-container',
  })

  const image = createElement('img', {
    classes: ['img-rounded'],
    src: siteInfo.picture.large,
  })

  const name = createElement('p', {
    id: 'contact-name',
    textContent: Object.values(siteInfo.name).join(' '),
  })

  const email = createElement('p', {
    textContent: siteInfo.email,
  })

  const phone = createElement('p', {
    textContent: siteInfo.phone,
  })

  const location = createElement('div', {
    id: 'contact-location',
  })

  location.appendChild(buildLocation(siteInfo.location))
  container.append(image, name, location, email, phone)
  return container
}
export default contact
