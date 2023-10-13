<template>
	<div
		class="home wow animate__animated animate__fadeIn"
		data-wow-delay="0.5s"
	>
		<img
			class="img-banner wow animate__fadeIn"
			width="100%"
			height="100%"
			:src="
				require(`@/assets/images/${
					$vuetify.breakpoint.smAndDown ? 'movil' : 'web'
				}/home/${bg}.jpg`)
			"
			:alt="bg"
		/>

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
					<div class="d-flex justify-center">
						<img
							class="logo wow animate__fadeInUp"
							data-wow-delay="1.3s"
							src="../assets/images/iconos/home-logobanner.svg"
							alt=""
						/>
					</div>
				</v-col>
			</v-row>
			<img
				data-wow-delay="1.5s"
				class="logo d-none d-md-block wow animate__fadeInUp"
				src="../assets/images/iconos/home-logobanner.svg"
				alt=""
			/>
		</div>
		<div
			class="promo px-2 px-sm-6 d-none wow animate__fadeInRight"
			data-wow-delay="1.5s"
		>
			<h3 class="promo-title">
				Super promoción

				<span class="">Del 23 al 26 de junio 2023</span>
			</h3>
			<div class="promo-content d-sm-flex align-center">
				<div class="d-flex align-center justify-end justify-md-start">
					<p>
						Habitación <br class="d-none d-sm-block" />
						doble por
					</p>
					<span class="d-block ml-3 mx-sm-6">$5,700</span>
				</div>
				<p class="">y niños grátis</p>
			</div>
			<!-- <p>y niños grátis</p> -->
		</div>
	</div>
</template>

<script>
import IntroForm from './IntroForm.vue';
export default {
	components: { IntroForm },
	data() {
		return {
			bg: 'banner-1',
		};
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
	width: 100%;
	height: 100%;
	background-color: $primary-ligth;
}

.logo {
	width: 200px;
	height: 200px;
}
.promo {
	bottom: 60px;
	right: 0;
	position: absolute;
	background: rgba(232, 20, 20, 0.7);
	background-blend-mode: multiply;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	height: 140px;
	width: auto;

	// max-width: 525px;
	h3 {
		font-family: 'Pacifico';
		font-weight: 400;
		font-size: $fs-7xl;
		text-align: right;
		color: #ffffff;
		position: relative;
		top: 0px;
		span {
			display: block;
			font-family: 'Roboto';
			font-weight: 300;
			font-size: $fs-md;
			// text-align: right;
			line-height: 20px !important;
			color: #ffffff;
			position: absolute;
			left: 35px;
			top: 5px;
		}
	}
	.promo-content {
		position: relative;
		top: -8px;
		right: 0;
	}
	p {
		font-weight: 300;
		font-size: $fs-lg;
		text-align: right;
		line-height: 20px !important;
		color: #ffffff;
		line-height: 35px;
	}
	span {
		font-weight: 900;
		font-size: $fs-6xl;
		text-align: right;
		color: #ffffff;
	}
}

.content {
	position: absolute;
	display: flex;
	align-items: center;
	border: 2px solid rgba(255, 0, 0, 0.432);
	margin: 0 auto;
	left: 0;
	right: 0;
}

.home {
	height: 1000px;
	// background: orange;
	position: relative;
}

@media screen and (min-width: $sm) {
	.promo {
		bottom: 40px;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		height: 140px;
		// max-width: 525px;
		h3 {
			font-size: $fs-10xl;
			text-align: right;
			position: relative;
			top: -55px;
			span {
				display: block;
				font-size: $fs-md;
				text-align: right;
				color: #ffffff;
				// position: relative;
				right: 40px;
				top: auto;
				bottom: -10px;
			}
		}
		.promo-content {
			position: relative;
			top: -40px;
		}
		p {
			font-size: $fs-lg;
			text-align: right;
		}
		span {
			font-size: $fs-8xl;
			text-align: right;
		}
	}
}
@media screen and (min-width: $md) {
	.logo {
		position: absolute;
		right: 0;
		width: 250px;
		height: 250px;
		top: 100px;
	}
}

@media screen and (min-width: $lg) {
	.promo {
		bottom: 100px;
	}
	.home {
		height: 100vh;
	}
}
@media screen and (min-width: $xl) {
	.home {
		height: 950px;
	}
	.logo {
		width: 300px;
		height: 300px;
		top: 70px;
	}
}
</style>
