import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Layout } from '../../Components/Layout';
import { MyContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';

function MyOrderPage() {
    
    const { order } = useContext(MyContext);
    const currentPath = window.location.pathname
//Devuelve la parte del URL que corresponde a la ruta del recurso actualmente cargado en el navegador
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
//lastIndexOf devuelve el número de caracteres que hay en la ruta hasta el indicado en el string
//El método substring elimina una parte del string según sus los índices indicados

    if (index === 'last') {index = order.length - 1}
//order contiene un array de objetos, inicialmente vacío. Cada objeto el total de productos de una compra. Cuando hacemos una compra la longitud de order suma +1. Como los índices empiezan en cero y la longitud mide cantidad de elementos hemos de restar -1. Esto quiere decir que en el caso de que index sea 'last', es decir la última compra cuando le damos a Checkout,  convertimos index en un número, número correspondiente al índice de dicha compra.

    return (
        <Layout>
            <div className='flex justify-between gap-2'>
                <Link to='/my-orders/'>
                    <ChevronLeftIcon className='w-6 h-6 cursor-pointer hover:text-teal-700'/>
                </Link>
                <h1>My Order</h1>
            </div>

            <div className="flex flex-col relative left-0 w-3/5">
                {
                order?.[index]?.products?.map((product) => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    images={product.image}
                    price={product.price}
                    />
                    ))
                }
            </div>
        </Layout>
    )
}
    
export { MyOrderPage }