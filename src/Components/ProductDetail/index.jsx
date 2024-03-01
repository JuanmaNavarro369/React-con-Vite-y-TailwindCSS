import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context";
import "./styles.css"

function ProductDetail() {

    const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(MyContext);

    return(
        <aside
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-white border-x border-b border-black rounded-b-lg overflow-y-auto scrollbar-hidden`}>
            <span className="flex justify-between items-center px-3 py-3">
                <h2>Product Details</h2>
                <XMarkIcon
                className=" w-6 cursor-pointer hover:text-red-700"
                onClick={closeProductDetail}/>
            </span>
            <figure className="relative">
                <img src={productToShow.image} className="w-full h-full mt-6 object-contain"/>
                <p className="absolute bottom-3 left-3 rounded-lg px-1 py-1 bg-white/60">
                {productToShow.category}
                </p>
            </figure>
            <p className="flex flex-col p-3 mt-6 bottom-6">
                <span className="text-xl font-bold">${productToShow.price}</span>
                <span className="text-lg font-medium">{productToShow.title}</span>
                <span className="mt-5 text-md font-light">{productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail };