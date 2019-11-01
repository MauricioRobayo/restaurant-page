import { getBaconImage, setBaconContent } from './helpers'

function menu(items) {
  const fragment = document.createDocumentFragment()

  for (let i = 0; i < items; i += 1) {
    const container = document.createElement('div')

    const image = document.createElement('img')
    image.src = getBaconImage()

    const title = document.createElement('h2')
    setBaconContent(title, {
      type: 'all-meat',
      sentences: 1,
    })

    const description = document.createElement('p')
    setBaconContent(description, {
      type: 'meat-and-filler',
      paras: 1,
    })
    container.append(image, title, description)
    fragment.appendChild(container)
  }
  return fragment
}

export default menu
