import titleStarWars from '/public/titleStarWars.jpg';
import { Link } from "react-router-dom";
import { useContext, useEffect  } from 'react';
import { DataContext } from '../context/DataContext';
import { getAuth } from "firebase/auth"
import appFirebase from '../credenciales'


export default function Header() {
    const { usuario, setUsuario } = useContext(DataContext);
    const auth = getAuth(appFirebase)

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUsuario(currentUser);
        }
    }, [auth, setUsuario]);


    const logOut = () => {
        auth.signOut().then(() => {
          setUsuario(null)
        })
      }

    return (
        <div className="">
            <div className='flex items-center justify-center'>
                <img src={titleStarWars} alt="Star Wars title" className='h-48 justify-center' />
            </div>
            <div className='flex justify-end items-center'>
                {usuario ? (
                    <>
                        <div className='me-8'>
                            <span className="text-gray-400 font-bold inline-flex">
                               Bienvenido {usuario.email}
                            </span>
                        </div>
                        <div className='me-8'>
                            <button className="text-gray-400 font-bold" onClick={logOut}>
                                LOG OUT
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='me-8'>
                            <button className="text-gray-400 font-bold inline-flex">
                                <Link to="/LogIn">LOG IN</Link>
                            </button>
                        </div>
                        <div className='me-8'>
                            <button className="text-gray-400 font-bold">
                                <Link to="/SignUp">SIGN UP</Link>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
