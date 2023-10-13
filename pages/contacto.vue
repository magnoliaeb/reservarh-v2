<template>
	<div>
		<BannerIntro :title="'Contácto'" :bg="'contacto-banner'" />
		<section>
			<div class="content py-16">
				<v-row class="no-gutters justify-space-between">
					<v-col cols="12" md="5" lg="4" class="d-block d-md-none">
						<ContactInfo />
					</v-col>
					<v-col cols="12" md="7" lg="7">
						<v-row>
							<v-col cols="12" md="12" lg="6">
								<div class="contact-form">
									<label for="reason"
										>Selecciona la opción deseada</label
									>
									<v-select
										v-model="select"
										ref="reason"
										id="reason"
										solo
										:height="
											$vuetify.breakpoint.smAndDown
												? '60px'
												: '70px'
										"
										flat
										outlined
										:items="items"
										item-text="text"
										item-value="value"
										hide-details
									>
										<template v-slot:append>
											<v-icon class="icon">
												mdi-chevron-down
											</v-icon>
										</template>
									</v-select>
								</div>
							</v-col>
						</v-row>

						<ContactForm v-if="select == 'contacto'" />
						<RegisterAgencyForm v-if="select == 'agencia'" />
					</v-col>
					<v-col cols="12" md="5" lg="4" class="d-none d-md-block">
						<ContactInfo />
					</v-col>
				</v-row>
			</div>
		</section>

		<ContactMap v-if="select == 'contacto'" />
	</div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import ContactInfo from '../components/ContactInfo.vue';
import ContactMap from '../components/ContactMap.vue';
import RegisterAgencyForm from '../components/RegisterAgencyForm.vue';
export default {
	components: { ContactMap, ContactForm, ContactInfo, RegisterAgencyForm },
	head: {
		title: 'Contácto',
	},
	data() {
		return {
			select: 'contacto',
			items: [
				{
					text: 'Contacto',
					value: 'contacto',
				},
				{
					text: 'Me quiero registrar como agencia',
					value: 'agencia',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
</style>
