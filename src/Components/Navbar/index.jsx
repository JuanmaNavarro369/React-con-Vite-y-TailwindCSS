import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { MyContext } from "../../Context";
import { NavLink } from "react-router-dom";

function Navbar() {

    const { addCartProducts, toggleMyOrder, closeProductDetail, setFilterByCategory } = useContext(MyContext);
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav 
        className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-2 text-sm bg-teal-700 shadow-lg shadow-teal-800/50 rounded-l-sm rounded-tr-sm text-white/80'>

            <ul className="flex items-center gap-3 mr-3">
                <li>
                    <NavLink
                    to='/'
                    className='font-semibold text-lg text-white'
                    onClick={() => setFilterByCategory('all')}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/all'
                    onClick={() => setFilterByCategory('all')}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/clothes'
                    onClick={() => setFilterByCategory('clothes')}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/electronics'
                    onClick={() => setFilterByCategory('electronics')}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/jewelery'
                    onClick={() => setFilterByCategory('jewelery')}>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/furnitures'
                    onClick={() => setFilterByCategory('furnitures')}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/others'
                    onClick={() => setFilterByCategory('others')}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    student@platzi.com
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li
                onClick={() => {
                    toggleMyOrder()
                    closeProductDetail()
                }}
                className="flex items-center cursor-pointer text-white">
                <ShoppingBagIcon className="w-6"/> {addCartProducts.length}
                </li>
            </ul>

        </nav>
    );
}

export { Navbar };