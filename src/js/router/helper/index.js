export const Route = function (path, htmlPath) {
  return {
    [`${path}`]: htmlPath,
  }
}
