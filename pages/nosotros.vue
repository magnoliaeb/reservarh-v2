<template>
	<div>
		<AboutIntro />
		<AboutGrid />
		<OurValues />
	</div>
</template>

<script>
import AboutGrid from '../components/AboutGrid.vue';
import AboutIntro from '../components/AboutIntro.vue';
import OurValues from '../components/OurValues.vue';
export default {
	components: { OurValues, AboutIntro, AboutGrid },
	head: {
		title: 'Nosotros',
	},
};
</script>

<style lang="scss" scoped></style>
