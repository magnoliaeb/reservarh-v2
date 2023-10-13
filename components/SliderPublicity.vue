<template>
	<section
		v-if="Boolean(items.length)"
		class="wow animate__animated animate__fadeInUp"
		id="publicity"
		data-wow-delay="1s"
	>
		<client-only>
			<VueSlickCarousel v-bind="slickOptions">
				<div v-for="(item, index) in items" :key="index">
					<div class="content-img">
						<img
							class="d-md-none"
							:src="item.images.small"
							:alt="item.title"
						/>
						<img
							class="d-none d-md-block"
							:src="item.images.big"
							:alt="item.title"
						/>
					</div>
				</div>

				<template #prevArrow>
					<div class="custom-arrow">
						<svg
							style="color: #fff"
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
					<div class="custom-arrow">
						<svg
							style="color: #fff"
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
	</section>
</template>

<script>
export default {
	data() {
		return {
			slickOptions: {
				dots: false,
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 0,
				pauseOnDotsHover: false,
				pauseOnFocus: true,
				pauseOnHover: false,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,
				// centerMode: true,
				// centerPadding: '10px',
				variableWidth: true,
				adaptiveHeight: true,
				responsive: [],
			},
		};
	},

	computed: {
		items() {
			return this.$store.state.promotions.featured;
		},
	},
};
</script>

<style lang="scss" scoped>
.content-img {
	width: 320px !important;
	height: 350px;
	display: block;
	// overflow: hidden;
	background-color: gainsboro;
	position: relative;

	img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: block;
		height: 100%;
		width: 100%;
		// object-position: center;
		// object-fit: cover;
	}
}
// img {
// 	// object-fit: cover;
// }
@media screen and (min-width: $sm) {
	.content-img {
		width: 350px !important;
	}
}
@media screen and (min-width: $md) {
	.content-img {
		width: 824px !important;
		height: 400px !important;
	}
}
@media screen and (min-width: $lg) {
}
</style>
