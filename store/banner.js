export const state = () => ({
    banners: [],
})

export const mutations = {
    SET_BANNERS(state, value) {
        state.banners = value
    }
}
export const actions = {
    loadBanners({ commit }) {
        return this.$axios.get(`/banners`)
            .then(response => {
                let banners = response.data.data.data
                commit('SET_BANNERS', banners)
                return banners    
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }
}

export const getters = {
    getBanners(state) {
        return state.banners
    }
}
