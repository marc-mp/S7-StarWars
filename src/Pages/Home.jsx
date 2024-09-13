import fondoHome3 from '/public/fondoHome3.webp'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

export default function Home() {
    const { setSelectedStarship } = useContext(DataContext)

    useEffect(() => {
        setSelectedStarship(null)
    }, [setSelectedStarship])

    return (
        <div className='relative'>
            <img className="object-cover h-screen w-screen" src={fondoHome3} alt="fondo Home" />
            <div className='absolute top-3 left-3 sm:left-6 md:left-10'>
                <Menu />
            </div>
            <div className='absolute right-3 bottom-3 sm:right-6 sm:bottom-6 md:right-10 md:bottom-10'>
                <Link to={"/App"}>
                    <button className='border-2 border-yellow-300 py-2 px-4 font-bold text-sm sm:text-base md:text-lg text-white bg-base-100 rounded-lg'>
                        Go to Starships ...
                    </button>
                </Link>
            </div>
        </div>
    )
}

