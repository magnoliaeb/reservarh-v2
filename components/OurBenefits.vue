<template>
	<div>
		<section class="pb-8">
			<div class="content-benefits content">
				<v-row>
					<v-col
						cols="12"
						class="wow animate__animated animate__fadeInUp"
						data-wow-delay="1s"
					>
						<h2>Nuestros <span>servicios</span></h2>
					</v-col>
				</v-row>
				<v-row class="justify-start justify-center mt-md-6">
					<v-col
						cols="10"
						sm="6"
						md="4"
						lg="4"
						v-for="(value, index) in items"
						:key="index"
						class="wow animate__animated animate__fadeInUp"
						:data-wow-delay="`${value.delay}`"
					>
						<div class="text-center item-card d-flex align-center">
							<div class="">
								<div class="icon mb-6">
									<img
										:src="
											require(`../assets/images/iconos/${value.icon}.svg`)
										"
										:alt="value.title"
									/>
								</div>
								<div class="px-6">
									<h3 class="mb-4">{{ value.title }}</h3>
									<p>{{ value.text }}</p>
								</div>
							</div>
						</div>
					</v-col>
				</v-row>
			</div>
		</section>
		<section
			class="wow animate__animated animate__fadeIn about"
			data-wow-delay="1.5s"
		>
			<div class="content content-box py-10">
				<v-row>
					<v-col cols="12">
						<h2 class="mb-10">¿Quiénes <span>Somos?</span></h2>

						<p>
							Somos una empresa creada en el año 2013 en la ciudad
							de Zamora, Michoacán, el principal servicio que
							ofrecemos es promocionar servicios turísticos a las
							agencias de viajes, para que les sea más sencilla
							cumplir sus metas de venta e incrementar sus
							utilidades. En ReservarH contamos con el
							conocimiento necesario para cubrir las necesidades
							que nuestros clientes demanden, tenemos una alta
							competitividad tecnológica en los servicios que
							ofrecemos, además tenemos servicios personalizados y
							de alta calidad para nuestros clientes.
						</p>
					</v-col>
				</v-row>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					id: 2,
					title: 'Hoteleria nacional e internacional para individuales y grupos',
					text: 'Ofrecemos una amplia selección de alojamientos de calidad en destinos populares. Encuentra la opción perfecta con nuestras ofertas exclusivas.',
					icon: 'home-icono2',
					delay: '0.5s',
				},
				{
					id: 1,
					title: 'Atracciones',
					text: 'Personalizamos itinerarios emocionantes para Grupos, ya sea familiares o corporativos. ¡Únete a nosotros y haz que tu viaje sea inolvidable!.',
					icon: 'home-icono3',
					delay: '1s',
				},

				{
					id: 3,
					title: 'Traslados aeropuerto-hotel- aeropuerto',
					text: 'Ofrecemos soluciones de transporte eficientes y confiables para satisfacer tus necesidades de viaje.',
					icon: 'home-icono1',
					delay: '1.5s',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
section {
	position: relative;
	z-index: 10;
	// background-color: #fff;
}
h2 {
	font-weight: 300;
	font-size: $fs-4xl;
	text-align: center;
	text-transform: uppercase;
	color: #750b0d;
	span {
		text-transform: uppercase;
		font-weight: 900;
	}
}

.item-card {
	background: #fbfafa;
	box-shadow: -20px 22px 32px 13px rgba(0, 0, 0, 0.18);
	border-radius: 19px;
	max-width: 419px;
	height: 340px;
}

.icon {
	height: 124px;
	width: 124px;
	display: block;
	margin: 0 auto;
	img {
		height: 100%;
		width: 100%;
	}
}

h3,
p {
	font-weight: 400;
	font-size: $fs-base;
	text-align: center;
	color: #000000;
}

h3 {
	font-size: $fs-md;
	font-weight: 700;
}

.about {
	z-index: 0;
	background: rgba(217, 217, 217, 0.42);

	h2 {
		font-weight: 300;
		font-weight: 300;
		font-size: $fs-4xl;
		text-align: center;
		text-transform: uppercase;
		color: #e81414;
		span {
			text-transform: uppercase;
			font-weight: 900;
		}
	}

	p {
		font-weight: 300;
		font-size: 23px;
		line-height: 171.3%;
		/* or 39px */

		text-align: center;

		color: #000000;
	}
	.content-box {
		max-width: 1387px;
		margin: 0 auto;
	}
}

@media screen and (min-width: $md) {
	.content-benefits {
		position: relative;
		top: 70px;
		z-index: 100 !important;
		// background-color: orange;
	}
}
</style>
