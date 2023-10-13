<template>
	<div>
		<!-- <HomeBanner /> -->
		<HomeSlider />
		<SliderPublicity class="mt-4" />
		<OurBenefits />
		<DiscountCard />
	</div>
</template>

<script>
import DiscountCard from '../components/DiscountCard.vue';
import HomeBanner from '../components/HomeBanner.vue';
import HomeSlider from '../components/HomeSlider.vue';
import OurBenefits from '../components/OurBenefits.vue';
import SliderPublicity from '../components/SliderPublicity.vue';
export default {
	components: {
		SliderPublicity,
		OurBenefits,
		HomeBanner,
		DiscountCard,
		HomeSlider,
	},
	head: {
		title: 'Inicio',
	}
};
</script>

<style lang="scss" scoped></style>
