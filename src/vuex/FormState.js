import Vue from 'vue'
const CTX = CONTEXT_PATH + 'data/'
export default class FormState {
  namespaced = true
  /* getters = {
    data: state => { return state.data }
  } */
  actions = {
    get ({ state }, {url, params}) {
     /* Vue.http.get(CTX + url, params).then(result => {
        if (result.code === 0) {
          state.data = result.data.list
          alert(state.data)
          return result.data.list
        }
      }) */
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
