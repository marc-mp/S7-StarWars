import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const ProtectedRoute = ({ children }) => {
    const { usuario } = useContext(DataContext)

    // Si no hay usuario logueado, redirige a la página de login
    if (!usuario) {
        return <Navigate to="/LogIn" />
    }

    // Si hay un usuario logueado, accedemos a la ruta protegida
    return children
};

export default ProtectedRoute
