<template>
	<div class="" style="">
		<v-row class="" no-gutters tag="section">
			<v-col
				cols="12"
				sm="12"
				md="5"
				lg="6"
				class="pa-md-0 box-content-text order-md-1"
			>
				<div class="content fill-height">
					<v-row class="justify-center align-center fill-height">
						<v-col
							cols="12"
							class="wow animate__animated animate__fadeInRight"
							data-wow-delay="1s"
						>
							<div class="content-text mx-auto">
								<!-- <img
									class="logo mb-4"
									src="../assets/images/iconos/logo-blanco.svg"
									alt="logo"
								/> -->
								<h2>
									Obtén <br />
									descuentos
									<strong
										>en cualquier <br />
										destino</strong
									>
								</h2>
							</div>
						</v-col>
					</v-row>
				</div>
			</v-col>
			<v-col
				cols="12"
				sm="12"
				md="7"
				lg="6"
				class="wow animate__animated animate__fadeInLeft pa-0 box-content order-0 order-md-0"
				data-wow-delay="1"
			>
				<!-- <div
					class="
						box-discount
						px-4 px-sm-16
						py-6
						text-center
						wow
						animate__animated animate__fadeInUp
					"
					data-wow-delay="1.5"
				>
					<h3 class="">Obten <span>30%</span></h3>
					<h4 class="mt-0">De descuento</h4>
					<p>En cualquier lugar</p>
				</div> -->
				<img
					:src="require(`../assets/images/web/home/banner-2.jpg`)"
					alt="banner"
				/>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box-content {
	background-color: $black;
	position: relative;
	height: 400px;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 2;
	}
	.box-discount {
		z-index: 30;
		position: absolute;
		left: 10px;
		bottom: 10px;
		background: rgba(
			255,
			255,
			255,
			0.68
		) !important; // background-color: orange !important;
		h3 {
			font-weight: 400;
			font-size: $fs-4xl;
			word-spacing: 10px;
			text-transform: uppercase;
			color: #750b0d;
			line-height: 40px;
			span {
				font-weight: 800;
				font-size: $fs-8xl;
			}
		}
		h4 {
			color: #e81414;
			font-size: $fs-4xl;
			text-transform: uppercase;
		}
		p {
			text-transform: initial;
			color: #e81414;
			font-size: $fs-4xl;
		}
	}
}
.box-content-text {
	height: 550px;

	background-color: $primary;

	.logo {
		width: 145px;
		height: 163px;
	}
	h2 {
		font-size: $fs-6xl;
		font-weight: 300;
		text-transform: uppercase;
		color: #ffffff;
		strong {
			text-transform: uppercase;
			font-size: $fs-8xl;
			font-weight: 800;
			display: block;
		}
	}

	p {
		font-weight: 400;
		font-size: $fs-3xl;
		color: #ffffff;
	}
}

@media screen and (min-width: $md) {
	.box-discount {
		left: 20px;
	}
	.box-content,
	.box-content-text {
		height: 600px;
	}
	.box-content-text {
		.logo {
			width: 155px;
			height: 203px;
		}
	}
}
</style>
