import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      news: [],
      jobs : [],
      asks : []
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        }
    },
    mutations,
    actions
})
