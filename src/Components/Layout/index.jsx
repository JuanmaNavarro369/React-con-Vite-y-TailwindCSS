import PropTypes from 'prop-types';

function Layout({ children }) {
    return(
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node
} // Validación para children. Funciona igual sin dicha validación
  // pero resalta un error aunque únicamente dentro del editor.

export { Layout };