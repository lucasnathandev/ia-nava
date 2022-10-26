import agent from "./agent"
import home from "./home"
import _404 from "./404"

const route = (event) => {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.getAttribute("to"))
  handleLocation()
}

const routes = [_404, ...home, ...agent]

const handleLocation = async () => {
  const path = window.location.pathname
  const routeIndex = routes.findIndex((route) => Object.keys(route)[0] === path)

  const route = routeIndex !== -1 ? routes[routeIndex][path] : routes[0][404]
  const html = await fetch(route).then((data) => data.text())
  document.querySelector("#app").innerHTML = html
}

window.onpopstate = handleLocation
window.route = route

handleLocation()

const links = document.querySelectorAll("a[to]")
links.forEach((link) => {
  link.onclick = () => {
    route()
  }
})

export default {
  route,
  routes,
}
