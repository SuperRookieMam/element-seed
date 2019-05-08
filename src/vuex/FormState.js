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
      if (params) {
        return Vue.http.get(CTX + url + '?' + qs.stringify(params)).then(result => {
            commit('data', result)
            return result
        })
      } else {
        return Vue.http.get(CTX + url).then(result => {
            return result
        })
      }
      // return Vue.http.get(CTX + url, params)
    },
    post ({ state }, {url, params}) {
      return Vue.http.post(CTX + url, params).then(result => {
          return result
      })
    },
    update ({ state }, { url, params }) {
      return Vue.http.put(CTX + url, params).then(result => {
          return result
      })
    },
    del ({ state }, { url }) {
      return Vue.http.delete(CTX + url).then(result => {
          return result
      })
    }
  }
}
