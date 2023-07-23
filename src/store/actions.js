import {fetchCommentItem, fetchList, fetchUserInfo} from '../api/index.js'

export default {
    FETCH_USER({commit}, name) {
        return fetchUserInfo(name)
        .then( ({data}) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({commit}, id) {
        return fetchCommentItem(id)
        .then( ({data}) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    async FETCH_LIST({commit}, pageName) {
        const {data} = await fetchList(pageName);
        commit('SET_LIST', data);
        return data;
    }
}