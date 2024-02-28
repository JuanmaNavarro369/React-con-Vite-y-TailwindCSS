import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context"

function Card(data) {

    const {count, setCount, openProductDetail, setProductToShow} = useContext(MyContext);

    const showProduct = (productData) => {
        openProductDetail()
        setProductToShow(productData)
    }

    return(
    <div
    className="bg-white cursor-pointer w-56 h-60"
    onClick={() => showProduct(data.data)}>

        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-1 left-1 rounded-lg bg-white/60 text-sm px-1 py-0.5">{data.data.category.name}</span>
            <img
            src={data.data.images}
            alt={data.data.title}
            className="w-full h-full rounded-lg"
            // Para hacer que la imagen conserve su relación de aspecto se usa la
            // propiedad object-cover
            />
            <PlusCircleIcon
            className="absolute text-sm top-1 right-1 flex justify-center items-center bg-white/90 rounded-full w-6 h-6"
            onClick={() => {setCount(count + 1)}}
            />
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-semibold">{data.data.title}</span>
            <span className="mr-2 text-lg font-bold">${data.data.price}</span>
        </p>

    </div>
    )
}

export { Card };