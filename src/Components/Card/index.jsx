import { PlusCircleIcon, CheckIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context"

function Card(data) {

    const {
        openProductDetail, closeProductDetail, setProductToShow, addCartProducts, setAddCartProducts, openMyOrder, closeMyOrder
    } = useContext(MyContext);

    const showProduct = (productData) => {
        openProductDetail()
        setProductToShow(productData)
    }

    const renderIcon = (id) => {
        const isInCart = addCartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div className="bg-green-600 w-6 h-6 absolute top-1 right-1 flex justify-center items-center rounded-full">
                    <CheckIcon
                    className="text-white p-1 rounded-full"/>
                </div>
                )}
        else {
            return(
                <PlusCircleIcon
                className="absolute text-sm top-1 right-1 flex justify-center items-center bg-white/90 rounded-full w-6 h-6"
                onClick={(event) => {
                //stopPropagation evita el conflicto de eventos entre mostrar Product Detail y MyOrderMenu
                event.stopPropagation()
                setAddCartProducts([...addCartProducts, data.data])
                openMyOrder()
                closeProductDetail()
                }}
                />
            )}
        }

    return(
    <div
        className="bg-white cursor-pointer w-56 h-60 p-3"
        onClick={() => {
            showProduct(data.data)
            closeMyOrder()
            }}>

            <figure className="relative my-6 w-full h-4/5">
                <span className="absolute bottom-1 left-1 rounded-md bg-white/60 text-sm px-1 py-0.5">
                    {data.data.category}
                </span>
                <img
                src={data.data.image}
                alt={data.data.title}
                className="w-full h-full rounded-lg object-contain"
                // Para hacer que la imagen conserve su relación de aspecto se usa la propiedad 'object'
                />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-semibold">{data.data.title}</span>
                <span className="mx-3 text-lg font-bold">${data.data.price}</span>
            </p>

        </div>
        )
}

export { Card };