<template>
	<v-app dark>
		<v-row class="justify-center align-center">
			<v-col cols="8" sm="auto" class="d-flex justify-center flex-column">
				<v-card class="" tile flat>
					<img
						class="wow animate__animated animate__fadeInUp"
						data-wow-delay="1s"
						src="../assets/images/iconos/error.svg"
						alt="error-404"
					/>
					<h1
						class="my-8 wow animate__animated animate__fadeIn"
						data-wow-delay="1.5s"
						v-if="error.statusCode === 404"
					>
						Página <span>no encontrada</span>
					</h1>
					<h1
						v-else
						class="wow animate__animated animate__fadeIn"
						data-wow-delay="1.5s"
					>
						{{ otherError }}
					</h1>
				</v-card>
				<v-btn
					@click="goBack"
					rounded
					class="
						mt-4
						mx-auto
						wow
						animate__animated animate__pulse animate__repeat-2
					"
					data-wow-delay="1.5s"
					depressed
				>
					Regresar
				</v-btn>
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	layout: 'error-layout', // you can set a custom layout for the error page,

	data() {
		return {
			pageNotFound: '404 página no encontrada',
			otherError: 'An error occurred',
		};
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title,
		};
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-weight: 200;
	font-size: 20.49px;
	line-height: 138.69%;

	/* or 49px */
	letter-spacing: 0.025em;
	text-transform: uppercase;

	color: $black;
	span {
		font-weight: 700;
	}
}

img {
	display: block;
	margin: 0 auto;
	height: 100px;
	width: 100px;
}

.empty {
	height: 20vh;
}

button {
	width: 199px !important;
	height: 49px !important;

	background: $primary !important;
	font-weight: 700 !important;
	font-size: 19px !important;
	line-height: 22px !important;
	letter-spacing: 0.025em !important;

	color: #ffffff !important;
	text-transform: inherit !important;
}

@media screen and (min-width: $sm) {
	h1 {
		font-size: 35px;
	}
}
</style>
