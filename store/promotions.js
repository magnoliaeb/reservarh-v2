export const state = () => ({
    filtered: {},
    filteredInfiniteScrollId: 0,
    filters: {},
    featured: {},
    related: {}
})

export const mutations = {
    filtered(state, filtered) {
        state.filtered = filtered
        state.filteredInfiniteScrollId ++;
    },

    paginateFiltered(state, filtered) {
        let currentData = state.filtered.data ?? []
        let newData = filtered.data ?? []
        let concatenated = currentData.concat(newData)

        state.filtered = filtered
        state.filtered.data = concatenated
    },

    filters(state, filters) {
        state.filters = filters
    },

    featured(state, featured) {
        state.featured = featured
    }
}

export const actions = {
    filtered(context, data = {}) {
        let params = {scopes: {}}

        if(data.category) {
            params.scopes.withCategoryAndDescendants = data.category
        }

        if(data.query) {
            params.scopes.withQuery = data.query
        }

        params.page = (context.state.filtered.current_page ?? 0) + 1

        params.paginate = data.paginate ?? 16

        context.commit('filters', data)

        return this.$axios({
            method: 'get',
            url: `/promotions`,
            params: params
        })
        .then(response => {
            context.commit('paginateFiltered', Object.assign({}, response.data.data))

            return Promise.resolve(response.data.data)
        })
        .catch(e => Promise.reject(e))
    },

    featured(context) {
        if(context.state.featured.data) {
            return Promise.resolve(context.state.featured)
        }

        return this.$axios({
            method: 'get',
            url: `/promotions`,
            params: {
                paginate: 8,
                scopes: {
                    wherefeatured: 1
                }
            }
        })
        .then(response => {
            context.commit('featured', response.data.data.data)

            return Promise.resolve(response.data.data.data)
        })
        .catch(e => Promise.reject(e))
    }
}