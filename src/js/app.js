import {
    productsData
} from "/src/js/products.js";


class UI {
    constructor() {
        this.products = productsData
        this.category = document.querySelector("#categories")
        this.searchInput = document.querySelector("#searchInput")
        this.bakedGoodsCheckB = document.querySelector("#baked-goods")
        this.coffeeCheckB = document.querySelector("#coffee")
        this.dietary = document.querySelector("#dietary")
        this.ecoFirendly = document.querySelector("eco-friendly")
        this.glutenFree = document.querySelector("#gluten-free")
        this.nutFree = document.querySelector("#nut-free")
        this.sortList = document.querySelector("#sort-list")
        this.productSection = document.querySelector("#product-section")

        document.addEventListener("DOMContentLoaded", () => {
            this.showProducts(this.products)
        })

        this.searchInput.addEventListener("keyup" , (e)=>{
            this.searchProducts(this.products , e.target.value)
        })
      
    }

    showProducts(products) {
        let productHTML = "";
        products.forEach((product) => {
            productHTML += `
                    <div
                        class="  bg-slate-200/ relative rounded-xl  ww:h-[330px] flex  flex-col  border-zinc-200 border-[1px]  ">
                        <!-- like product button -->
                        <div
                            class=" w-7 h-7 bg-red-50 z-20  rounded-full absolute top-4 right-4 flex items-center justify-center cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none">
                                <path fill="#F56969" fill-rule="evenodd"
                                    d="m10 3.396-.845-.869a4.43 4.43 0 0 0-6.938 1.228c-.616 1.206-.756 2.948.37 5.171 1.085 2.141 3.342 4.7 7.413 7.5 4.071-2.793 6.327-5.356 7.413-7.5 1.126-2.224.988-3.965.37-5.171a4.43 4.43 0 0 0-6.937-1.23L10 3.396Zm0 14.449C-8.082 5.896 4.432-3.43 9.793 1.503c.071.065.14.132.208.2a7.54 7.54 0 0 1 .208-.2C15.566-3.432 28.082 5.894 10 17.844v.001Z"
                                    clip-rule="evenodd" /></svg>
                        </div>
                        <!-- product image -->
                        <img class="  rounded-t-md w-full " src="${product.imageUrl}" alt="Cappuccino">
                        <!-- product info -->
                        <div class=" ww:h-[118px] lg:h-[135px]  bg-red-200/   pl-5  ">
                            <h1 class=" font-bold block mt-3 ">${product.title}</h1>
                            <!-- store profile -->
                            <div class=" mt-4 flex items-center bg-gray-300/  ">
                                <img class=" w-7 h-7 " src="/assets/images/Photo.png" alt="store-profile">
                                <span class=" font-medium text-sm ml-3 ">Minden Bakery</span>
                            </div>
                            <p class=" py-3 text-sm ">${product.price}</p>
                        </div>
                    </div>
          `;
        });
        this.productSection.innerHTML = productHTML;
    }


    searchProducts(products,searchTerm) {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().trim().includes(normalizedSearchTerm)
        );
        this.showProducts(filteredProducts);
        if (filteredProducts.length < 1) {
            console.log("sorry we dont have your searched product yet :) ");
        }
      }


}


const ui = new UI()

console.log(productsData);