<template>
	<v-app dark>
		<TheHeader />
		<v-main class="pa-0">
			<v-container fluid class="pa-0">
				<Nuxt class="animate__animated" />
				<!-- <div class="wow">Content to Reveal Here</div> -->
			</v-container>
		</v-main>
		<AlertSweet />

		<TheFooter />
		<WhatsAppBusiness />
	</v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import AlertSweet from '../components/AlertSweet.vue';
import WhatsAppBusiness from '../components/WhatsAppBusiness.vue';
export default {
	components: { TheFooter, AlertSweet, TheHeader, WhatsAppBusiness },
	mounted() {
		const WOW = require('wow.js');
		const wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animate__animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: false, // trigger animations on mobile devices (default is true)
			live: true, // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null, // optional scroll container selector, otherwise use window,
			resetAnimation: true, // reset animation on end (default is true)
		});

		// console.log(wow);

		wow.init();
	},
};
</script>

<style lang="scss" scoped></style>
