import { useRoutes, BrowserRouter } from 'react-router-dom';
import { MyProvider } from '../../Context';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrderPage } from '../MyOrderPage';
import { MyOrders } from '../MyOrders';
import { SignIn } from '../SignIn';
import { NotFound } from '../NotFound';
import { Navbar } from '../../Components/Navbar';
import { MyOrderMenu } from '../../Components/MyOrderMenu';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrderPage />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrderPage />},
    {path: '/my-orders/:id', element: <MyOrderPage />}, // ':id' representa cualquier posible número aleatorio
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])
  return routes
}

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <MyOrderMenu />
      </BrowserRouter>
    </MyProvider>
  )
}

export { App }