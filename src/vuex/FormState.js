import qs from 'qs'
import { httpInstance } from '../config'

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
          return httpInstance.get(`${url}?` + qs.stringify(params)).then(result => {
            return result
          })
        } else {
          return httpInstance.get(url).then(result => {
            return result
          })
        }
    },
    post ({ state }, {url, params}) {
      return httpInstance.post(url, params).then(result => {
          return result
      })
    },
    put ({ state }, { url, params }) {
      return httpInstance.put(url, params).then(result => {
          return result
      })
    },
    del ({ state }, { url, params }) {
      if (params) {
        return httpInstance.get(`${url}?` + qs.stringify(params)).then(result => {
          return result
        })
      } else {
        return httpInstance.get(url).then(result => {
          return result
        })
      }
    }
  }
}
