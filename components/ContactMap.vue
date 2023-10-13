<template>
	<section
		class="wow animate__animated animate__fadeIn"
		data-wow-duration="2s"
	>
		<!-- <iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14980710.00798479!2d-102.62050004999999!3d23.5540767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses-419!2sve!4v1666711905191!5m2!1ses-419!2sve"
			width="600"
			height="450"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe> -->
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.9144797652048!2d-102.30079272477175!3d19.970098481427346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU4JzEyLjQiTiAxMDLCsDE3JzUzLjYiVw!5e0!3m2!1ses!2smx!4v1693850905444!5m2!1ses!2smx"
			width="600"
			height="450"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
	position: relative;
	background-color: $primary-ligth;
	height: 700px;
}
iframe {
	background-color: $primary-ligth !important;
	bottom: 0 !important;
	height: 100% !important;
	left: 0 !important;
	max-height: 100% !important;
	max-width: 100% !important;
	min-height: 100% !important;
	min-width: 100% !important;
	object-fit: cover !important;
	object-position: top !important;
	position: absolute !important;
	right: 0 !important;
	top: 0 !important;
	width: 100% !important;
}

@media screen and (min-width: $md) {
	section {
		position: relative;
		background-color: $primary-ligth;
		height: 600px;
	}
}
</style>
