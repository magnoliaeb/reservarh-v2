<template>
	<div
		class="banner wow animate__animated animate__fadeIn"
		data-wow-delay="0.5s"
	>
		<img
			:src="
				require(`../assets/images/${
					$vuetify.breakpoint.smAndDown ? 'movil' : 'web'
				}/nosotros/nosotros-banner-4.jpg`)
			"
			alt="banner"
			class=""
		/>
		<div class="overline d-flex justify-center">
			<div
				class="content fill-height d-flex py-10 py-md-0 align-md-center"
			>
				<v-row class="justify-end">
					<v-col cols="12" md="10" lg="9" class="">
						<v-row class="align-center" no-gutters>
							<v-col
								cols="12"
								class="mb-14 wow animate__animated animate__fadeInUp"
								data-wow-delay="0.5s"
							>
								<h2>Valores</h2>
							</v-col>
							<v-col cols="12">
								<ul>
									<li
										class="mb-16 wow animate__animated animate__fadeInUp"
										v-for="item in items"
										:key="item.id"
										:data-wow-delay="`${item.delay}s`"
									>
										<h3 class="mb-3">{{ item.title }}</h3>
										<p>{{ item.text }}</p>
									</li>
								</ul>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					title: 'Transparencia',
					text: 'Transparencia en nuestro trato, comunicación asertiva, crecimiento orgánico/integral en ambas direcciones.',
					delay: '1',
				},
				{
					id: 2,
					title: 'Puntualidad',
					text: 'Puntualidad, perspicacia para dar la mejor atención, siempre aprendiendo del entorno y de las necesidades que constantemente cambian, usando el mejor desarrollo digital y tecnológico.',
					delay: '1.5',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.banner {
	height: 1000px;
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
	// opacity: 0.6188227;
	background: rgba(0, 0, 0, 0.25);
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
}

.banner-box {
	position: absolute;
}
h2 {
	font-weight: 800;
	font-size: $fs-6xl;
	color: #ffffff;
}

h3 {
	font-weight: 700;
	font-size: $fs-3xl;
	color: #ffffff;
}

p {
	font-weight: 300;
	font-size: $fs-lg;
	color: #ffffff;
}

@media screen and (min-width: $md) {
	.banner {
		height: 800px;
	}
}
</style>
