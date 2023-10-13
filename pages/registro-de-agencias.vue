<template>
	<div>
		<BannerIntro :title="'Registro de Agencias'" :bg="'contacto-banner'" />
		<section>
			<div class="content py-16">
				<v-row class="no-gutters justify-space-between">
					<v-col cols="12" md="7" lg="7">
						<RegisterAgencyForm />
					</v-col>
					<v-col cols="12" md="5" lg="4" class="d-none d-md-block">
						<ContactInfo />
					</v-col>
				</v-row>
			</div>
		</section>
	</div>
</template>

<script>
import PayForm from '../components/PayForm.vue';
import RegisterAgencyForm from '../components/RegisterAgencyForm.vue';
export default {
	components: { PayForm, RegisterAgencyForm },
	head: {
		title: 'Pagos de agencia',
	},
};
</script>

<style lang="scss" scoped></style>
