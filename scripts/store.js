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

            products.forEach( 
                function (currentP) {
                    console.log(currentP)
                    productString += `
                        <h1>${currentP.name}</h1>
                        <p>Price: ${currentP.price}</p>
                    `
            })

            
            outputEl.html(productString)
        })
    })

});

