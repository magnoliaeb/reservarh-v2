<template>
	<div class="home">
		<client-only>
			<VueSlickCarousel v-bind="slickOptions">
				<div
					v-for="(slide, index) in slides"
					:key="index"
					class="bg-img"
					:class="`bg-${slide.bg}`"
				>
					<img
						v-if="$vuetify.breakpoint.smAndDown"
						:src="slide.images.small"
						:alt="slide.title"
						class="grey lighten-3 img-banner"
					/>

					<img
						v-else
						:src="slide.images.big"
						:alt="slide.title"
						class="grey lighten-3 img-banner"
					/>
					<!-- <div
						class="
							content
							d-none d-md-block
							text-center
							fill-height
						"
					>
						<v-row class="fill-height justify-end align-center">
							<v-col cols="12" md="7" lg="6" xl="5">
								<h2>{{ slide.title }}</h2>
								<p class="text-right">
									{{ slide.description }}
								</p>
							</v-col>
						</v-row>
					</div> -->
				</div>
				<template #prevArrow>
					<div class="custom-arrow" style="height: 25px; width: 25px">
						<svg
							style="height: 100%; width: 100%; color: #fff"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="{2}"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</div>
				</template>
				<template #nextArrow>
					<div class="custom-arrow" style="height: 25px; width: 25px">
						<svg
							style="height: 100%; width: 100%; color: #fff"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="{2}"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</template>
			</VueSlickCarousel>
		</client-only>
		<div class="content fill-height">
			<v-row
				class="
					fill-height
					align-start align-md-center
					justify-center justify-md-start
					pt-16
					mt-7
				"
			>
				<v-col cols="auto" md="auto" class="">
					<IntroForm
						class="wow animate__fadeInUp"
						data-wow-delay="1s"
					/>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import IntroForm from './IntroForm.vue';
export default {
	components: { IntroForm },
	data() {
		return {
			slickOptions: {
				dots: true,
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				initialSlide: 0,
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,
				lazyLoad: 'ondemand',
				// pauseOnDotsHover: true,
				fade: true,
				responsive: [],
			},
			// slides: [
			// 	{
			// 		href: 'desarrollo-web',
			// 		bg: 'banner-1',
			// 		bgSm: 'banner-1',
			// 	},
			// 	{
			// 		href: 'desarrollo-web',
			// 		bg: 'banner-1',
			// 		bgSm: 'banner-1',
			// 	},
			// ],
		};
	},

	computed: {
		slides() {
			return this.$store.getters['banner/getBanners'];
		},
	},
};
</script>

<style lang="scss" scoped>
.img-banner {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	object-fit: cover;
	pointer-events: none !important;
	z-index: -100;
	width: 100%;
	height: 100%;
	background-color: gainsboro;
}
.home {
	height: 653px;
	position: relative !important;
	// overflow: hidden;
}

.content {
	position: absolute;
	display: flex;
	align-items: center;
	// border: 2px solid rgba(255, 0, 0, 0.432);
	margin: 0 auto;
	left: 0;
	right: 0;
	// z-index: 200;
}

.slick-slider {
	position: absolute !important;
	display: block !important;
}
.bg-img {
	height: 653px;
	background-size: cover;
	// object-fit: contain;
	object-position: right;
	position: relative;
}

h2 {
	font-weight: 800;
	font-size: $fs-9xl;
	text-align: right;
	color: #ffffff;
}
p {
	font-weight: 500;
	font-size: $fs-lg;
	color: #ffffff;
}

@media screen and (min-width: $sm) {
}
@media screen and (min-width: $md) {
	.home {
		height: 700px;
	}

	.bg-img {
		height: 700px;
	}
}
</style>
