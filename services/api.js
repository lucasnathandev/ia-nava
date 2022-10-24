export const config = {
  baseURL: "http://localhost:3000",
}

/**
 *
 * @param {String} url
 * @returns the data from the API response.
 */

export const methods = {
  async getDataFrom(url) {
    return await fetch(url).then((r) => r.json())
  },

  /**
   *
   * @param {String} url
   * @param {Object} data
   * @returns the data from the API response.
   */

  async postDataFrom(url, data) {
    return await fetch(url, { method: "post", body: data }).then((r) =>
      r.json()
    )
  },

  /**
   *
   * @param {String} url
   * @param {Object} data
   * @returns the updated data from the API response or false as exception.
   */

  async putDataFrom(url, data) {
    return data.id
      ? await fetch(url, { method: "put", body: data }).then((r) => r.json())
      : false
  },

  /**
   *
   * @param {String} url is the API request address.
   * @param {Object} filter Is the data we want to find into the API.
   * @returns the deleted data from the API response or false as exception.
   */

  async deleteDataFrom(url, filter) {
    return filter.id
      ? await fetch(url, { method: "delete", body: filter }).then((r) =>
          r.json()
        )
      : false
  },
}
