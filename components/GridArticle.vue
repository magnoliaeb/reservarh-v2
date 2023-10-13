<template>
	<div class="mb-10">
		<!-- <template v-if="$fetchState.pending">
			<SkeletonBlog />
		</template>
		
		<p v-else-if="$fetchState.error">
			An error occurred :(
		</p> -->

		<template>
			<div
				v-if="
					$store.state.post.filtered.data &&
					$store.state.post.filtered.data.length > 0
				"
			>
				<v-row class="justify-space-between">
					<v-col
						v-for="(article, index) in $store.state.post.filtered
							.data"
						:key="index"
						class="mb-2 mb-md4"
						cols="12"
						sm="6"
						md="4"
						lg="4"
					>
						<ArticleCard :article="article" />
					</v-col>
				</v-row>

				<client-only>
					<infinite-loading
						@infinite="onBottom"
						:identifier="$store.state.post.filteredInfiniteScrollId"
					>
						<!-- <span slot="no-more"></span> -->
						<p slot="no-results">No hay más artículos</p>

						<span slot="spinner">
							<SkeletonBlog />
						</span>
					</infinite-loading>
				</client-only>
			</div>
		</template>
	</div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';
export default {
	components: { ArticleCard },

	methods: {
		onBottom($state) {
			this.$store
				.dispatch('post/filtered', {
					...this.$route.query,
				})
				.then((r) => {
					if (r.data.length) {
						$state.loaded();
					} else {
						$state.complete();
					}
				});
		},
	},

	created() {
		this.$store.dispatch('post/filtered', this.$route.query);
	},
};
</script>

<style lang="scss" scoped></style>
