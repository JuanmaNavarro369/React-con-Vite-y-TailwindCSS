import { NavLink } from "react-router-dom";

function Navbar() {

    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-2 text-sm italic'>

            <ul className="flex items-center gap-3 mr-3">
                <li>
                    <NavLink to='/' className='font-semibold text-lg'>
                        AntiqueTansi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/all'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    tansi@platzi.com
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
                <li>
                🛒 0
                </li>
            </ul>

        </nav>
    );
}

export { Navbar };