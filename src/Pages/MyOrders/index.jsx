import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../Context';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';

function MyOrders() {

    const {order} = useContext(MyContext);

    return (
        <Layout>
            <h1>My Orders</h1>
            {
            order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                    totalPrice={order.totalPrice}
                    totalProducts={order.totalProducts}
                />
                </Link>
            ))
            }
        </Layout>
    )
}

export { MyOrders }