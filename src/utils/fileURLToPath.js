import jiti from 'jiti'

/**
 * url.fileURLToPath for the browser and node.js
 */
export function fileURLToPath(fileUrl) {
  if (typeof window !== 'undefined' && window.URL && typeof window.URL === 'function') {
    return new URL(fileUrl).pathname
  }
  else {
    const { URL } = jiti()('url')
    return new URL(fileUrl).pathname
  }
}
