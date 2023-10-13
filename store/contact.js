export const actions = {
    emit(ctx, payload) {
        if(process.client && ! payload.dontEmit) {
            this._vm.$root.$nuxt.$emit(
                payload.type,
                payload.value
            )
        }
    },

    simple(ctx, config) {
        return this.$axios({
            method: 'post',
            url: `/contacts/simple`,
            data: config
        })
        .then(response => {
            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Enviado con éxito',
                dontEmit: config.dontEmit
            })

            return Promise.resolve(response)
        })
        .catch(error => {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: Object.values(error.response.data.errors)[0][0],
                dontEmit: config.dontEmit
            })

            return Promise.reject(error)
        })
    },

    payment(ctx, config) {
        return this.$axios({
            method: 'post',
            url: `/contacts/payment`,
            data: config
        })
        .then(response => {
            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Enviado con éxito',
                dontEmit: config.dontEmit
            })

            return Promise.resolve(response)
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
