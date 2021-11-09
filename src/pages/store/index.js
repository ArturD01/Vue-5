import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        massage: 'hello vuex'
    },
    mutations: {
        setMessage (state){
            state.massage = 'hello again'
        }
    },
    actions: {
        setMessage ({commit}){
            commit('setMessage')
        }
    },
    getters: {},
})