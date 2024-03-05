/**
 * Esta función calcula el precio total de los productos añadidos en MyOrderMenu
 * @param {Array} products addCartProduct: Array de Objetos 
 * @returns {number} precioTotal
 */

const totalPrice = (products) => {
    let precioTotal = 0;

    products.forEach(product => precioTotal += product.price);

    return precioTotal.toFixed(2); // En caso de resultado periódico solo retorna dos decimales.
};

export { totalPrice };