import { events } from "../handlers"

const helper = {
  addClickEventTo(element, handler) {
    element.addEventListener("click", handler)
  },
}

export default {
  example(element) {
    helper.addClickEventTo(element, events.exampleFunction)
  },
}
