function fillTable(tableId, data) {
    var table = document.getElementById(tableId);

    table.innerHTML = '';
    var productCount = getSelectsById('product-wapper').length;
    var regionCount = getSelectsById('region-wapper').length;

    // 表头
    var head = document.createElement('tr');
    var headProduct = document.createElement('th');
    headProduct.innerText = '商品';
    var headRegion =document.createElement('th');
    headRegion.innerText = '地区';

    if (regionCount == 1 && productCount > 1) {
        head.appendChild(headRegion);
        head.appendChild(headProduct);
    } else {
        head.appendChild(headProduct);
        head.appendChild(headRegion);
    }

    for (var i = 1; i <= 12; i++) {
        var headSale = document.createElement('th');
        headSale.innerText = i + '月';
        head.appendChild(headSale);
    }

    table.appendChild(head);

    var lastProduct, lastRegion;            
    for (var d in data) {
        var row = document.createElement('tr');
        var product = document.createElement('td');
        var region =document.createElement('td');


        product.innerText = data[d].product;
        region.innerText = data[d].region;

        product.align = 'center';
        region.align = 'center';

        if (regionCount == 1 && productCount > 1) {
            if (data[d].region != lastRegion) {
                region.rowSpan = productCount;
                row.appendChild(region);
            }
            row.appendChild(product);
        } else {
            if (data[d].product != lastProduct) {
                product.rowSpan = regionCount;
                row.appendChild(product);
            }
            row.appendChild(region);
        }

        lastProduct = data[d].product;
        lastRegion = data[d].region;
        
        for (var s in data[d].sale) {
            var sale = document.createElement('td');
            sale.innerText = data[d].sale[s];
            row.appendChild(sale);
        }
        table.appendChild(row);
    }
}