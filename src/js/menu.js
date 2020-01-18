import { getImage, setBaconContent, createElement } from './helpers'

function menuDescription() {
  const description = createElement('p')
  setBaconContent(description, {
    type: 'meat-and-filler',
    paras: 1,
  })
  return description
}

function menuTitle() {
  const title = createElement('h3', {
    classes: ['overlay'],
  })
  setBaconContent(title, {
    type: 'all-meat',
    sentences: 1,
  })
  return title
}

function menuImg() {
  return createElement('img', {
    src: getImage({ categories: ['dish', 'meal'] }),
    loading: 'lazy',
    classes: ['background-img'],
  })
}

function menu(items) {
  const menuContainer = createElement('div', {
    id: 'menu',
  })

  for (let i = 0; i < items; i += 1) {
    const container = createElement('div', {
      classes: ['menu-item', 'img-overlay'],
    })
    container.append(menuImg(), menuTitle(), menuDescription())
    menuContainer.appendChild(container)
  }
  return menuContainer
}

export default menu
