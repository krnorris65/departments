$(document).ready(function() {

    const outputEl = $("#products-list")
    const discountEl = $("#season-discount")


    $.ajax({
        "url": "data/products.json",
        "method": "GET"
    }).then(
        function (productInfo) {
        
            const products = productInfo.products; //array of products
            let productString = "" //empty string of product info
            let discountString = "" //empty string to display discounts
            
            $.ajax({
                "url": "data/categories.json",
                "method": "GET"
            }).then(
                function (categoriesInfo) {
                    
                    const categories = categoriesInfo.categories; //array of categories

                    categories.forEach( category => {
                        discountString += `
                            <option>${category.season_discount}<option> //adds discounts option to select
                        `
                        productString += `
                            <h1>${category.name}</h1> //adds category to productString
                        `
                        products.forEach( 
                            product => {
                                if(category.id === product.category_id) { //adds products to proper category
                                    productString += `
                                        <section id="product_${product.id}">
                                            <h3>${product.name}</h3>
                                            <p>Price: ${product.price}</p>
                                        </section>
                                    `
                                }
                        })
                    })
                    
                    outputEl.html(productString) //adds products to DOM
                    discountEl.html(discountString) //adds discounts to DOM
                })
    })

});

