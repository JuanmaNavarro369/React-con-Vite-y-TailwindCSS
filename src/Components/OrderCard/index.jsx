import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { MyContext } from "../../Context";

function OrderCard({ id, title, images, price, removeProducts }) {

    const {count, setCount} = useContext(MyContext);

    return (
        <div className="flex justify-between items-center  w-3/5">

            <div className="flex items-center gap-3">
                <figure className="w-20 h-20 mt-6 ml-2">
                    <img 
                    className="w-full h-full object-contain bg-white rounded-lg"
                    src={images} alt={title}/>
                </figure>
                <p className="text-md font-light">{title}</p>
            </div>

            <div className="flex items-center gap-2 right-0 absolute">
                <p className="text-lg font-bold">${price}</p>
                {//removeProducts es una función definida en MyOrderMenu, por lo tanto ahí siempre va a ser evaluada como true en un contexto Booleano. Esto provoca que en este componente se renderize 'XMarkIcon' al cumplirse la condición con el operador &&. En este componente OrderCard también se renderizará ya que dicha función está comunicada hacia aquí mediante props y también se evalúa como true. Pero ahora, en el componente MyOrder, aunque hemos mapeado OrderCard, no existe una función 'removeProducts' declarada como tal, esto hace que la condición no se cumpla y 'XMarkIcon solo se renderize en MyOrderMenu'
                removeProducts && <XMarkIcon
                onClick={()=> {
                removeProducts(id)
                setCount(count -1)}}
                className="w-6 mr-1 cursor-pointer hover:text-red-700"/>
                }
            </div>

        </div>
    )
}

export { OrderCard };