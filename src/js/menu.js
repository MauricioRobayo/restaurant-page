import { getBaconImage, setBaconContent, createElement } from './helpers'

function menu(items) {
  const menuContainer = createElement('div', {
    id: 'menu-container',
  })

  for (let i = 0; i < items; i += 1) {
    const container = createElement('div', {
      classes: ['menu-item'],
    })

    const image = createElement('img')
    image.src = getBaconImage()

    const title = createElement('h3')
    setBaconContent(title, {
      type: 'all-meat',
      sentences: 1,
    })

    const description = createElement('p')
    setBaconContent(description, {
      type: 'meat-and-filler',
      paras: 1,
    })
    container.append(image, title, description)
    menuContainer.appendChild(container)
  }
  return menuContainer
}

export default menu
