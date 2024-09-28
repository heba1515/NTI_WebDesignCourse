let productsSection = document.querySelector(".products");
let r = new XMLHttpRequest();
r.onload = () => {
    if (r.readyState === 4) {
        console.log("all is ok!")
        if (r.status == 200) {
            let response = JSON.parse(r.responseText);
            let products = response.products;
            console.log(products);
            products.map((product) => {
                productsSection.innerHTML += `
                <div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h3>${product.title}</h3>
                    <p class="description">${product.description}.</p>
                    <p>price: <span class="price">${product.price}$</span></p>
                    <i class="fa-regular fa-heart fav" id="icon"></i>
                </div>
                `
            })
        }
    }
};
r.open("GET", "https://dummyjson.com/products/", true)
r.send()


function getByCategory(category) {
    productsSection.innerHTML = ""
    r.open("GET", `https://dummyjson.com/products/category/${category}`, true)
    r.send()
}


let searchInput = document.querySelector(".search");
function search() {
    let value = searchInput.value
    productsSection.innerHTML = ""
    r.open("GET", `https://dummyjson.com/products/search?q=${value}`, true)
    r.send()
}