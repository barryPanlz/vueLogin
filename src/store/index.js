import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: sessionStorage.getItem('token') || '',
    },
    actions: {
        // increment (context) {
        //     context.commit('increment')
        //   }
    },
    mutations: {
        increment(state) {
            // 变更状态
            state.token = true
        },
        unIncrement(state) {
            // 变更状态
           state.token = false
        }
    },
    getters: {
        loginToken: state => {
            return state.token
        }
    },
    modules: {

    }
})
export default store