// initial state
// shape: [{ id, quantity }]
const state = {
    loggedInAccount: null,
    pinnedAccount: null
}

// getters
const getters = {
    visibleAccount: (state, getters, rootState) => {
        if (state.pinnedAccount) {
            return state.pinnedAccount;
        } else if (state.loggedInAccount) {
            return state.loggedInAccount;
        } else {
            return null;
        }
    },
};

// actions
const actions = {
    login ({ commit, state }, accountName) {
        commit('setLoggedInAccount', { accountName });
    },
    logout ({ commit, state }) {
        commit('setLoggedInAccount', { accountName: null });
    },
    pin ({ commit, state }, accountName) {
        commit('setPinnedAccount', { accountName });
    },
}

// mutations
const mutations = {
    setLoggedInAccount (state, { accountName }) {
        state.loggedInAccount = accountName;
    },

    setPinnedAccount (state, { accountName }) {
        state.pinnedAccount = accountName;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
