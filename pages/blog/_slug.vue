<template>
	<div class="">
		<template v-if="$fetchState.pending">
			<div class="content my-10 my-md-16 py-10 py-md-16">
				<SkeletonBlogDetail />
			</div>
		</template>

		<p v-else-if="$fetchState.error">An error occurred :(</p>

		<template v-else>
			<div class="content my-10 my-md-16 py-10 py-md-16">
				<v-row no-gutters class="justify-center">
					<v-col cols="12" lg="10" xl="9">
						<v-row class="align-center">
							<v-col cols="auto" sm="auto" class="pr-sm-0">
								<v-btn
									depressed
									:to="{ name: 'blog' }"
									class="mr-3 back"
									large
								>
									<v-icon small>mdi-chevron-left</v-icon>
									Regresar</v-btn
								>
							</v-col>
							<v-col cols="auto" class="hidden-xs-only">
								<div class="divider"></div>
							</v-col>
							<v-col cols="auto" sm="auto" class="">
								<v-breadcrumbs
									class=""
									:items="breadcrumbs"
									divider=">"
								>
									<template v-slot:item="{ item }">
										<v-breadcrumbs-item
											exact
											exact-active-class="active"
											:to="item.href"
											:disabled="item.disabled"
											style="-webkit-line-clamp: 1"
										>
											{{ item.text }}
										</v-breadcrumbs-item>
									</template>
								</v-breadcrumbs>
							</v-col>
						</v-row>
						<v-row class="my-4">
							<v-col cols="12">
								<v-img
									:width="'100%'"
									transition="scale-transition"
									:height="heightAndWidthImg"
									:src="post.images.original_profile"
									:alt="post.title"
									aspect-ratio="1"
									class="grey lighten-3 mx-auto hero"
								>
									<template v-slot:placeholder>
										<v-row
											class="fill-height ma-0"
											align="center"
											justify="center"
										>
											<v-progress-circular
												:size="30"
												:width="3"
												indeterminate
												color="primary"
											></v-progress-circular>
										</v-row>
									</template>
								</v-img>
							</v-col>
						</v-row>
						<v-row class="justify-center">
							<v-col cols="12" class="text-center">
								<h1 class="mb-6 text-left">
									{{ post.title }}
								</h1>

								<p
									v-html="post.description"
									class="text-justify mb-4"
								></p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: this.metaData.title,
			meta: [
				{ hid: 'title', name: 'title', content: this.metaData.title },
				{
					hid: 'description',
					name: 'description',
					content: this.metaData.description,
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: this.metaData.keywords,
				},
				{ hid: 'autor', name: 'autor', content: this.metaData.autor },

				{ hid: 'canonical', rel: 'canonical', href: this.metaData.url },

				{
					hid: 'fb:app_id',
					property: 'fb:app_id',
					content: this.metaData.fb.appId,
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.metaData.title,
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: this.metaData.fb.type,
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: this.metaData.url,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.metaData.img.src,
				},
				{
					hid: 'og:image:width',
					property: 'og:image:width',
					content: this.metaData.img.with,
				},
				{
					hid: 'og:image:height',
					property: 'og:image:height',
					content: this.metaData.img.height,
				},
				{
					hid: 'og:image:type',
					property: 'og:image:type',
					content: this.metaData.img.type,
				},
				{
					hid: 'og:image:alt',
					property: 'og:image:alt',
					content: this.metaData.title,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.metaData.description,
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.metaData.siteName,
				},
				{
					hid: 'og:article:publisher',
					property: 'og:article:publisher',
					content: this.metaData.publisher,
				},
				{
					hid: 'og:article:author',
					property: 'og:article:author',
					content: this.metaData.fb.autor,
				},
				{
					hid: 'og:locale',
					property: 'og:locale',
					content: this.metaData.locale,
				},
				// { hid: 'og:article:published_time', property: 'og:article:published_time', content: this.metaData.publishedTime },

				{
					hid: 'twitter:card',
					property: 'twitter:card',
					content: this.metaData.tw.card,
				},
				{
					hid: 'twitter:title',
					property: 'twitter:title',
					content: this.metaData.title,
				},
				{
					hid: 'twitter:description',
					property: 'twitter:description',
					content: this.metaData.description,
				},
				{
					hid: 'twitter:image',
					property: 'twitter:image',
					content: this.metaData.img.src,
				},
				{
					hid: 'twitter:image:alt',
					property: 'twitter:image:alt',
					content: this.metaData.title,
				},
				{
					hid: 'twitter:site',
					property: 'twitter:site',
					content: `@${this.metaData.tw.site}`,
				},
				{
					hid: 'twitter:creator',
					property: 'twitter:creator',
					content: `@${this.metaData.tw.creator}`,
				},
				{
					hid: 'twitter:domain',
					property: 'twitter:domain',
					content: this.metaData.domain,
				},
				{
					hid: 'twitter:url',
					property: 'twitter:url',
					content: this.metaData.url,
				},
			],
		};
	},
	data() {
		return {
			post: null,
		};
	},

	async fetch() {
		this.post = await this.$store.dispatch(
			"post/show",
			this.$route.params.slug
		);
	},

	computed: {
		metaData() {
			return {
				title: this?.post?.meta?.title,
				description: this?.post?.meta?.description,
				publisher: 'Reservar H Mayorista',
				autor: 'Reservar H Mayorista',
				keywords: this?.post?.meta?.keywords,
				url: this.$util.getLocation(),
				siteName: process.env.VUE_APP_NAME,
				domain: process.env.VUE_APP_WEBURL,
				img: {
					src: this?.post?.images?.original_profile,
					type: 'image/png',
					with: 300,
					height: 300,
				},
				locale: 'es_MX',
				// publishedTime: //,
				fb: {
					appId: '1047094336475744',
					type: 'article',
					autor: 'lavamx',
				},
				tw: {
					card: 'summary_large_image',
					site: 'Reservar_H',
					creator: 'Reservar_H',
				},
			};
		},
		breadcrumbs() {
			let breadcrumbs = [
				{
					text: 'Blog',
					disabled: false,
					href: '/blog',
				},
			];

			if (this.post) {
				breadcrumbs.push({
					text: this.post.title,
					disabled: false,
					href: `/blog/${this.post.alias}`,
				});
			}

			return breadcrumbs;
		},

		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 250;
				case 'sm':
					return 250;
				case 'md':
					return 400;
				case 'lg':
					return 400;
				case 'xl':
					return 500;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
p {
	font-weight: 400;
	font-size: $fs-lg;
	color: #1d1d1d;
}
h1 {
	font-weight: 800;
	font-size: $fs-3xl;
	text-transform: uppercase;
	color: #1d1d1d;
}

.hero {
	border-radius: 10.96px;
	overflow: hidden;
}
a.back {
	font-style: normal !important;
	font-weight: 400 !important;
	font-size: $fs-md !important;
	text-align: center !important;
	color: #1d1d1d !important;
	background-color: #fff !important;
	// opacity: 0 !important;
	:hover {
		// background-color: #ffd400 !important;
		color: $primary !important;
	}
}

.divider {
	height: 16px;
	background: black;
	width: 1px;
}

@media screen and (min-width: $sm) {
	h1 {
		font-size: $fs-4xl;
	}
}
@media screen and (min-width: $md) {
	h1 {
		font-size: $fs-6xl;
	}
	.divider {
		height: 20px;
	}
}
</style>
