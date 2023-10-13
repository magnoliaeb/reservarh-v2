<template>
	<div class="pb-16">
		<div class="content mt-lg-4">
			<v-row>
				<v-col cols="12">
					<v-skeleton-loader
						width="100%"
						:height="heightAndWidthImg"
						:min-height="heightAndWidthImg"
						type="image"
					></v-skeleton-loader>
				</v-col>
			</v-row>
			<v-row class="d-none d-md-block">
				<v-col cols="12" class="pa-0">
					<v-skeleton-loader
						tile
						type="list-item-three-line"
					></v-skeleton-loader>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="12" class="pa-0">
					<v-skeleton-loader
						tile
						type="list-item-three-line"
					></v-skeleton-loader>
					<v-skeleton-loader
						tile
						type="list-item-three-line"
					></v-skeleton-loader>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		heightAndWidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 164;
				case 'sm':
					return 184;
				case 'md':
					return 250;
				case 'lg':
					return 250;
				case 'xl':
					return 250;
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>
