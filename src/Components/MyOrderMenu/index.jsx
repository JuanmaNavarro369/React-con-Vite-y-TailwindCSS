import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css"

function MyOrderMenu() {

    const {isMyOrderOpen, closeMyOrder, setCount, addCartProducts, setAddCartProducts, order, setOrder} = useContext(MyContext);

    const removeProducts = (id) => {
        const filteredProducts = addCartProducts.filter((product) => {
            return product.id !== id
        });
        setAddCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: addCartProducts,
            totalProducts: addCartProducts.length,
            totalPrice: totalPrice(addCartProducts)
        }
        setOrder([...order, orderToAdd]);
        setAddCartProducts([]);
        closeMyOrder()
    }

    return(
        <aside
        className={`${isMyOrderOpen ? 'flex' : 'hidden'} my-order-menu flex-col fixed right-0 bg-white border border-black rounded-b-lg rounded-tl-sm z-10 overflow-x-auto scrollbar-hidden`}>

            <span className="flex justify-between items-center px-3 py-3 mb-5 bg-teal-700 shadow-lg shadow-teal-800/50">
                <h2 className="text-white">My Order</h2>
                <XMarkIcon
                className=" w-6 cursor-pointer hover:text-red-700"
                onClick={closeMyOrder}/>
            </span>

            <div className="flex-1">
                {
                addCartProducts?.map((product) => (
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                images={product.image}
                price={product.price}
                removeProducts={removeProducts}
                />
                ))
                }
            </div>

            <footer className="sticky bottom-0">
                <p className="flex justify-between items-center w-full bg-white border-t-2 border-teal-700 p-2">
                    <span className="text-md">Total Price :</span>
                    <span className="text-xl font-bold">${totalPrice(addCartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                        className="bg-teal-700 w-full py-2 text-white rounded-md"
                        onClick={() => {
                        handleCheckout()
                        setCount(0)
                        }}>
                        Checkout
                    </button>
                </Link>
            </footer>

        </aside>
    )
}

export { MyOrderMenu };