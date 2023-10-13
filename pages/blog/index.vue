<template>
	<div class="">
		<BannerIntro :title="'Blog'" :bg="'blog-banner'" />
		<div class="content">
			<!-- <v-row class="mt-10 mb-6 mb-md-10">
				<v-col cols="12">
					<p class="text-center">
						La tecnología y el mundo creativo se renueca día a día,
						es por eso que tenemos que estar informados y
						actualizados.
					</p>
				</v-col>
			</v-row> -->

			<GridArticle class="mt-10 mb-6 mb-md-10" />
		</div>
	</div>
</template>

<script>
import GridArticle from '../../components/GridArticle.vue';
import BannerIntro from '../../components/BannerIntro';
export default {
	components: { GridArticle, BannerIntro },
	head: {
		title: 'Blog',
	},
};
</script>

<style lang="scss" scoped>
p {
	font-weight: 400;
	font-size: $fs-lg;
	color: #1d1d1d;
}

@media screen and (min-width: $sm) {
}
</style>
