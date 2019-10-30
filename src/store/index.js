import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rm1: 0
  },
  getters: {
  },
  mutations: {
    'MUTATE_UPDATE_VALUE' (state, payload) {
      const { weight, reps } = payload.params
      state.rm1 = weight / (1.0278 - (0.0278 * reps))
    }
  },
  actions: {
    'UPDATE_VALUE': ({ commit }, payload) => {
      commit('MUTATE_UPDATE_VALUE', payload)
    }
  },
  modules: {
  }
})
