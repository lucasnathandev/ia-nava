import { config, methods } from "./api"

const { baseURL } = config,
  { getDataFrom, postDataFrom, putDataFrom, deleteDataFrom } = methods
const get = {
    agent: () => getDataFrom(baseURL + "/agent"),
    camera: () => getDataFrom(baseURL + "/camera"),
  },
  post = {
    agent: (payload) => postDataFrom(baseURL + "/agent", payload),
  },
  put = {
    agent: (payload) => putDataFrom(baseURL + "/agent", payload),
  },
  del = {
    agent: (payload) => deleteDataFrom(baseURL + "/agent", payload),
  }

export { get, post, put, del }
