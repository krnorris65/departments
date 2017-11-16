$(document).ready(function() {

//catergories, then products
    const outputEl = $("#product-list")

    $.ajax({
        "url": "data/products.json",
        "method": "GET"
    }).then(productInfo => {

        const products = productInfo.products


        $.ajax({
            "url": "data/categories.json",
            "method": "GET"
        }).then(categoriesInfo => {
        
            const categories = categoriesInfo.categories
            
            let productString = ""

            products.forEach( product =>
                productString += `
                    <h1>${product.name}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Category: ${categories.name}</p>
                `
            )

            
        })
        outputEl.html(productString)
    })

})

