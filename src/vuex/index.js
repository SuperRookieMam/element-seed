import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Login from './login'
import FormState from './FormState'

Vue.use(Vuex) // use必须在创建store实例之前调用
const CTX = CONTEXT_PATH + 'data/'
export default new Store({
  namespaced: true,
  state: {
    title: '应用',
    user: {},
    error: {
      count: 0,
      message: ''
    },
    loadingCount: 0,
    theme: 'left',
    menus: [],
    url: {
      authorityMenus: CTX + 'menuFunction/menus',
      login: CTX + 'login',
      logout: CTX + 'logout'
    }
  },
  getters: {
    menus: state => { return state.menus }
  },
  mutations: {
    updateTitle (state, { title }) {
      if (title) {
        state.title = title
      }
    },
    switchTheme (state, theme) {
      state.theme = theme
    },
    addError (state, payload) {
      let count = 1 + state.error.count
      let message = payload
      state.error = {
        count,
        message
      }
    },
    updateUser: (state, user) => {
      state.user = user
    },
    loading (state) {
      state.loadingCount++
      console.debug('after loading the loading count is ', state.loadingCount)
    },
    loadingComplete (state) {
      state.loadingCount--
      console.debug('after complete the loading count is ', state.loadingCount)
    },
    updateMenu (state, menus) {
      state.menus = menus
    }
  },
  actions: {
    loadMenu ({commit, state: { url }}) {
      return Vue.http.get(url.authorityMenus)
                    .then(({ data }) => {
                      commit('updateMenu', data)
                    return data
                  })
    }
  },
  modules: {
    Login: Login,
    Formstate: new FormState()
  }
})
