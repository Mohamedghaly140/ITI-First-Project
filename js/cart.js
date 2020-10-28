const cartContainer = document.querySelector(".row");

function fetchProducts() {
	if (localStorage.getItem("products")) {
		cart.innerText = JSON.parse(localStorage.getItem("products")).length;
	} else {
		cart.innerText = 0;
	}
}
fetchProducts();

products = [];

if (localStorage.getItem("products")) {
	products = JSON.parse(localStorage.getItem("products"));
}

function displayProducts() {
	let element = "";
	for (let i = 0; i < products.length; i++) {
		element += `
                <div class="col-md-8 offset-md-4">
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img
                                    src="${products[i].image}"
                                    class="card-img"
                                    alt="${products[i].name}"
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${products[i].name}</h5>
                                    <p class="card-text">
                                        ${products[i].desc}
                                    </p>
                                    <p class="card-text">
                                        <small class="text-muted"
                                            >${products[i].price}</small
                                        >
                                    </p>
                                    <div
                                        class="d-flex justify-content-end align-items-center"
                                    >
                                        <button
                                            class="btn btn-danger btn-sm"
                                            onclick="deleteProduct(${i})"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
	}
	cartContainer.innerHTML = element;
}

displayProducts();

if (products.length === 0) {
	cartContainer.innerHTML = `<div class="col-md-8 offset-md-4"><h4>Start add items</h4></div>`;
}

function deleteProduct(index) {
	products.splice(index, 1);
	localStorage.setItem("products", JSON.stringify(products));
	displayProducts();

	if (products.length === 0) {
		cartContainer.innerHTML = `<div class="col-md-8 offset-md-4"><h4>Start add items</h4></div>`;
	}

	fetchProducts();
}
