import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "./styles.css"

function MyOrderMenu() {

    const {isMyOrderOpen, closeMyOrder, addCartProducts, setAddCartProducts} = useContext(MyContext);
    console.log(addCartProducts)

    const removeProducts = (id) => {
        const filteredProducts = addCartProducts.filter((product) => {
            return product.id !== id
        });
        setAddCartProducts(filteredProducts)
    }

    return(
        <aside
        className={`${isMyOrderOpen ? 'flex' : 'hidden'} my-order-menu flex-col fixed right-0 bg-white border border-black rounded-b-lg rounded-tl-sm z-10 overflow-x-auto scrollbar-hidden`}>

            <span className="flex justify-between items-center px-3 py-3 bg-teal-700 shadow-lg shadow-teal-800/50">
                <h2 className="text-white/80">My Order</h2>
                <XMarkIcon
                className=" w-6 cursor-pointer hover:text-red-700"
                onClick={closeMyOrder}/>
            </span>

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

        </aside>
    )
}

export { MyOrderMenu };