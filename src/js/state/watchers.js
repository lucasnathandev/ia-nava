import state from "./state"

const reactiveHandler = {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    return result
  },
}

const watch = Object.keys(state).map((name) => {
  return new Proxy(state[name], reactiveHandler)
})
export default watch
