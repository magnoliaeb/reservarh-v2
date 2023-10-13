<template>
	<div class="contact-form">
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
							name="La razón social"
							rules="requiredF"
						>
							<label for="business_name">Razón social*</label>
							<v-text-field
								required
								id="business_name"
								ref="business_name"
								type="text"
								v-model.trim="form.business_name"
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
						<validation-provider
							v-slot="{ errors }"
							name="El nombre comercial"
							rules="required"
						>
							<label for="name">Nombre comercial*</label>
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
					<v-col class="py-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="EL RFC"
							:rules="{ required: true }"
						>
							<label for="rfc">RFC*</label>
							<v-text-field
								required
								id="rfc"
								ref="rfc"
								type="text"
								v-model.trim="form.rfc"
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
					<v-col class="py-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="La calle"
							rules="requiredF"
						>
							<label for="street">Calle*</label>
							<v-text-field
								required
								id="street"
								ref="street"
								type="text"
								v-model.trim="form.street"
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
						<validation-provider
							v-slot="{ errors }"
							name="El número exterior"
							rules="required"
						>
							<label for="external_number"
								>Número exterior*</label
							>
							<v-text-field
								required
								id="external_number"
								ref="external_number"
								type="text"
								v-model.trim="form.external_number"
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
						<validation-provider
							v-slot="{ errors }"
							name="La número interior"
							:rules="{ required: false }"
						>
							<label for="internal_number">Número interior</label>
							<v-text-field
								required
								id="internal_number"
								ref="internal_number"
								type="text"
								v-model.trim="form.internal_number"
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
						<validation-provider
							v-slot="{ errors }"
							name="La colonia"
							rules="requiredF"
						>
							<label for="agency">Colonia*</label>
							<v-text-field
								required
								id="suburb"
								ref="suburb"
								type="text"
								v-model.trim="form.suburb"
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
						<validation-provider
							v-slot="{ errors }"
							name="La ciudad"
							rules="requiredF"
						>
							<label for="city_name">Ciudad*</label>
							<v-text-field
								required
								id="city_name"
								ref="city_name"
								type="text"
								v-model.trim="form.city_name"
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
						<validation-provider
							v-slot="{ errors }"
							name="El estado"
							rules="required"
						>
							<label for="state_name">Estado*</label>
							<v-text-field
								required
								id="state_name"
								ref="state_name"
								type="text"
								v-model.trim="form.state_name"
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
						<validation-provider
							v-slot="{ errors }"
							name="El país"
							rules="required"
						>
							<label for="country_name">País*</label>
							<v-text-field
								required
								id="country_name"
								ref="country_name"
								type="text"
								v-model.trim="form.country_name"
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
						<validation-provider
							v-slot="{ errors }"
							name="El código postal*"
							rules="required|numeric"
						>
							<label for="postcode">Código Postal*</label>
							<v-text-field
								required
								id="postcode"
								ref="postcode"
								type="text"
								v-model.trim="form.postcode"
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
						<validation-provider
							v-slot="{ errors }"
							name="La moneda"
							rules="required"
						>
							<label for="currency" class="mr-md-10"
								>Moneda*</label
							>
							<!-- <v-radio-group v-model.trim="form.currency" row>
									<v-radio
										v-for="currency in currencies"
										:key="currency"
										:label="currency"
										:value="currency"
									></v-radio>
								</v-radio-group> -->
							<v-select
								v-model="form.currency"
								ref="currency"
								id="currency"
								solo
								:height="
									$vuetify.breakpoint.smAndDown
										? '60px'
										: '70px'
								"
								flat
								outlined
								:items="currencies"
								:error-messages="errors"
							>
								<template v-slot:append>
									<v-icon class="icon">
										mdi-chevron-down
									</v-icon>
								</template>
							</v-select>
						</validation-provider>
					</v-col>
				</v-row>
				<v-row>
					<v-col class="py-0" cols="12" md="12" lg="6">
						<label for="agency_phone_1">Teléfono*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El teléfono*"
							:rules="{
								required: true,
								numeric: true,
								max: 15,
							}"
						>
							<v-text-field
								required
								id="agency_phone_1"
								ref="agency_phone_1"
								type="text"
								v-model.trim="form.agency_phone_1"
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
						<label for="agency_phone_2">
							<br class="d-none d-lg-block"
						/></label>
						<validation-provider
							v-slot="{ errors }"
							name="El teléfono secudario*"
							:rules="{
								required: false,
								numeric: true,
								max: 15,
							}"
						>
							<v-text-field
								required
								id="agency_phone_2"
								ref="agency_phone_2"
								type="text"
								v-model.trim="form.agency_phone_2"
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
						<label for="agency_phone_3"></label>
						<validation-provider
							v-slot="{ errors }"
							name="El teléfono adicional*"
							:rules="{
								required: false,
								numeric: true,
								max: 15,
							}"
						>
							<v-text-field
								required
								id="agency_phone_3"
								ref="agency_phone_3"
								type="text"
								v-model.trim="form.agency_phone_3"
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
						<label for="web_page">Página Web</label>
						<validation-provider
							v-slot="{ errors }"
							name="La página web"
							:rules="{
								requiredF: false,
							}"
						>
							<v-text-field
								required
								id="web_page"
								ref="web_page"
								type="text"
								v-model.trim="form.web_page"
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
				</v-row>

				<v-row>
					<v-col class="mb-6" cols="12">
						<h2>Datos de contacto</h2>
						<v-divider
							style="background: #000000 !important"
						></v-divider>
					</v-col>
					<v-col class="py-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="El nombre"
							rules="required"
						>
							<label for="agent_name">Nombre*</label>
							<v-text-field
								required
								id="agent_name"
								ref="agent_name"
								type="text"
								v-model.trim="form.agent_name"
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
					<v-col class="py-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="El apellido paterno"
							rules="required"
						>
							<label for="agent_paternal_name"
								>Apellido Paterno*</label
							>
							<v-text-field
								required
								id="agent_paternal_name"
								ref="agent_paternal_name"
								type="text"
								v-model.trim="form.agent_paternal_name"
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

					<v-col class="py-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="El apellido materno"
							:rules="{ required: false }"
						>
							<label for="agent_maternal_name"
								>Apellido Materno</label
							>
							<v-text-field
								required
								id="agent_maternal_name"
								ref="agent_maternal_name"
								type="text"
								v-model.trim="form.agent_maternal_name"
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
					<v-col class="py-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="El cargo"
							rules="required"
						>
							<label for="agent_job_title">Cargo*</label>
							<v-text-field
								required
								id="agent_job_title"
								ref="agent_job_title"
								type="text"
								v-model.trim="form.agent_job_title"
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
					<v-col class="pt-0" cols="12" md="12" lg="12">
						<validation-provider
							v-slot="{ errors }"
							name="El sexo"
							rules="required"
						>
							<div class="d-flex align-center">
								<label for="agent_gender" class="mr-md-10"
									>Sexo*</label
								>
								<v-radio-group
									v-model.trim="form.agent_gender"
									row
									:error-messages="errors"
								>
									<v-radio
										v-for="gender in genders"
										:key="gender"
										:label="gender"
										:value="gender"
									></v-radio>
								</v-radio-group>
							</div>
						</validation-provider>
					</v-col>
					<v-col class="py-0" cols="12" md="12" lg="6">
						<label for="agent_phone">Teléfono directo*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El teléfono directo"
							:rules="{
								required: true,
								numeric: true,
								max: 15,
							}"
						>
							<v-text-field
								required
								id="agent_phone"
								ref="agent_phone"
								type="text"
								v-model.trim="form.agent_phone"
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
						<label for="agent_mobile">Teléfono móvil*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El teléfono móvil"
							:rules="{
								required: true,
								numeric: true,
								max: 15,
							}"
						>
							<v-text-field
								required
								id="agent_mobile"
								ref="agent_mobile"
								type="text"
								v-model.trim="form.agent_mobile"
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
						<label for="agent_email">Correo electrónico*</label>
						<validation-provider
							v-slot="{ errors }"
							name="El correo"
							rules="required|email"
						>
							<v-text-field
								required
								id="agent_email"
								ref="agent_email"
								type="email"
								v-model.trim="form.agent_email"
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
							<label for="uploaded_rnt_file"
								>Registro nacional de turismo (RNT)*</label
							>
							<v-file-input
								id="uploaded_rnt_file"
								name="uploaded_rnt_file"
								accept="application/pdf, image/png, image/jpeg, .docx"
								hint="Documento .pdf, .png, .jpg, .docx"
								ref="uploaded_rnt_file"
								placeholder="Documento .pdf, .png, .jpg, .docx"
								required
								v-model.trim="form.uploaded_rnt_file"
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
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import ContactInfo from '../components/ContactInfo';

export default {
	name: 'RegisterAgencyForm',
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
				business_name: null,
				name: null,
				rfc: null,
				street: null,
				external_number: null,
				internal_number: null,
				suburb: null,
				state_name: null,
				city_name: null,
				country_name: null,
				postcode: null,
				currency: 'MXN',
				agency_phone_1: '',
				agency_phone_2: '',
				agency_phone_3: '',
				web_page: null,
				agent_name: null,
				agent_paternal_name: null,
				agent_maternal_name: null,
				agent_job_title: null,
				agent_gender: null,
				agent_phone: null,
				agent_mobile: null,
				agent_email: null,
				uploaded_rnt_file: null,
				recaptcha: '',
			},
		};
	},
	computed: {
		currencies() {
			return this.$store.state.agencies.config.currencies ?? [];
		},

		genders() {
			return this.$store.state.agencies.config.genders ?? [];
		},
	},
	methods: {
		// formatPhone() {
		// 	if (this.form.agency_phone_1.length >= 3) {
		// 		let numero_1 = this.form.agency_phone_1.replace(/\D/g, '');
		// 		numero_1 = `(${numero_1.slice(0, 3)}) ${numero_1.slice(3)}`;
		// 		this.form.agency_phone_1 = numero_1;
		// 	}
		// 	if (this.form.agency_phone_2.length >= 3) {
		// 		let numero_2 = this.form.agency_phone_2.replace(/\D/g, '');
		// 		numero_2 = `(${numero_2.slice(0, 3)}) ${numero_2.slice(3)}`;
		// 		this.form.agency_phone_2 = numero_2;
		// 	}
		// 	if (this.form.agency_phone_3.length >= 3) {
		// 		let numero_3 = this.form.agency_phone_3.replace(/\D/g, '');
		// 		numero_3 = `(${numero_3.slice(0, 3)}) ${numero_3.slice(3)}`;
		// 		this.form.agency_phone_3 = numero_3;
		// 	}
		// },
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.form.validate()) {
				this.isLoading = true;
				await this.recaptcha();

				const formData = new FormData();
				for (const key in this.form) {
					if (this.form.hasOwnProperty(key)) {
						formData.append(key, this.form[key]);
					}
				}

				this.$store
					.dispatch('agencies/store', {
						data: formData,
					})
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
				business_name: null,
				name: null,
				rfc: null,
				street: null,
				external_number: null,
				internal_number: null,
				suburb: null,
				state_name: null,
				city_name: null,
				country_name: null,
				postcode: null,
				currency: 'MXN',
				agency_phone_1: '',
				agency_phone_2: '',
				agency_phone_3: '',
				web_page: null,
				agent_name: null,
				agent_paternal_name: null,
				agent_maternal_name: null,
				agent_job_title: null,
				agent_gender: null,
				agent_phone: null,
				agent_mobile: null,
				agent_email: null,
				uploaded_rnt_file: null,
				recaptcha: '',
			};
			this.$refs.form.reset();
		},
	},
	template:
		'<button class="grecaptcha-badge" @click="recaptcha">Execute recaptcha</button>',

	created() {
		this.$store.dispatch('agencies/config');
	},
};
</script>

<style lang="scss" scoped>
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

h2 {
	color: #000;
	font-style: normal;
	font-weight: 400;
	font-size: $fs-lg;
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
