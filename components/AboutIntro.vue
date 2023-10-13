<template>
	<div
		class="banner wow animate__animated animate__fadeIn"
		data-wow-delay="0.5s"
	>
		<img
			:src="
				require(`../assets/images/${
					$vuetify.breakpoint.smAndDown ? 'movil' : 'web'
				}/nosotros/nosotros-banner.jpg`)
			"
			alt="banner"
			class=""
		/>
		<div class="overline d-flex justify-center">
			<div
				class="content fill-height d-flex mt-16 pt-10 mt-sm-0 pt-sm-0 align-sm-center justify-center"
			>
				<v-row class="justify-center">
					<v-col cols="12">
						<v-row class="align-center" no-gutters>
							<v-col
								cols="12"
								class="mb-8 wow animate__animated animate__fadeInUp"
								data-wow-delay="1s"
							>
								<h1>¿Quiénes somos?</h1>
							</v-col>
							<v-col cols="12" md="10" lg="7">
								<p
									class="wow animate__animated animate__fadeInUp"
									data-wow-delay="1.5s"
								>
									Somos una empresa creada en el año 2013 en
									la ciudad de Zamora, Michoacán, el principal
									servicio que ofrecemos es promocionar
									servicios turísticos a las agencias de
									viajes, para que les sea mas sencilla
									cumplir sus metas de venta e incrementar sus
									utilidades. En ReservarH contamos con el
									conocimiento necesario para cubrir las
									necesidades que nuestros clientes demanden,
									tenemos una alta competitividad tecnológica
									en los servicios que ofrecemos, además
									tenemos servicios personalizados y de alta
									calidad para nuestros clientes.
								</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
	text-transform: initial;
}
.banner {
	height: 1050px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	background-color: $primary-ligth;
}

.overline {
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.25);
	// opacity: 0.6188227;
	// background: rgba(13, 59, 124, 0.61);
	position: absolute;
}

img {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	// object-position: -100%;
}

.banner-box {
	position: absolute;
}
h1 {
	font-weight: 700;
	font-size: $fs-6xl;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	text-align: left;
	color: #ffffff;
}

p {
	font-weight: 400;
	font-size: $fs-lg;
	color: #ffffff;
	text-shadow: 0px 4px 6px #000000;
}

@media screen and (min-width: $sm) {
	// .banner {
	// 	height: 1000px;
	// }
}
@media screen and (min-width: $md) {
	.banner {
		height: 800px;
	}
}
</style>
