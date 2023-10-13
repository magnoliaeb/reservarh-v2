<template>
	<v-footer padless class="footer">
		<div class="content mb-lg-10">
			<v-row
				class="justify-center justify-md-space-between mt-10 pb-2 pb-lg-0"
			>
				<!-- logo -->
				<v-col
					cols="12"
					md="12"
					lg="auto"
					class="mb-10 mb-lg-0 d-flex justify-center align-center"
				>
					<nuxt-link to="/" class="d-block logo">
						<img
							class=""
							src="../assets/images/iconos/logo-blanco.svg"
							alt="logo"
						/>
					</nuxt-link>
				</v-col>

				<!-- contacto -->
				<v-col
					cols="12"
					sm="10"
					md="auto"
					lg="auto"
					class="mb-10 mb-lg-0"
					tag="address"
				>
					<h3 class="mb-6 text-center text-md-left">Contáctanos</h3>
					<ul class="">
						<li
							class="d-flex mb-4 mb-md-6 align-start text-center text-md-left justify-center justify-md-start"
						>
							<img
								class="mr-3"
								src="../assets/images/iconos/pin-white.svg"
								alt="pin-white"
							/>
							<p>
								<span class="d-sm-none">Calz.</span>
								<span class="d-none d-sm-inline-block"
									>Calzada</span
								>
								Zamora-Jacona 1105-A,<br />
								CP. 59810, Jacona, Michoacán.
							</p>
						</li>
						<li
							class="d-flex mb-4 mb-md-6 align-start justify-center justify-md-start"
						>
							<img
								class="mr-3"
								src="../assets/images/iconos/sobre-white.svg"
								alt="sobre-white"
							/>
							<a href="mailto:contacto@reservarh.com"
								>contacto@reservarh.com</a
							>
						</li>
						<li
							class="d-flex mb-4 mb-md-6 align-start justify-center justify-md-start"
						>
							<img
								class="mr-3"
								src="../assets/images/iconos/tel-white.svg"
								alt="tel-white"
							/>
							<!-- <a href="tel:+52502 3173 2325">502 3173 2325</a> -->
							<a href="tel:+523515206735">351 520 6735 </a>
						</li>
					</ul>
				</v-col>
				<!-- address -->
				<v-col
					cols="12"
					sm="10"
					md="auto"
					lg="auto"
					class="mb-10 mb-lg-0"
					tag="address"
				>
					<h3 class="mb-6 text-center text-md-left">
						Redes sociales
					</h3>
					<ul class="">
						<li
							class="d-flex mb-4 mb-md-6 align-start justify-center justify-md-start"
						>
							<a
								href="https://www.facebook.com/profile.php?id=100070186358552"
								target="_blank"
								class="icon mr-2"
							>
								<img
									src="../assets/images/iconos/facebook.svg"
									alt="facebook"
								/>
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=100070186358552"
								target="_blank"
								>Reservar H</a
							>
						</li>
						<li
							class="d-flex mb-4 mb-md-6 align-start justify-center justify-md-start"
						>
							<a
								href="https://www.instagram.com/reservarh/"
								target="_blank"
								class="icon mr-2"
							>
								<img
									src="../assets/images/iconos/instagram.svg"
									alt="instagram"
								/>
							</a>
							<a
								href="https://www.instagram.com/reservarh/"
								target="_blank"
								class="text-left text-break"
								>Reservar H</a
							>
						</li>
						<li
							class="d-flex mb-4 mb-md-6 align-start justify-center justify-md-start"
						>
							<a
								href="https://www.tiktok.com/@melissareservarh?_t=8fWThEmJl9q&_r=1"
								target="_blank"
								class="icon mr-2"
							>
								<img
									src="../assets/images/iconos/tik-toc-white.svg"
									alt="tik-toc"
								/>
							</a>
							<a
								href="https://www.tiktok.com/@melissareservarh?_t=8fWThEmJl9q&_r=1"
								target="_blank"
								class="text-left text-break"
								>melissareservarh</a
							>
						</li>
					</ul>
				</v-col>
				<v-col
					cols="12"
					sm="10"
					md="4"
					lg="4"
					class="mb-16 mb-lg-0 text-center text-md-left"
					tag="address"
				>
					<h3 class="mb-6">Newsletter</h3>
					<p clss="">
						Suscríbete a nuestro newsletter para no perderte nunca
						de nuestras promociones
					</p>
					<SuscribeForm />
				</v-col>
			</v-row>
		</div>
		<v-row class="justify-center bottom align-center mt-10 mt-sm-0">
			<v-col cols="12">
				<div class="content text-center">
					<nuxt-link to="aviso_privacidad">
						Aviso de privacidad
					</nuxt-link>
				</div>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
	background: #000000 !important;
	position: relative !important;
	overflow: hidden !important;
	color: $white;
	flex-direction: column;
}
* {
	font-style: normal;
}
.img-brand {
	object-fit: contain;
	max-height: 140px;
}
.img-brand-min {
	max-height: 90px;
	object-fit: contain;
}

h3 {
	font-weight: 500;
	font-size: $fs-2xl;
	color: #ffffff;
}

a,
p {
	font-weight: 300;
	font-size: $fs-lg;
	color: #ffffff;
}

a {
	&:hover {
		// color: $primary;
		// opacity: 0.6;
		text-decoration: underline;
	}
}

.logo {
	width: 115px;
	height: 145px;
}

.bottom {
	height: 58px;
	background: $primary;
	width: 100%;
	a {
		// font-family: 'Averta-Light';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		text-align: center;
		color: #ffffff;
		text-decoration: underline;
		&:hover {
			text-decoration: underline;
		}
	}
}

@media screen and (min-width: $md) {
	.logo {
		width: 145px;
		height: 183px;
	}
	// a,
	// p {
	// 	font-size: 15px;
	// }

	// .bottom {
	// 	height: 43px;
	// 	a,
	// 	span {
	// 		font-size: 15px;
	// 	}
	// }
}
</style>
