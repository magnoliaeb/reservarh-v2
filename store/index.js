export const actions = {
    async nuxtServerInit(
        { /*commit, state,*/ dispatch }
    ) {
        await dispatch('banner/loadBanners')
        await dispatch('promotions/featured')
    }
}