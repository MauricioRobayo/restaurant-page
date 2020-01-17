import { setBaconContent, createElement } from './helpers'

function about(paras) {
  const aboutContainer = createElement('div', {
    id: 'about',
  })

  const copy = createElement('div', {
    classes: ['copy'],
  })
  setBaconContent(copy, {
    type: 'meat-and-filler',
    paras,
  })
  aboutContainer.append(copy)
  return aboutContainer
}

export default about
