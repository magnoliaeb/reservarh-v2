<template>
	<section class="suscribe mt-6">
		<v-form @submit.prevent="suscribeUser">
			<div class="group d-sm-flex justify-sm-center">
				<input
					placeholder="Correo electrónico"
					type="email"
					v-model.trim="email"
				/>
				<v-btn
					class="mt-4 mt-sm-0"
					:loading="isLoading"
					depressed
					type="submit"
					>Suscribirme</v-btn
				>
			</div>
		</v-form>
	</section>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			isLoading: false,
		};
	},
	methods: {
		suscribeUser() {
			this.isLoading = true

			this.$store.dispatch("newsletter/subscribe", {
				email: this.email
			})
			.then(() => this.email = '')
			.finally(() => this.isLoading = false)
		},
	},
};
</script>

<style lang="scss" scoped>
.group {
	height: 64px;
}
button {
	font-weight: 400 !important;
	font-size: $fs-base !important;
	color: #ffffff !important;
	height: 100% !important;
	background: linear-gradient(
		101.7deg,
		#e81414 2.95%,
		#750b0d 100%
	) !important;
	border-radius: 5.58px !important;
}

input {
	background-color: white;
	height: 64px !important;
	padding: 0 20px;
	width: 100%;
	&::placeholder {
		font-weight: 400;
		font-size: $fs-base;
		color: #949494;
	}
	border-radius: 5.58px;
	&:focus {
		outline: none;
	}
}

@media screen and (min-width: $sm) {
	button {
		border-radius: 0 !important;
		border-top-right-radius: 5.58px !important;
		border-bottom-right-radius: 5.58px !important;
	}
	input {
		border-radius: 0px;
		border-top-left-radius: 5.58px;
		border-bottom-left-radius: 5.58px;
		max-width: 400px;
	}
}
</style>
