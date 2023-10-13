<template>
	<div class="">
		<validation-observer ref="form" v-slot="{ invalid }">
			<v-form
				@submit.prevent="sendForm"
				class="mt-10 wow animate__animated animate__fadeInUp"
				data-wow-delay="1s"
			>
				<v-row class="">
					<v-col class="py-0" cols="12" md="12" lg="6">
						<validation-provider
							v-slot="{ errors }"
							name="La agencia"
							rules="requiredF"
						>
							<label for="agency">Agencia*</label>
							<v-text-field
								required
								id="agency"
								ref="agency"
								type="text"
								v-model.trim="form.agency"
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
						<label for="agent">Agente*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El agente"
							:rules="{
								required: true,
							}"
						>
							<v-text-field
								required
								id="agent"
								ref="agent"
								type="text"
								v-model.trim="form.agent"
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
					<v-col class="py-0" cols="12" md="12" lg="6">
						<label for="clave">CLAVE*</label>
						<validation-provider
							v-slot="{ errors }"
							name="La clave"
							:rules="{
								requiredF: true,
							}"
						>
							<v-text-field
								required
								id="clave"
								ref="clave"
								type="text"
								v-model.trim="form.clave"
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
					<v-col class="" cols="12" md="6">
						<validation-provider
							v-slot="{ errors }"
							name="El archivo"
							:rules="{
								required: true,
							}"
						>
							<label for="attachment">Adjunta tu archivo</label>
							<v-file-input
								id="attachment"
								name="attachment"
								accept="application/pdf, image/png, image/jpeg, .docx"
								hint="Documento .pdf, .png, .jpg, .docx"
								ref="attachment"
								placeholder="Documento .pdf, .png, .jpg, .docx"
								required
								v-model="form.attachment"
								:error-messages="errors"
							>
							</v-file-input>
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
		<div
			class="card-polity px-3 py-2 px-sm-6 py-sm-4 mt-4 mt-sm-6 wow animate__animated animate__fadeInUp"
			data-wow-delay="1.5s"
		>
			<div>
				<p class="">
					<v-icon class="mr-1">mdi-alert-circle-outline</v-icon>
					Revisa en tu plataforma que la reserva este liberada antes
					del tiempo limite para evitar cancelaciones, si no esta
					liberada contacta a
					<a href="mailto:admon@reservarh.com">admon@reservarh.com</a>
					o al tel <a href="tel:+523511778331">351 177 8331</a>. Si
					requieres factura favor de solicitarla al correo
					<a href="mailto:facturacion@reservarh.com"
						>facturacion@reservarh.com</a
					>
					adjuntando el comprobante, el localizador de la reserva y la
					constancia de RFC actualizada.
				</p>
			</div>
		</div>
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
				agency: null,
				agent: null,
				clave: null,
				email: null,
				attachment: null,
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
				agency: null,
				agent: null,
				clave: null,
				email: null,
				attachment: null,
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
.card-polity {
	border-radius: 11px;
	border: 1px solid #a3a3a3;
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
a {
	font-style: normal;
	font-weight: 400;
	font-size: $fs-sm;
	color: #0047ff;
}
p {
	font-style: normal;
	font-weight: 400;
	font-size: $fs-sm;
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
