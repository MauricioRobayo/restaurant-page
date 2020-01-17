import crypto from 'crypto'

function getImage({ width = 320, height = 210, categories = [] } = {}) {
  // This random number is appended to the request
  // to ensure a new request is made everytime the
  // function is called.
  // Otherwise the browser gets the image cached
  // for the random image url.
  const randomNum = Math.floor(Math.random() * 10000)
  return `https://source.unsplash.com/${width}x${height}/?${categories.join(
    ','
  )}&${randomNum}`
}

function getGravatarUrl({ email, size = 32, type = 'identicon' }) {
  const hash = crypto
    .createHash('md5')
    .update(email)
    .digest('hex')
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${type}`
}

function setBaconContent(element, options) {
  const querystring = new URLSearchParams({
    format: 'text',
    ...options,
  }).toString()
  fetch(`https://baconipsum.com/api/?${querystring}`)
    .then(response => response.text())
    .then(textContent => {
      const content = textContent.split('\n')
      // eslint-disable-next-line no-param-reassign
      element.innerHTML =
        content.length === 1
          ? textContent
          : content.map(p => `<p>${p}</p>`).join('')
    })
}

function createElement(type, options = {}) {
  const element = document.createElement(type)
  Object.keys(options).forEach(key => {
    if (key === 'classes') {
      element.classList.add(...options[key])
    } else if (key === 'dataset') {
      Object.keys(options[key]).forEach(data => {
        element.setAttribute(`data-${data}`, options[key][data])
      })
    } else {
      element[key] = options[key]
    }
  })
  return element
}

export { getImage, setBaconContent, createElement, getGravatarUrl }