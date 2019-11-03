import './style.scss'
import layout from './js/layout'

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    layout(data.results[0])
  })
