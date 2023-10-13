<template>
	<div>
		<div class="banner wow animate__animated animate__fadeIn">
			<div class="content fill-height banner-box">
				<v-row class="justify-center align-center fill-height">
					<v-col
						cols="12"
						md="10"
						class="wow animate__animated animate__fadeInUp"
					>
						<h1 class="mb-6 text-center">Nuestras promociones</h1>
						<p class="text-center">
							Tenemos las mejores promociones para que tengas unas
							increíbles vacaciones
						</p>
					</v-col>
				</v-row>
			</div>
		</div>
		<Promotionslider />
	</div>
</template>

<script>
import Promotionslider from '../components/Promotionslider.vue';
export default {
	components: { Promotionslider },
	head: {
		title: 'Promociones',
	},
};
</script>

<style lang="scss" scoped>
.banner {
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	background-color: $primary;
	position: relative;
}

img {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.banner-box {
	position: absolute;
}
h1 {
	font-weight: 800;
	font-size: $fs-5xl;
	color: #ffffff;
}

p {
	font-weight: 400;
	font-size: $fs-lg;
	color: #ffffff;
}

@media screen and (min-width: $md) {
	h1 {
		font-weight: 800;
		font-size: $fs-7xl;
		text-align: right;
		color: #ffffff;
	}
	.banner {
		height: 400px;
	}
}
</style>
