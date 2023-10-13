<template>
	<div
		class="promo px-2 px-sm-6 d-none wow animate__fadeInRight"
		data-wow-delay="1.5s"
	>
		<h3 class="promo-title">
			Super promoción

			<span class="">Del 23 al 26 de junio 2023</span>
		</h3>
		<div class="promo-content d-sm-flex align-center">
			<div class="d-flex align-center justify-end justify-md-start">
				<p>
					Habitación <br class="d-none d-sm-block" />
					doble por
				</p>
				<span class="d-block ml-3 mx-sm-6">$5,700</span>
			</div>
			<p class="">y niños grátis</p>
		</div>
		<!-- <p>y niños grátis</p> -->
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.promo {
	bottom: 60px;
	right: 0;
	position: absolute;
	background: rgba(232, 20, 20, 0.7);
	background-blend-mode: multiply;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	height: 140px;
	width: auto;

	// max-width: 525px;
	h3 {
		font-family: 'Pacifico';
		font-weight: 400;
		font-size: $fs-7xl;
		text-align: right;
		color: #ffffff;
		position: relative;
		top: 0px;
		span {
			display: block;
			font-family: 'Roboto';
			font-weight: 300;
			font-size: $fs-md;
			// text-align: right;
			line-height: 20px !important;
			color: #ffffff;
			position: absolute;
			left: 35px;
			top: 5px;
		}
	}
	.promo-content {
		position: relative;
		top: -8px;
		right: 0;
	}
	p {
		font-weight: 300;
		font-size: $fs-lg;
		text-align: right;
		line-height: 20px !important;
		color: #ffffff;
		line-height: 35px;
	}
	span {
		font-weight: 900;
		font-size: $fs-6xl;
		text-align: right;
		color: #ffffff;
	}
}

@media screen and (min-width: $sm) {
	.promo {
		bottom: 40px;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		height: 140px;
		// max-width: 525px;
		h3 {
			font-size: $fs-10xl;
			text-align: right;
			position: relative;
			top: -55px;
			span {
				display: block;
				font-size: $fs-md;
				text-align: right;
				color: #ffffff;
				// position: relative;
				right: 40px;
				top: auto;
				bottom: -10px;
			}
		}
		.promo-content {
			position: relative;
			top: -40px;
		}
		p {
			font-size: $fs-lg;
			text-align: right;
		}
		span {
			font-size: $fs-8xl;
			text-align: right;
		}
	}
}
@media screen and (min-width: $md) {
}

@media screen and (min-width: $lg) {
	.promo {
		bottom: 100px;
	}
}
@media screen and (min-width: $xl) {
}
</style>
