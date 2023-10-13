<template>
	<div class="promotion">
		<div class="content mb-10">
			<div v-if="abc.length" class="d-flex justify-center">
				<client-only>
					<VueSlickCarousel v-bind="slickOptions" class="">
						<div v-for="(item, index) in abc" :key="index">
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
									style="
										height: 100%;
										width: 100%;
										color: #000;
									"
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
									style="
										height: 100%;
										width: 100%;
										color: #000;
									"
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
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slickOptions: {
				dots: false,
				arrows: true,
				infinite: true,
				slidesToShow: 1,
				initialSlide: 0,
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				fade: true,
				speed: 1000,

				responsive: [
					{
						breakpoint: 600,
						settings: {
							arrows: false,
						},
					},
				],
			},
		};
	},
	computed: {
		// heightImg() {
		// 	switch (this.$vuetify.breakpoint.name) {
		// 		case 'xs':
		// 			return '300px';
		// 		case 'sm':
		// 			return '300px';
		// 		case 'md':
		// 			return '400px';
		// 		case 'lg':
		// 			return '400px';
		// 		case 'xl':
		// 			return '500px';
		// 	}
		// },

		abc() {
			return this.$store.state.promotions.filtered.data
				? this.$store.state.promotions.filtered.data
				: [];
		},
	},

	created() {
		this.$store.dispatch('promotions/filtered', {
			paginate: 200,
		});
	},
};
</script>

<style lang="scss" scoped>
.promotion {
	position: relative;
	top: -60px;
}
.content {
	// max-width: 1100px;
	max-width: 1419px;
}
// .content-img {
// 	// object-fit: cover;
// 	// filter: drop-shadow(-5px 1px 11px rgba(0, 0, 0, 0.3)) !important;
// 	// border: 2px solid red;
// 	width: 100%;
// 	display: block;
// 	background-color: gainsboro;
// 	position: relative;
// 	img {
// 		position: absolute;
// 		left: 0;
// 		right: 0;
// 		top: 0;
// 		bottom: 0;
// 		object-position: center;
// 		// object-fit: cover;
// 	}
// }
.content-img {
	border-radius: 15px;
	width: 100% !important;
	height: 300px;
	display: block;
	background-color: gainsboro;
	position: relative;
	overflow: hidden;

	img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: block;
		height: 100%;
		width: 100%;
		object-position: center;
		// object-fit: cover;
	}
}

.custom-arrow {
	height: 20px;
	width: 20px;
}

.custom-arrow.slick-arrow.slick-next {
	right: -20px !important;
}
.custom-arrow.slick-arrow.slick-prev {
	left: -20px !important;
}

@media screen and (min-width: $sm) {
	.promotion {
		top: -80px;
	}
}
@media screen and (min-width: $md) {
	.custom-arrow.slick-arrow.slick-next {
		right: -30px !important;
	}
	.custom-arrow.slick-arrow.slick-prev {
		left: -30px !important;
	}
	.custom-arrow {
		height: 30px;
		width: 30px;
	}
	.content-img {
		height: 400px;
	}
	.content-img {
		// height: 400px;
		// background-color: orange;
		// height: 683px !important;
	}
}
@media screen and (min-width: $lg) {
	.promotion {
		top: -80px;
	}
	.custom-arrow.slick-arrow.slick-next {
		right: -40px !important;
	}
	.custom-arrow.slick-arrow.slick-prev {
		left: -40px !important;
	}
	.content-img {
		height: 500px;
	}
}
@media screen and (min-width: $xl) {
	.promotion {
		top: -80px;
	}
	.custom-arrow.slick-arrow.slick-next {
		right: -60px !important;
	}
	.custom-arrow.slick-arrow.slick-prev {
		left: -60px !important;
	}
}
</style>
