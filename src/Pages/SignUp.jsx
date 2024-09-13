
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
        <div className='mx-36 mt-10 border-2 border-neutral-800 p-9'>
            <div className='flex justify-end mb-2'>
                <Link to={"/"}>
                    <button className='p-1 '>X</button>
                </Link>
            </div>
            <div className='flex items-center justify-center'>
                <img src={titleStarWars} alt="Star Wars title" className='h-48 justify-center' />
            </div>

            <label className="input input-bordered flex items-center gap-2 my-3">
                <input type="text" className="grow" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
                <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
                <input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className="border-2 bg-yellow-300 border-yellow-300 text-black font-bold my-2 py-1 px-2" onClick={handleSignUp}>
                Registrarse
            </button>
            <div className="mt-4">
                <p className="text-gray-400">
                    ¿tienes una cuenta? 
                    <Link to="/Login" className="text-blue-500 ml-2">Entrar</Link>
                </p>
            </div>

        </div>
    )
}

export default SignUp
