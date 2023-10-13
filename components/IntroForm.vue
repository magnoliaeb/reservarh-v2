<template>
	<div class="content-box">
		<div class="intro-form pa-1- pa-sm-2">
			<validation-observer ref="form" v-slot="{ invalid }">
				<v-form
					@submit.prevent="sendForm"
					class="wow animate__animated animate__fadeIn"
					data-wow-delay="1s"
					method="post"
					:action="redirectUrl"
					ref="theform"
				>
					<v-row class="">
						<v-col cols="12" class="">
							<h1>Reservaciones en línea</h1>
						</v-col>
						<v-col class="py-0" cols="12">
							<validation-provider
								v-slot="{ errors }"
								name="El usuario"
								rules="required"
							>
								<label for="user">Usuario*</label>
								<v-text-field
									required
									id="user"
									ref="user"
									name="usuario"
									type="text"
									v-model.trim="form.user"
									solo
									:height="
										$vuetify.breakpoint.smAndDown
											? '50px'
											: '45px'
									"
									flat
									outlined
									:error-messages="errors"
								/>
							</validation-provider>
						</v-col>
						<v-col class="py-0" cols="12">
							<label for="pass">Contraseña*</label>
							<validation-provider
								v-slot="{ errors }"
								name="La contraseña"
								:rules="{
									required: true,
								}"
							>
								<v-text-field
									required
									id="pass"
									ref="pass"
									name="password"
									type="password"
									v-model.trim="form.pass"
									solo
									flat
									:height="
										$vuetify.breakpoint.smAndDown
											? '50px'
											: '45px'
									"
									outlined
									:error-messages="errors"
								/>
							</validation-provider>
						</v-col>
						<!-- <v-col
							cols="12"
							md="12"
							lg="12"
							class="d-flex py-0 align-center"
						>
							<label class="mr-3" for="lang">Idioma*</label>
							<validation-provider
								class="flex-grow-1"
								v-slot="{ errors }"
								name="Idioma"
								rules="required"
							>
								<v-select
									color="#00a0df"
									:height="
										$vuetify.breakpoint.smAndDown
											? '50px'
											: '45px'
									"
									flat
									outlined
									solo
									:error-messages="errors"
									label="Selecciona un idioma"
									hide-details
									:items="languages"
									v-model="form.lang"
									name="language"
									type="number"
									item-text="text"
									item-value="value"
								>
									<template v-slot:append>
										<v-icon class="icon">
											mdi-chevron-down
										</v-icon>
									</template>
								</v-select>
							</validation-provider>
						</v-col> -->

						<v-col cols="12" class="">
							<v-btn
								color="primary"
								:loading="isLoading"
								:disabled="isDisabled && invalid"
								type="submit"
								block
								depressed
								>Entrar</v-btn
							>
						</v-col>
					</v-row>
				</v-form>
			</validation-observer>
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
			authUrl: 'https://www.reservenlinea.com/auth/preauth',
			redirectUrl: 'https://www.reservenlinea.com/auth/login',
			isDisabled: false,
			isLoading: false,
			showAlert: false,
			form: {
				user: null,
				pass: null,
				lang: 'es',
			},
		};
	},
	computed: {
		languages() {
			return [
				{
					text: 'Español',
					value: 'es',
				},
				{
					text: 'Inglés',
					value: 'en',
				},
				{
					text: 'Portugués',
					value: 'pt',
				},
			];
		},
	},
	methods: {
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.form.validate()) {
				// this.isLoading = true;

				this.$refs.theform.$el.submit();

				// if (process.env.VUE_APP_ENV == 'production') {
				// 	this.$refs.theform.$el.submit();

				// 	// let formData = new FormData()
				// 	// formData.append('user', this.form.user)
				// 	// formData.append('pass', this.form.pass)
				// 	// formData.append('lang', this.form.lang)

				// 	// this.$axios({
				// 	// 	method: 'post',
				// 	// 	url: 'https://www.reservenlinea.com/auth/preauth',
				// 	// 	data: formData,
				// 	// 	headers: {
				// 	// 		'Access-Control-Allow-Origin': '*',
				// 	// 		// 'X-Requested-With': 'XMLHttpRequest'
				// 	// 		// 'Content-Type': 'multipart/form-data'
				// 	// 	},
				// 	// 	// proxyHeaders: false,
				// 	// 	// credentials: false
				// 	// })
				// 	// .then(response => {
				// 	// 	console.log('then', response)
				// 	// })
				// 	// .catch(error => {
				// 	// 	console.log('catch', error.message)
				// 	// })
				// 	// .finally(() => {
				// 	// 	this.isDisabled = false
				// 	// 	this.isLoading = false
				// 	// })

				// 	// this.$axios.$post('https://www.reservenlinea.com/auth/preauth', {
				// 	// 	user: this.form.user,
				// 	// 	pass: this.form.pass,
				// 	// 	lang: this.form.lang
				// 	// 	// returnSecureToken: true,
				// 	// })
				// 	// .then(response => {
				// 	// 	console.log('then', response)
				// 	// })
				// 	// .catch(error => {
				// 	// 	console.log('catch', error.message)
				// 	// })
				// 	// .finally(() => {
				// 	// 	this.isDisabled = false
				// 	// 	this.isLoading = false
				// 	// })
				// } else {
				// 	this.isDisabled = false;
				// 	this.isLoading = false;
				// 	this.clear();

				// 	this.$refs.theform.$el.submit();
				// }

				// 	this.$nuxt.$emit('success-notify', 'Enviado con éxito');
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

		clear() {
			this.form = {
				user: null,
				pass: null,
				lang: null,
			};
			this.$refs.form.reset();
		},
	},
};
</script>

<style lang="scss" scoped>
.intro-form {
	background: rgba(0, 0, 0, 0.7);
	border-radius: 10px;
}
.content-box {
	max-width: 340px;
}
button {
	background: #e81414 !important;
	border-radius: 5px !important;
	width: 100% !important;
	height: 45px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	font-size: $fs-sm !important;
	color: #ffffff !important;
}
.icon {
	height: 20px;
	width: 20px;
}
.text-link {
	font-weight: 700 !important;
	font-size: $fs-md !important;
	color: #ffffff !important;
}
a {
	font-size: $fs-sm !important;
	font-weight: 300;
	text-align: right;
	color: #ffffff;
}
h1 {
	font-weight: 500;
	font-size: $fs-base;
	text-align: left;
	color: #ffffff;
	text-transform: uppercase;
}
p {
	font-style: normal;
	font-weight: 400;
	font-size: $fs-lg;
}

label {
	font-weight: 500;
	font-size: $fs-xs;
	color: #ffffff;
}
.v-input__control,
.v-input__slot,
fieldset {
	border-radius: 0 !important;
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
@media screen and (min-width: $xl) {
	button {
		height: 54px !important;
	}
	// button {
	// 	// width: 267px !important;
	// 	height: 60px !important;
	// 	font-size: 17px !important;
	// }
}
</style>
