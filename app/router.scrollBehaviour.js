import goTo from 'vuetify/lib/services/goto';
const options = {
	duration: 30000,
	offset: 0,
	easing: 'easeInOutCubic',
};

// scrollBehavior = (to, from, savedPosition) => {
//   let scrollTo = 0;

//   if (to.hash) {
//     scrollTo = to.hash;
//     console.log("hash");
//   } else if (savedPosition) {
//     console.log("guardar posicion");
//     scrollTo = savedPosition.y;
//   }

//   return goTo(scrollTo, options);
// };

// export default () => {
//   console.log("here"); // never called
//   return { x: 0, y: 0 };
// };

export default function (to, from, savedPosition) {
	if (to && to.hash) {
		return {
			selector: to.hash,
			offset: { x: 0, y: 0 }, // avoid blocking the view when having fixed components
			behavior: 'smooth',
		};
	} else if (savedPosition) {
		return savedPosition;
	} else {
		return { x: 0, y: 0 };
	}
}
