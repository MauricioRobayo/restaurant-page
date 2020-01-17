import { setBaconContent, createElement } from './helpers'

function about(paras) {
  const copy = createElement('p', {
    classes: ['copy'],
  })
  setBaconContent(copy, {
    type: 'meat-and-filler',
    paras,
  })
  return copy
}

export default about
