export const state = () => ({
	show: null,
	filtered: {},
	filteredInfiniteScrollId: 0,
	filters: {},
	featured: {},
	related: {},
});

export const mutations = {
	show(state, show) {
		state.show = show;
	},

	filtered(state, filtered) {
		state.filtered = filtered;
		state.filteredInfiniteScrollId++;
	},

	paginateFiltered(state, filtered) {
		let currentData = state.filtered.data ?? [];
		let newData = filtered.data ?? [];
		let concatenated = currentData.concat(newData);

		state.filtered = filtered;
		state.filtered.data = concatenated;
	},

	filters(state, filters) {
		state.filters = filters;
	},

	featured(state, featured) {
		state.featured = featured;
	},

	related(state, related) {
		state.related = related;
	},
};

export const actions = {
	show(context, slug) {
		return this.$axios({
			method: 'get',
			url: `/posts/${slug}`
		})
			.then((response) => {
				context.commit('show', response.data.data);
				// console.log(response);
				return Promise.resolve(response.data.data);
			})
			.catch((e) => Promise.reject(e));
	},

	filtered(context, data = {}) {
		let params = { scopes: {} };

		if (data.category) {
			params.scopes.withCategoryAndDescendants = data.category;
		}

		if (data.query) {
			params.scopes.withQuery = data.query;
		}

		params.page = (context.state.filtered.current_page ?? 0) + 1;

		params.paginate = data.paginate ?? 16;

		context.commit('filters', data);

		return this.$axios({
			method: 'get',
			url: `/posts`,
			params: params,
		})
			.then((response) => {
				context.commit(
					'paginateFiltered',
					Object.assign({}, response.data.data)
				);

				return Promise.resolve(response.data.data);
			})
			.catch((e) => Promise.reject(e));
	},

	featured(context) {
		if (context.state.featured.data) {
			return Promise.resolve(context.state.featured);
		}

		return this.$api.$post.featured().then((response) => {
			context.commit('featured', response);
			return response;
		});
	},

	related(context, slug) {
		return this.$api.$post.related(slug).then((response) => {
			context.commit('related', response);
			return response;
		});
	},
};
