import qs from 'qs'
import axios from 'axios'

const loginInstance = axios.create({
  // 登录的数据格式，使用form表单格式
  transformRequest: [(data, headers) => qs.stringify(data, { arrayFormat: 'repeat' })]
})
const CT = CONTEXT_PATH + 'data/'
export default {
  namespaced: true,
  state: {
    url: {
      login: CT + 'login',
      logout: CT + 'logout'
    },
    user: {
    }
  },
  getters: {
    user: state => { return state.user }
  },
  mutations: {
    currentUser: (state, user) => (state.user = user),
    updateUser: (state, user) => {
      state.user = user
    }
  },
  actions: {
    login ({commit, state: { url }}, data) {
      return loginInstance.post(url.login, data).then(({ data }) => {
        commit('updateUser', data)
        commit('updateUser', {user: data}, {root: true})
        return data
      })
    }
  }
}