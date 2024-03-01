import { XMarkIcon } from "@heroicons/react/24/solid"


function OrderCard({ id, title, images, price, removeProducts }) {
    return (
        <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
                <figure className="w-20 h-20 mt-6 ml-2">
                    <img className="w-full h-full object-contain bg-white rounded-lg"
                    src={images} alt={title} />
                </figure>
                <p className="text-md font-light">{title}</p>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-lg font-bold pl-6">${price}</p>
                <XMarkIcon
                    onClick={() => removeProducts(id)}
                    className="w-6 mr-1 cursor-pointer hover:text-red-700"
                />
            </div>

        </div>
    )
}

export { OrderCard };