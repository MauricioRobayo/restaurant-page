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

function setElementProperty({ key, value }, element) {
  if (key === 'classes') {
    element.classList.add(...value)
  } else if (key === 'dataset') {
    Object.keys(value).forEach(data => {
      element.setAttribute(`data-${data}`, value[data])
    })
  } else {
    // eslint-disable-next-line no-param-reassign
    element[key] = value
  }
}

function createElement(type, options = {}) {
  const element = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    setElementProperty({ key, value }, element)
  })
  return element
}

function setBaconContent(element, options) {
  const querystring = new URLSearchParams({
    format: 'text',
    ...options,
  }).toString()
  fetch(`https://baconipsum.com/api/?${querystring}`)
    .then(response => response.text())
    .then(text => {
      const content = text.split('\n').filter(p => p !== '')
      element.append(
        ...(content.length === 1
          ? content
          : content.map(p => createElement('p', { textContent: p })))
      )
      return element
    })
    .catch(e => {
      // eslint-disable-next-line no-param-reassign
      element.innerHTML = `<p>
      Somenthing went wrong :(
    </p> <pre><code>
      ${e}
    </code></pre>`
    })
}

export { getImage, setBaconContent, createElement, getGravatarUrl }
