import { getBaconImage, setBaconContent, createElement } from './helpers'

function menu(items) {
  const menuContainer = createElement('div', {
    id: 'menu',
  })

  for (let i = 0; i < items; i += 1) {
    const container = createElement('div', {
      classes: ['menu-item', 'img-overlay'],
    })

    const image = createElement('img', {
      classes: ['background-img'],
    })
    image.src = getBaconImage()

    const title = createElement('h3', {
      classes: ['overlay'],
    })
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
