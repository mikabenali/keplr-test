export const orderParser = (body: string) => {
    const orderSplit = body.split('\n\n');

    // Body parse
    const orderHeader = orderSplit[0].split(':');
    const orderId = orderHeader[0].split(':');
    const orderVat = orderHeader[1];
    const orderTotal = orderHeader[2];

    const orderProductCSV = orderSplit[1];
}
