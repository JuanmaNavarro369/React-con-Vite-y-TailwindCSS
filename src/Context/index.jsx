import { createContext, useState, useEffect } from "react";
const MyContext = createContext();


function MyProvider({ children }) {

    // Estados

    // PRODUCTS OF FAKE STORE API
    const [items, setItems] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
    }, []);

    const [count, setCount] = useState(0); //Shopping Cart · Increment Quantity
    const [addCartProducts, setAddCartProducts] = useState([]); // Shopping Cart · Add Products

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); //Product Detail · Show/Hidde
    const [productToShow, setProductToShow] = useState({}); //Product Detail · Show Concret Product

    const [isMyOrderOpen, setIsMyOrderOpen] = useState(false); // MyOrder · Show/Hidde

    const [order, setOrder] = useState([]); // Shopping Cart · Order Placed

    const [searchProducts, setSearchProducts] = useState(""); // Home · Search Products
    const [filterByCategory, setFilterByCategory] = useState("all"); // Inservible

    // Estados Derivados
    const openProductDetail = () => setIsProductDetailOpen(true); // Product Detail open
    const closeProductDetail = () => setIsProductDetailOpen(false); // Product Detail close

    const openMyOrder = () => setIsMyOrderOpen(true); // MyOrderMenu open
    const closeMyOrder = () => setIsMyOrderOpen(false); // MyOrderMenu close
    const toggleMyOrder = () => setIsMyOrderOpen(!isMyOrderOpen) // MyOrderMenu toggle

    // Search Products by Title and Category
    const currentPath = window.location.pathname
    const route = currentPath.substring(1)

    const searchedProducts = items?.filter((item) => {
        if(route.toLowerCase() === 'all') {
            return item.title.toLowerCase().includes(searchProducts.toLowerCase())
        }else if(route.toLowerCase() === `clothes`) {
            return item.title.toLowerCase().includes(searchProducts.toLowerCase()) &&
            (
                item.category.toLowerCase().includes(`men's clothing`) ||
                item.category.toLowerCase().includes(`women's clothing`)
            )
        }
        else {
            return item.title.toLowerCase().includes(searchProducts.toLowerCase()) &&
            item.category.toLowerCase().includes(route.toLowerCase())
        }
    });


    
    return (
        <MyContext.Provider
        value={{
            items,
            setItems,
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
            order,
            setOrder,
            searchProducts,
            setSearchProducts,
            searchedProducts,
            filterByCategory,
            setFilterByCategory
        }}>

        {children}

        </MyContext.Provider>
    )
}

export { MyProvider, MyContext };