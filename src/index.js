import './style.scss'
import menu from './js/menu'
import about from './js/about'
import contact from './js/contact'
import layout from './js/layout'

function loadContent({ aboutParagraphs, menuItems }) {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const siteInfo = data.results[0]
      const menuPage = menu(menuItems)
      const aboutPage = about(aboutParagraphs)
      const contactPage = contact(siteInfo)
      layout(siteInfo, {
        menu: menuPage,
        about: aboutPage,
        contact: contactPage,
      })
      return data
    })
}

loadContent({
  aboutParagraphs: 4,
  menuItems: 12,
})
