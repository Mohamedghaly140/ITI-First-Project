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

const cart = document.getElementById("cart");
let products = [];

let productsItems = document.querySelectorAll(".card-link");

for (let i = 0; i < productsItems.length; i++) {
	productsItems[i].addEventListener("click", event => {
		event.preventDefault();
		let addBtn = event.target;
		let elem = event.target.parentElement.parentElement;
		console.log(addBtn);
		if (localStorage.getItem("user")) {
			let title = elem.querySelector("h5").innerHTML;
			let desc = elem.querySelector("a").innerHTML;
			let price = elem.querySelector("p").innerHTML.split(" ")[2];
			let imageSrc = elem.querySelector("img").src;
			const item = {
				name: title,
				image: imageSrc,
				desc: desc,
				price: price,
			};
			products.push(item);
			localStorage.setItem("products", JSON.stringify(products));
		} else {
			alert("you need to login first");
		}
	});
}

(function () {
	if (localStorage.getItem("products")) {
		cart.innerText = JSON.parse(localStorage.getItem("products")).length;
	} else {
		cart.innerText = 0;
	}
})();
