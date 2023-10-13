<template>
	<nav>
		<v-app-bar
			:class="{ sticky: sticky }"
			app
			fixed
			:flat="!sticky"
			class="nav"
		>
			<div class="content fill-height">
				<v-row class="fill-height justify-space-between align-center">
					<v-col cols="auto" class="d-lg-none order-1 px-0 py-0">
						<div class="d-flex justify-end">
							<v-app-bar-nav-icon @click.stop="openMenu">
								<img
									v-if="!showMenu"
									class="menu"
									:src="
										require(`../assets/images/iconos/${
											((sticky ||
												$vuetify.breakpoint
													.mdAndDown) &&
												isTrasnparent) ||
											sticky
												? 'menu'
												: 'menu-black'
										}.svg`)
									"
									alt="menu-burger"
								/>
							</v-app-bar-nav-icon>
						</div>
					</v-col>

					<v-col
						cols="6"
						lg="auto"
						class="fill-height d-flex align-center"
					>
						<nuxt-link
							:to="{ name: 'index' }"
							class="d-flex justify-center"
						>
							<img
								class="logo"
								:src="
									require(`../assets/images/iconos/${
										((sticky ||
											$vuetify.breakpoint.mdAndDown) &&
											isTrasnparent) ||
										sticky
											? 'logo-blanco'
											: 'logo'
									}.svg`)
								"
								alt="logo"
							/>
						</nuxt-link>
					</v-col>
					<v-col
						cols="12"
						lg="auto"
						class="hidden-md-and-down py-0 fill-height"
					>
						<ul class="d-flex align-center fill-height">
							<li
								class="mx-3 fill-height"
								v-for="item in items"
								:key="item.id"
							>
								<nuxt-link
									v-if="item.to"
									class="link-item"
									:class="[
										!isTrasnparent ? 'black--text' : '',
									]"
									:to="{
										name: item.to,
										redirect: item.redirect,
									}"
									>{{ item.title }}</nuxt-link
								>
								<a
									v-if="item.href"
									:href="item.href"
									class="link-item"
									:class="[
										!isTrasnparent ? 'black--text' : '',
									]"
									>{{ item.title }}</a
								>
								<div class="line hidden-md-and-down"></div>
							</li>
						</ul>
					</v-col>
				</v-row>
			</div>
		</v-app-bar>

		<v-navigation-drawer
			right
			class="drawer hidden-lg-and-up"
			v-model="showMenu"
			fixed
			height="100vh"
		>
			<v-btn
				style="right: 20px"
				@click="showMenu = false"
				color="#fff"
				text
				icon
				absolute
				top
			>
				<v-icon color="white">mdi-close</v-icon>
			</v-btn>
			<v-row class="text-center mt-16">
				<v-col cols="12">
					<h3>MENÚ</h3>
				</v-col>

				<v-col cols="12">
					<!-- list -->
					<v-list flat>
						<v-list-item
							class="mb-6"
							:to="{ name: item.to }"
							v-for="(item, i) in items"
							:key="i"
							exact-active-class="primary--text"
						>
							<v-list-item-content>
								<v-list-item-title
									v-text="item.title"
								></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	props: {
		isTrasnparent: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			sticky: false,
			showMenu: false,
			drawer: false,
			items: [
				{
					title: 'Home',
					to: 'index',
					href: '',
				},
				{
					title: 'Nosotros',
					to: 'nosotros',
					href: '',
				},
				{
					title: 'Promociones',
					to: 'promociones',
					href: '',
				},
				{ title: 'Blog', to: 'blog', href: '', hash: null },
				{
					title: 'Pagos',
					to: 'pagos',
					// href: 'http://pagos.reservarh.com/reservations',
				},
				{
					title: 'Contacto',
					to: 'contacto',
					href: '',
				},
			],
		};
	},
	beforeMount() {
		this.handleScroll();
		window.addEventListener('scroll', this.handleScroll);
	},

	methods: {
		handleScroll() {
			if (item.hash == '#publicity') {
				this.$vuetify.goTo('#publicity', this.options);
			}
		},

		openMenu() {
			this.showMenu = !this.showMenu;
		},
		close() {
			this.showMenu = false;
		},
		handleScroll() {
			// console.log(window.scrollY > 20);
			if (window.scrollY > 40) {
				this.sticky = true;
			} else {
				this.sticky = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	// border: 1px solid red;
}
nav {
	z-index: 80;
	position: relative;
}

.nav {
	min-height: 105;
	height: 105;
	top: 0;
	background: rgba(
		255,
		255,
		255,
		0.68
	) !important; // background-color: orange !important;
	border-bottom: 1px solid rgba(217, 217, 217, 0.7);
	// min-height: 47px;
}
.content {
	height: 100%;
}

.menu {
	width: 20px;
	height: 18px;
}

.logo {
	width: 57px;
	height: 37px;
}

.drawer {
	// opacity: 0.95;
	// background-color: black !important;
	width: 100% !important;
	max-width: 425px !important;
	background: rgba(41, 41, 41, 0.89) !important;
	h3 {
		font-weight: 700;
		font-size: $fs-2xl;
		text-align: center;
		color: #ffffff;
	}
	.v-list-item__title {
		font-weight: 300 !important;
		font-size: $fs-xl !important;
		text-align: center !important;
		color: #ffffff !important;
	}
}

li {
	position: relative;
}
a.link-item {
	font-weight: 600;
	font-size: $fs-base;
	color: #000000;
	height: 100%;
	display: flex;
	text-transform: uppercase;
	align-items: center;
	&:hover + .line {
		background-color: $primary;
	}
}
.nuxt-link-exact-active + .line {
	background-color: $primary;
}
a.link-item.nuxt-link-exact-active {
	font-weight: 900;
}

.line {
	position: absolute;
	width: 100%;
	height: 3px;
	bottom: 0px;
	background-color: transparent;
	margin: 0 auto;
	display: flex;
	justify-content: center;
}
.nav.sticky {
	background-color: #000 !important;
	// position: fixed;
	.nuxt-link-exact-active + .line {
		background-color: $white;
	}
	.content {
		border-bottom: none;
	}
	a.link-item {
		color: #ffffff !important;
	}
}

@media screen and (min-width: $lg) {
	.nav {
		min-height: 85px !important;
		// top: 33px !important;
	}
	.logo {
		width: 55px;
		height: 70px;
	}
}
@media screen and (min-width: $xl) {
	.nav {
		min-height: 105px !important;
		// top: 33px !important;
	}
}
</style>
