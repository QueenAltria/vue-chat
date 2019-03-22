const defaultKey="chat_vuex"

export default {
  save (key=defaultKey, val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  },
  fetch (key=defaultKey) {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  },
  clear () {
    window.localStorage.clear()
  },
  remove (key=defaultKey) {
    window.localStorage.removeItem(key)
  }
}
