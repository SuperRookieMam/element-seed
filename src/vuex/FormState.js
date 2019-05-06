import Vue from 'vue'
import qs from 'qs'

const CTX = CONTEXT_PATH + 'data/'
export default class FormState {
  namespaced = true
  state ={
    data: {}
  }
   getters = {
    data: state => { return state.data }
  }
  mutations = {
    data: (state, data) => {
      state.data = data
    }
  }
  actions = {
    get ({commit, state}, {url, params}) {
      return Vue.http.get(CTX + url + '?' + qs.stringify(params)).then(result => {
        if (result.code === 0) {
          commit('data', result)
          return result
        }
      })
      // return Vue.http.get(CTX + url, params)
    },
    post ({ state }, {url, params}) {
      return Vue.http.post(CTX + url, params)
    },
    update ({ state }, { url, params }) {
      return Vue.http.put(CTX + url, params)
    },
    del ({ state }, { url, params: { id } }) {
      return Vue.http.delete(CTX + url + '/' + id).then(result => {
          return result
      })
    }
  }
}
