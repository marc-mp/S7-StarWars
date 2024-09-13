import titleStarWars from '/public/titleStarWars.jpg';
import { useState } from 'react'
import appFirebase from '../credenciales.js'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'


const auth = getAuth(appFirebase)

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [resetEmailSent, setResetEmailSent] = useState(false) // Estado para mostrar mensaje después de enviar email de recuperación
    const { setUsuario } = useContext(DataContext)


    // Función para iniciar sesión
    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('Usuario logueado:', user)
                setUsuario(user)
                navigate('/App') 
            })
            .catch((error) => {
                console.error('Error en el inicio de sesión:', error)
                alert('Usuario o contraseña no válidos')
            })
    }

    // Función para enviar email de recuperación de contraseña
    const handlePasswordReset = () => {
        if (!email) {
            alert('Por favor, ingrese su correo electrónico para restablecer la contraseña.');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setResetEmailSent(true) 
                alert('Correo de recuperación enviado. Por favor, revisa tu bandeja de entrada.')
            })
            .catch((error) => {
                console.error('Error al enviar correo de recuperación:', error)
                alert('Error al enviar el correo de recuperación. Intentelo de nuevo.')
            })
    }

    return (
        <div className='mx-36 mt-10 border-2 border-neutral-800 p-9'>
            <div className="flex justify-end mb-2">
                <Link to={"/"}>
                    <button className="p-1">X</button>
                </Link>
            </div>
            <div className='flex items-center justify-center'>
                <img src={titleStarWars} alt="Star Wars title" className='h-48 justify-center' />
            </div>

            <label className="input input-bordered flex items-center gap-2 my-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input 
                    type="text" 
                    className="grow " 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input 
                    type="password" 
                    className="grow" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </label>

            <button className="border-2 bg-yellow-300 border-yellow-300 text-black font-bold my-2 py-1 px-2" onClick={handleLogIn}>
                Iniciar sesión
            </button>

            {/* recuperar la contraseña */}
            <div className="mt-2">
                <p className="text-gray-400">
                    ¿Olvidaste tu contraseña? 
                    <button onClick={handlePasswordReset} className="text-blue-500 ml-2">
                        Recuperar contraseña
                    </button>
                </p>
                {resetEmailSent && <p className="text-green-500 mt-2">Correo de recuperación enviado.</p>}
            </div>

            {/* Link para redirigir a la página de registro */}
            <div className="mt-4">
                <p className="text-gray-400">
                    ¿No tienes una cuenta? 
                    <Link to="/SignUp" className="text-blue-500 ml-2">Regístrate aquí</Link>
                </p>
            </div>

        </div>
    );
}

export default LogIn;
