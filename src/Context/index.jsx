import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const MyContext = createContext();

function MyProvider({children}) {

    // Estados
    const [count, setCount] = useState(0); //Shopping Cart · Increment Quantity
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); //Product Detail · Show/Close
    const [productToShow, setProductToShow] = useState({}); //Product Detail · Concret Product

    // Estados Derivados
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return (
        <MyContext.Provider
        value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
        }}>
        {children}
        </MyContext.Provider>
    )
}

MyProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { MyProvider, MyContext };