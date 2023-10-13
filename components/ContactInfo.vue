<template>
	<div class="">
		<v-row
			class="wow animate__animated animate__fadeInUp"
			data-wow-delay="1s"
		>
			<v-col cols="12">
				<h2>Datos de contacto</h2>
			</v-col>
			<v-col cols="12">
				<ul class="">
					<li class="d-flex mb-4 mb-md-10 align-baseline">
						<img
							class="mr-3"
							src="../assets/images/iconos/pin.svg"
							alt="pin"
						/>
						<p>
							Calzada Zamora-Jacona 1105-A, CP. 59810, Jacona,
							Michoacán.
						</p>
					</li>
					<li class="d-flex mb-4 mb-md-10 align-baseline">
						<img
							class="mr-3"
							src="../assets/images/iconos/sobre.svg"
							alt="sobre"
						/>
						<a href="mailto:contacto@reservarh.com"
							>contacto@reservarh.com</a
						>
						<!-- <a href="mailto:info@proveeca.com">info@proveeca.com</a> -->
					</li>
					<li class="d-flex mb-4 mb-md-10 align-baseline">
						<img
							class="mr-3"
							src="../assets/images/iconos/tel.svg"
							alt="tel"
						/>
						<a href="tel:+523515206735">351 520 6735 </a>
					</li>
				</ul>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 800;
	font-size: $fs-3xl;
	color: #000000;
}
p,
a {
	font-weight: 400;
	font-size: $fs-lg;
	color: #434343;
}

a:hover {
	color: $primary;
	text-decoration: underline;
}

.icon {
	height: 20px !important;
	width: 20px !important;
	display: block;
	img {
		height: 100% !important;
		width: 100% !important;
	}
}

@media screen and (min-width: $sm) {
}
</style>
