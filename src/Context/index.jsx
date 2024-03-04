import { createContext, useState } from "react";

const MyContext = createContext();


function MyProvider({children}) {
    // Estados
    const [count, setCount] = useState(0); //Shopping Cart · Increment Quantity
    const [addCartProducts, setAddCartProducts] = useState([]); // Shopping Cart · Add Products

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); //Product Detail · Show/Hidde
    const [productToShow, setProductToShow] = useState({}); //Product Detail · Show Concret Product

    const [isMyOrderOpen, setIsMyOrderOpen] = useState(false); // MyOrder · Show/Hidde

    // Estados Derivados
    const openProductDetail = () => setIsProductDetailOpen(true); // Product Detail open
    const closeProductDetail = () => setIsProductDetailOpen(false); // Product Detail close

    const openMyOrder = () => setIsMyOrderOpen(true); // MyOrder open
    const closeMyOrder = () => setIsMyOrderOpen(false); // MyOrder close
    const toggleMyOrder = () => setIsMyOrderOpen(!isMyOrderOpen) // MyOrderMenu toggle

    return (
        <MyContext.Provider
        value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            isMyOrderOpen,
            openMyOrder,
            closeMyOrder,
            toggleMyOrder,
            productToShow,
            setProductToShow,
            addCartProducts,
            setAddCartProducts,
        }}>

        {children}

        </MyContext.Provider>
    )
}

export { MyProvider, MyContext };