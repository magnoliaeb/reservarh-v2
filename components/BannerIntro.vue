<template>
	<div class="banner wow animate__animated animate__fadeIn">
		<img
			:src="
				require(`../assets/images/${
					$vuetify.breakpoint.smAndDown ? 'movil' : 'web'
				}/${bg}.jpg`)
			"
			:alt="bg"
			class=""
		/>
		<div class="overline d-flex justify-center">
			<div class="content fill-height banner-box">
				<v-row class="justify-end align-center fill-height">
					<v-col
						cols="12"
						class="wow animate__animated animate__fadeInUp"
					>
						<h1 class="" v-html="title"></h1>
					</v-col>
				</v-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'title',
		},
		bg: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.banner {
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	background-color: $primary-ligth;
}

.overline {
	height: 100%;
	width: 100%;
	// opacity: 0.6188227;
	// background: rgba(13, 59, 124, 0.61);
	position: absolute;
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
	font-size: $fs-4xl;
	text-align: right;
	color: #ffffff;
}

@media screen and (min-width: $md) {
	h1 {
		font-weight: 800;
		font-size: $fs-9xl;
		text-align: right;
		color: #ffffff;
	}
	.banner {
		height: 430px;
	}
}
</style>
