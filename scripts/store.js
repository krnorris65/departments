$(document).ready(function() {

    const outputEl = $("#products-list")


    $.ajax({
        "url": "data/products.json",
        "method": "GET"
    }).then(
        function (productInfo) {
        
            const products = productInfo.products;
            let productString = ""

        $.ajax({
            "url": "data/categories.json",
            "method": "GET"
        }).then(
            function (categoriesInfo) {

                const categories = categoriesInfo.categories;

            categories.forEach( category => {
                productString += `
                    <h1>${category.name}</h1>
                `
                products.forEach( 
                    product => {
                        if(category.id === product.category_id) {
                            productString += `
                                <h3>${product.name}</h3>
                                <p>Price: ${product.price}</p>
                          `
                        }
                })
            }
            
        )
            
            outputEl.html(productString)
        })
    })

});

