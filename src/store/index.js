import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/accounts'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        accounts
    },
    strict: debug
});

// analog to https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart
