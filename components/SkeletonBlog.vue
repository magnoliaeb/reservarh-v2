<template>
	<div class="my-6 mb-16">
		<v-row class="justify-center">
			<v-col
				class="hidden-sm-and-down"
				cols="12"
				md="1"
				v-for="(item, index) in 7"
				:key="index"
			>
				<client-only
					><v-skeleton-loader
						max-width="100%"
						tile
						min-width="100%"
						width="100%"
						type="heading"
						class="mt-4 line"
					></v-skeleton-loader
				></client-only>
			</v-col>
		</v-row>
		<v-row>
			<v-col
				cols="12"
				sm="12"
				md="4"
				lg="3"
				v-for="(video, index) in numSkeleton"
				:key="index"
			>
				<client-only
					><v-skeleton-loader
						type="image"
						height="180px"
						max-height="180px"
					></v-skeleton-loader
				></client-only>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	computed: {
		numSkeleton() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return Array(4);
				case 'sm':
					return Array(4);
				case 'md':
					return Array(6);
				case 'lg':
					return Array(8);
				case 'xl':
					return Array(8);
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>
