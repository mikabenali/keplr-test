import { parse as CsvParser } from 'papaparse'
import {Order} from "../models/order.model";
import {Product} from "../models/product.model";

interface CsvProductsInterface {
    product: string;
    product_id: string;
    price: number;
}

export const orderParser = (body: string): Order => {
    const order = new Order();

    // Body parse
    const orderSplit = body.split('\n\n');
    const orderHeader = orderSplit[0].split('\n');
    const orderProductCSV = orderSplit[1];

    const headerElem = [
        'Order',
        'VAT',
        'Total'
    ];

    orderHeader.forEach(orderElem => {
        headerElem.forEach(headerElem => {
            const value = orderElem.split(':').pop();
            if (orderElem.includes(headerElem) && value) {
                if (headerElem === 'Order') {
                    order.id = parseInt(value);
                }

                if (headerElem === 'VAT') {
                    order.vat = parseFloat(value);
                }

                if (headerElem === 'Total') {
                    order.total = parseFloat(value);
                }
            }
        });
    });

    let products: Product[] = [];
    const csvProducts = CsvParser(orderProductCSV, {header: true, skipEmptyLines: true});
    csvProducts.data.forEach(csvProduct => {
        const item: CsvProductsInterface = csvProduct as CsvProductsInterface;
        const product = new Product();
        product.id = item.product_id;
        product.name = item.product;
        product.price = item.price;
        products.push(product);
    });

    order.products = products;

    return order;
}
