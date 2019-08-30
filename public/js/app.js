$(document).ready(function () {

    // $(document).on("click", "button.buy", handlePostRequest)


    function getProducts() {
        $.get('/api/products').then(function (data) {
            console.log(data);

            const productDiv = $('#products');
            productDiv.empty();

            for (let i = 0; i < data.length; i++) {
                const item = $(`
                    <div class="form-group col-md-3">
                    <div class="card" style="width: 15rem;">
                        <div class="card-body" data-id="${data[i].id}">
                            <ul class="list-group">
                                <li class="list-group-item">${data[i].product_name}</li>
                                <li class="list-group-item">Department: ${data[i].department_name}s</li>
                                <li class="list-group-item">Price: ${data[i].price} $</li>
                                <li id="stock-${data[i].id}" value="${data[i].stock_quantity}" class="list-group-item">In Stock: ${data[i].stock_quantity}</li>
                                <label>Desired Quantity: </label>
                                <input id="input-${data[i].id}" type="number" />
                            </ul>
                            <div data-id="${data[i].id}" class="item-btn btn btn-primary">Buy</div>
                        </div>
                    </div>
                </div>
                    `);

                productDiv.append(item)
            }
        })
    }

    $('#products').on('click', '.item-btn', function (event) {
        event.preventDefault();
        const id = $(this).attr('data-id');
        const inputVal = $(`#input-${id}`).val();
        console.log(this);
        console.log(id);
        console.log(inputVal);
        let value = $(`#stock-${id}`).val();
        // value--
        $(`#stock-${id}`).val(value).text(`In Stock: ${value}`)
        $.get('/api/products/' + id).then(function (data) {
            console.log(data);
            newQuantity = data.stock_quantity - inputVal
            if (inputVal > data.stock_quantity) {
                console.log('Insufficient Quantity!')
                alert('Insufficient Quantity');
            } else {
                console.log('Thank you for your purchase');
                console.log('newQuantity', newQuantity)
                $.ajax({
                    method: 'PUT',
                    url: '/api/products/' + id,
                    data: { newQuantity }
                }).then(function () {
                    getProducts();
                })
            }
        })
    })

    getProducts();
})