export const state = () => ({
    config: {}
})

export const mutations = {
    config(state, config) {
        state.config = config
    }
}

export const actions = {
    emit(ctx, payload) {
        if(process.client && ! payload.dontEmit) {
            this._vm.$root.$nuxt.$emit(
                payload.type,
                payload.value
            )
        }
    },
    
    config(context) {
        return this.$axios({
            method: 'get',
            url: `/models/agencies/config`
        })
        .then(response => {
            context.commit('config', response.data.data)

            return response.data.data
        })
    },

    store(ctx, config = {}) {
        return this.$axios({
            method: 'post',
            url: `/agencies`,
            data: config.data
        })
        .then(response => {
            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Registro exitodo',
                dontEmit: config.dontEmit
            })

            return response.data.data
        })
        .catch(error => {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: Object.values(error.response.data.errors)[0][0],
                dontEmit: config.dontEmit
            })

            return Promise.reject(error)
        })
    }
}