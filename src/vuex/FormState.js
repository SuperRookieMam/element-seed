import Vue from 'vue'
const CTX = CONTEXT_PATH + 'data/'
export default class FormState {
  namespaced = true
  actions = {
    get ({ state }, {url, params}) {
      return Vue.http.get(CTX + url, params)
    },
    post ({ state }, {url, params}) {
      return Vue.http.post(CTX + url, params)
    },
    update ({ state }, { url, params }) {
      return Vue.http.put(CTX + url, params)
    },
    del ({ state }, { url, params }) {
      return Vue.http.delete(CTX + url)
    }
  }
}
