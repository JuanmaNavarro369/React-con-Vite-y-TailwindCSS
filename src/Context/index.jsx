import { createContext } from "react";
import PropTypes from 'prop-types';

const myContext = createContext();

function MyProvider({children}) {

    return (
        <myContext.Provider>
            {children}
        </myContext.Provider>
    )
}

MyProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { MyProvider };