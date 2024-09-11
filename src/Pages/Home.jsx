import fondoHome3 from '/public/fondoHome3.webp'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'



export default function Home(){

    const { setSelectedStarship } = useContext(DataContext)
    setSelectedStarship(null)
    
    
    return (
        <div className='relative '>
            <img className="h-screen w-screen" src={fondoHome3} alt="fondo Home" />
            <div className='absolute top-3 left-10'>
                <Menu />
            </div>
            <div className='absolute right-96 bottom-28 '>
                <Link to={"/App"}>
                    <button className='border-2  border-yellow-300 py-1 px-3 font-bold text-lg text-white bg-base-100 rounded-lg' >Go to Starships ... </button>
                </Link>
            </div>
        </div>
    )
}


