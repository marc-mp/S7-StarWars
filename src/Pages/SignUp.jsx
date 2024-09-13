import titleStarWars from '/public/titleStarWars.jpg';
import { useState } from 'react'
import appFirebase from '../credenciales.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const auth = getAuth(appFirebase)

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = () => {
        if (!name || !email || !password) {
            alert('Por favor, complete todos los campos.')
            return
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Registro completado. Ahora, inicia sesión para acceder.')
                navigate('/LogIn')
            })
            .catch((error) => {
                console.error('Error en el registro:', error)
                alert(`Error en el registro: ${error.message}`)
            })
    }

   
    return (
        <div className='mx-4 my-5 sm:mx-8 md:mx-12 lg:mx-36 border-2 border-neutral-800 p-4 sm:p-6 md:p-8 lg:p-9 '>
            <div className='flex justify-end'>
                <Link to={"/"}>
                    <button className='p-2 text-lg font-semibold'>X</button>
                </Link>
            </div>
            <div className='flex items-center justify-center mb-6'>
                <img src={titleStarWars} alt="Star Wars title" className='h-24 sm:h-28 md:h-32 lg:h-36' />
            </div>

            <label className="input input-bordered flex items-center gap-2 my-3">
                <input 
                    type="text" 
                    className="grow px-2 py-1 text-base sm:text-lg" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
                <input 
                    type="text" 
                    className="grow px-2 py-1 text-base sm:text-lg" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
                <input 
                    type="password" 
                    className="grow px-2 py-1 text-base sm:text-lg" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </label>
            <button 
                className="border-2 bg-yellow-300 border-yellow-300 text-black font-bold my-2 py-2 px-4 text-sm sm:text-base" 
                onClick={handleSignUp}
            >
                Registrarse
            </button>
            <div className="mt-4 text-sm sm:text-base">
                <p className="text-gray-400">
                    ¿Tienes una cuenta? 
                    <Link to="/LogIn" className="text-blue-500 ml-2">Entrar</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
