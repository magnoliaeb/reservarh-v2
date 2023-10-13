<template>
	<div>
		<BannerIntro :title="'Pagos'" :bg="'banner-pagos'" />
		<section>
			<div class="content py-8 pt-md-10 pb-md-16">
				<v-row no-gutters class="justify-center">
					<v-col cols="12" md="10" lg="9">
						<ContactPaymentForm />
					</v-col>
				</v-row>
			</div>
		</section>
	</div>
</template>

<script>
import ContactPaymentForm from '../components/ContactPaymentForm.vue';
// import PayForm from '../components/PayForm.vue';
export default {
	components: { ContactPaymentForm },
	head: {
		title: 'Pagos',
	},
};
</script>

<style lang="scss" scoped></style>
