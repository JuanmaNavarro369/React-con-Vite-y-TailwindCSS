import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { CalendarDaysIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

function OrdersCard({ totalPrice, totalProducts }) {

    const PurchaseDate = () => {
        const date = new Date().toLocaleDateString();
        return date
    }

    return (
        <article className="flex justify-around items-center w-96 h-20 p-1 my-5 rounded-md text-white bg-teal-700 shadow-lg shadow-teal-800/50">
            <span className="flex items-center h-full">
                <ShoppingBagIcon className="w-5 mb-1 mr-1"/> {totalProducts} {totalProducts === 1 ? ' Product' : ' Products'}
            </span>
            <span className="font-bold"> ${totalPrice} </span>
            <span className="flex h-full items-center">
                <CalendarDaysIcon className="w-5 mb-1 mr-1"/> {PurchaseDate()}
                <ChevronRightIcon className="w-4 ml-3"/>
            </span>
        </article>
    )
}

export { OrdersCard };