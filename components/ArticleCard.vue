<template>
	<article
		v-if="article"
		class=""
	>
		<div class="article-card__box">
			<nuxt-link
				class="article-img"
				:to="{ name: 'blog-slug', params: { slug: article.alias } }"
			>
				<v-img
					:width="'100%'"
					transition="scale-transition"
					:height="heightAndWidthImg"
					:src="article.images.original_profile"
					:alt="article.title"
					aspect-ratio="1"
					class="grey lighten-3 mx-auto"
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
			</nuxt-link>
			<div class="article-content">
				<div class="article-title mb-3">
					<h3 class="text-left mt-4">
						<nuxt-link
							:to="{
								name: 'blog-slug',
								params: { slug: article.alias },
							}"
							>{{ article.title }}</nuxt-link
						>
					</h3>
				</div>
				<div class="article-text">
					<p
						v-html="article.description"
						class="text-left"
					></p>
				</div>
			</div>
		</div>
		<div class="tag">
			<span>{{ date }}</span>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
		},
	},
	computed: {
		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 164;
				case 'sm':
					return 184;
				case 'md':
					return 200;
				case 'lg':
					return 200;
				case 'xl':
					return 200;
			}
		},

		date() {
			let date = this.article.created_at

			let monthNames = [
				'Ene',
				'Feb',
				'Mar',
				'Abr',
				'May',
				'Jun',
				'Jul',
				'Ago',
				'Sep',
				'Oct',
				'Nov',
				'Dic'
			];

			let d = new Date(date)

			return `${date.substr(8, 2)}.${monthNames[d.getMonth()]}.${date.substr(2, 2)}`
		}
	},
};
</script>

<style lang="scss" scoped>
article {
	position: relative;
}

.article-img {
	overflow: hidden;
	border-radius: 10px;
}
.article-card__box {
	height: 100%;
	// background: purple;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.article-content {
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.article-title {
	min-height: 50px;
	width: 100%;
	height: auto;
	text-align: center;
	margin: 0 auto;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.article-text {
	min-height: 45px;
	width: 100%;
	height: auto;
	text-align: center;
	margin: 0 auto;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

h3 {
	a {
		font-weight: 700;
		font-size: $fs-md;
		color: #000000;
		&:hover {
			opacity: 0.8;
			text-decoration: underline;
		}
	}
}

p {
	font-weight: 400;
	font-size: $fs-base;
	color: #000000;
}

.tag {
	position: absolute;
	background-color: $primary;
	top: 0;
	right: 0;
	padding: 8px 16px;
	opacity: 0.9;
	border-top-right-radius: 10px;

	span {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 17.3986px;

		text-align: center;

		color: #ffffff;
	}
}

@media screen and (min-width: $sm) {
	.tag {
		padding: 10px 20px;
	}
}
</style>
