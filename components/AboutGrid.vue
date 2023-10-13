<template>
	<div class="py-4">
		<v-row class="" no-gutters tag="section">
			<v-col
				cols="12"
				sm="12"
				md="5"
				lg="6"
				class="pa-md-0 box-content-text order-1"
			>
				<div class="content fill-height">
					<v-row class="justify-center align-center fill-height">
						<v-col
							cols="12"
							class="wow animate__animated animate__fadeInRight"
							data-wow-delay="1s"
						>
							<div class="content-text mx-auto">
								<p class="text-right text-md-left">
									Desarrollo y mejora continua de la mano de
									nuestros clientes. Evolución de la empresa.
									Minimizando contratiempos y problemas del
									tipo que perjudique al cliente y a nuestra
									empresa. Manejando en todo momento
									cordialidad y comunicación en cada contacto
									con la persona. Crecimiento integral de la
									empresa/personal y cliente. Evolucionando
									nuestros métodos tanto personales,
									psicosociales y tecnológicos.
								</p>
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
				class="wow animate__animated animate__fadeInLeft pa-0 box-content order-0 order-sm-0"
				data-wow-delay="1s"
			>
				<h3
					class="right wow animate__animated animate__fadeInUp"
					data-wow-delay="1.5s"
				>
					Visión
				</h3>
				<img
					:src="
						require(`../assets/images/web/nosotros/nosotros-banner-2.jpg`)
					"
					alt="img1"
				/>
			</v-col>
		</v-row>
		<v-row class="" no-gutters tag="section">
			<v-col
				cols="12"
				sm="12"
				lg="6"
				md="7"
				class="wow animate__animated animate__fadeInRight pa-0 box-content order-0 order-md-1"
				data-wow-delay="1s"
			>
				<h3
					class="left wow animate__animated animate__fadeInUp"
					data-wow-delay="1.5s"
				>
					Metas
				</h3>

				<img
					:src="
						require(`../assets/images/web/nosotros/nosotros-banner-3.jpg`)
					"
					alt="img1"
				/>
			</v-col>
			<v-col
				cols="12"
				sm="12"
				lg="6"
				md="5"
				class="pa-md-0 box-content-text order-md-0"
			>
				<div class="content fill-height">
					<v-row class="justify-center align-center fill-height">
						<v-col
							cols="12"
							class="wow animate__animated animate__fadeInLeft"
							data-wow-delay="1s"
						>
							<div class="content-text mx-auto">
								<p class="text-left text-md-right">
									Nuestra misión es brindar un servicio de
									calidad al cliente, centrada en las
									necesidades personales del mismo. Con trato
									humanista, ético, moral y profesional.
									Buscando las mejores tarifas, trato
									personalizado, personal efectivo. Con
									tecnología al día para buscar el beneficio
									en el cliente y que se “enamore” de nuestro
									trato y buscando en todo momento la calidad
									y el placer al cliente. Siempre
									identificando las mejores opciones, con
									trato amable, directo, explicativo, con
									tarifas justas y siempre las mejores.
									Crecimiento constante de nuestro equipo con
									las mejores capacitaciones a la vanguardia.
								</p>
							</div>
						</v-col>
					</v-row>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img-box {
	width: 100%;
}
img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	background-color: $primary-ligth;
}
.box-content {
	height: 300px;
	background-color: $white;
	position: relative;
	> div {
		height: 100%;
	}
	h3 {
		font-size: $fs-7xl;
		color: #ffffff;
		position: absolute;
		display: flex;
		align-items: center;
		font-weight: 800;
		font-size: $fs-7xl;
		height: 100%;
	}
	h3.left {
		left: 15%;
		text-align: left;
	}
	h3.right {
		right: 15%;
		text-align: right;
	}
}
.box-content-text {
	height: 480px;
	background-color: $white;
}
.content-text {
	max-width: 559px;
}

p {
	font-weight: 400;
	font-size: $fs-lg;
	color: #000000;
}

@media screen and (min-width: $md) {
	.box-content,
	.box-content-text {
		height: 600px;
	}
}
</style>
