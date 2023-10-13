export const actions = {
    emit(ctx, payload) {
        if(process.client && ! payload.dontEmit) {
            this._vm.$root.$nuxt.$emit(
                payload.type,
                payload.value
            )
        }
    },

    subscribe(ctx, config) {
        return this.$axios({
            method: 'post',
            url: `/newsletter-subscribers/subscribe`,
            data: config
        })
        .then(response => {
            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Gracias por suscribirte a nuestro boletín',
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
