// window.addEventListener("load", () => {
// 	const load = document.querySelector(".lds-dual-ring");
// 	load.classList.add("finish-load");
// });

$("#main").owlCarousel({
	loop: true,
	margin: 10,
	dots: true,
	nav: true,
	navText: [
		"<i class='fas fa-chevron-left'>",
		"<i class='fas fa-chevron-right'>",
	],
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

$("#shop").owlCarousel({
	loop: true,
	margin: 20,
	dots: false,
	nav: true,
	navText: [
		"<i class='fas fa-chevron-left'>",
		"<i class='fas fa-chevron-right'>",
	],
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});

(function () {
	if (localStorage.getItem("products")) {
		cart.innerText = JSON.parse(localStorage.getItem("products")).length;
	} else {
		cart.innerText = 0;
	}
})();
