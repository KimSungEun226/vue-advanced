import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      user : [],
      item : {},
      list : []
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
})
