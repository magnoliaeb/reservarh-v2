<style lang="scss">
.floating-whatsapp {
	position: fixed;
	bottom: 10px;
	right: 10px;
	z-index: 100 !important;
	border-radius: 100%;

	img {
		width: 70% !important;
		height: 70% !important;
		// height: auto;
	}
}
</style>

<template>
	<div class="floating-whatsapp no-print">
		<a href="https://wa.me/523511776035" target="_blank">
			<v-avatar
				color="#73C160"
				:size="$vuetify.breakpoint.mdAndDown ? 40 : 70"
			>
				<img
					src="../assets/images/iconos/whatsapp-success.svg"
					alt="whatsapp"
				/>
			</v-avatar>
		</a>
	</div>
</template>
