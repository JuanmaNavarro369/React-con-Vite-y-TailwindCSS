import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context";
import "./styles.css"

function ProductDetail() {

    const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(MyContext);

    return(
        <aside
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-1 bg-gray-300 border border-black rounded-lg`}>
            <span className="flex justify-between items-center px-1 py-1">
                <h2>Product Details</h2>
                <XMarkIcon
                className=" w-6 cursor-pointer hover:text-red-700"
                onClick={closeProductDetail}/>
            </span>
            <figure className="relative">
                <img src={productToShow.images} className="w-full h-full object-cover"/>
                <p className="absolute bottom-3 left-3 rounded-lg px-1 py-1 bg-white/60">
                {productToShow.category?.name}
                </p>
            </figure>
            <p className="flex flex-col px-3 bottom-6">
                <span>${productToShow.price}</span>
                <span>{productToShow.title}</span>
                <span>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail };