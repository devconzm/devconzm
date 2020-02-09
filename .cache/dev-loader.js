import { BaseLoader } from "./loader"
import { findPath } from "./find-path"

class DevLoader extends BaseLoader {
  constructor(syncRequires, matchPaths) {
    const loadComponent = chunkName =>
      Promise.resolve(syncRequires.components[chunkName])
    super(loadComponent, matchPaths)
  }

  loadPage(pagePath) {
    const realPath = findPath(pagePath)
    return super.loadPage(realPath).then(result =>
      require(`./socketIo`)
        .getPageData(realPath)
        .then(() => result)
    )
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      // when we can't find a proper 404.html we fallback to dev-404-page
      // we need to make sure to mark it as not found.
      if (data.status === `failure`) {
        return this.loadPageDataJson(`/dev-404-page/`).then(result =>
          Object.assign({}, data, result)
        )
      }

      return data
    })
  }

  doPrefetch(pagePath) {
    return Promise.resolve(require(`./socketIo`).getPageData(pagePath))
  }
}

export default DevLoader
