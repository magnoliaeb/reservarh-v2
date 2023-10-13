<template>
	<div class="contact-form">
		<!-- <ContactInfo class="d-md-none my-2" /> -->
		<v-row>
			<v-col
				cols="12"
				class="wow animate__animated animate__fadeInUp"
				data-wow-delay="0.5s"
			>
				<p class="text-center text-md-left">
					Si tienes preguntas sobre tu orden o sobre nuestros
					productos, déjanos tus datos y nuestro equipo resolvera
					todas tus dudas.
				</p>
			</v-col>
		</v-row>

		<validation-observer ref="form" v-slot="{ invalid }">
			<v-form
				@submit.prevent="sendForm"
				class="mt-10 wow animate__animated animate__fadeInUp"
				data-wow-delay="0.5s"
			>
				<v-row class="">
					<v-col class="py-0" cols="12" md="12" lg="6">
						<validation-provider
							v-slot="{ errors }"
							name="El nombre"
							rules="required"
						>
							<label for="name">Nombre*</label>
							<v-text-field
								required
								id="name"
								ref="name"
								type="text"
								v-model.trim="form.name"
								solo
								:height="
									$vuetify.breakpoint.smAndDown
										? '60px'
										: '70px'
								"
								flat
								outlined
								:error-messages="errors"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12" md="12" lg="6">
						<label for="phone">Teléfono*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El teléfono"
							:rules="{
								required: true,
								numeric: true,
								max: 15,
							}"
						>
							<v-text-field
								required
								id="phone"
								ref="phone"
								type="text"
								v-model.trim="form.phone"
								solo
								flat
								:height="
									$vuetify.breakpoint.smAndDown
										? '60px'
										: '70px'
								"
								outlined
								:error-messages="errors"
							/>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12" md="12" lg="12">
						<label for="email">Correo electrónico*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El correo"
							rules="required|email"
						>
							<v-text-field
								required
								id="email"
								ref="email"
								type="email"
								v-model.trim="form.email"
								solo
								flat
								:height="
									$vuetify.breakpoint.smAndDown
										? '60px'
										: '70px'
								"
								outlined
								:error-messages="errors"
							/>
						</validation-provider>
					</v-col>

					<v-col cols="12" class="py-0">
						<label for="message">Mensaje*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El mensaje"
							rules="required"
						>
							<v-textarea
								requierd
								outlined
								ref="message"
								v-model.trim="form.message"
								id="message"
								auto-grow
								flat
								:row-height="
									$vuetify.breakpoint.smAndDown ? 30 : 35
								"
								solo
								:error-messages="errors"
							></v-textarea>
						</validation-provider>
					</v-col>

					<v-col class="" cols="12">
						<v-btn
							color="primary"
							:loading="isLoading"
							:disabled="isDisabled && invalid"
							type="submit"
							depressed
							>Enviar</v-btn
						>
					</v-col>
				</v-row>
			</v-form>
		</validation-observer>
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import ContactInfo from '../components/ContactInfo';

export default {
	name: 'RegisterForm',
	components: {
		ValidationProvider,
		ValidationObserver,
		ContactInfo,
	},
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			showAlert: false,
			form: {
				name: null,
				phone: null,
				email: null,
				message: null,
				recaptcha: '',
			},
		};
	},
	methods: {
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.form.validate()) {
				this.isLoading = true;
				await this.recaptcha();
				const data = {
					...this.form,
				};

				this.$store
					.dispatch('contact/simple', data)
					.then(() => this.clear())
					.finally(() => {
						this.isDisabled = false;
						this.isLoading = false;
					});
			} else {
				// console.log("here");
				const inputForm = Object.keys(this.form);
				for (let i = 0; i < inputForm.length; i++) {
					const element = inputForm[i];
					if (this.$refs[element].hasError) {
						this.$refs[element].focus();
						return;
					}
				}
			}
		},
		async recaptcha() {
			// (optional) Wait until recaptcha has been loaded.
			await this.$recaptchaLoaded();

			// Execute reCAPTCHA with action "login".
			const recaptcha = await this.$recaptcha('contact');
			this.form.recaptcha = recaptcha;

			// Do stuff with the received token.
		},
		clear() {
			this.form = {
				name: null,
				phone: null,
				email: null,
				message: null,
				recaptcha: '',
			};
			this.$refs.form.reset();
		},
	},
	template:
		'<button class="grecaptcha-badge" @click="recaptcha">Execute recaptcha</button>',
};
</script>

<style lang="scss" scoped>
section {
	background: #f7f7f7;
}
button {
	background: #e81414 !important;
	border-radius: 5px !important;
	width: 100% !important;
	height: 54px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	font-size: $fs-sm !important;
	color: #ffffff !important;
}
p {
	font-style: normal;
	font-weight: 400;
	font-size: $fs-lg;
}

label {
	font-style: normal;
	font-weight: 400;
	font-size: $fs-base;
	color: #7d7d7d;
}

@media screen and (min-width: $sm) {
	button {
		max-width: 298px !important;
	}
	// button {
	// 	// width: 267px !important;
	// 	height: 60px !important;
	// 	font-size: 17px !important;
	// }
}
</style>
