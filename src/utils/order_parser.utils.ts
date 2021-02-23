import {Order} from "../models/order.model";

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

    return order;
}
