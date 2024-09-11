import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import StarshipInfo from './StarshipInfo'
import InfiniteScroll from 'react-infinite-scroll-component'

const StarShipsList = () => {
    const { query, setSelectedStarship, selectedStarship, starshipImage } = useContext(DataContext)
    const {
        data,           // Datos de las naves espaciales
        fetchNextPage,  // Función para cargar la siguiente página
        hasNextPage,    // Indica si hay más páginas para cargar
        status,         // Estado de la solicitud 
    } = query

    
    if (status === 'loading') return <div>Loading...</div>

    if (status === 'error') return <div>Error: {query.error.message}</div>
    
    if (!data) return null // Si no hay datos todavía, no intentamos renderizar la lista
    
    

    return (
        <div>
            {!selectedStarship &&
            <InfiniteScroll
                dataLength={data.pages.reduce((acc, page) => acc + page.results.length, 0)} // Número total de paginas
                next={fetchNextPage} 
                hasMore={hasNextPage} 
                loader={<div>Loading ...</div>} 
            >
                <ul>
                    {data.pages.map((page, index) => (
                        <div key={index}>
                            {page.results.map((starship) => (
                                <li key={starship.name} onClick={() => setSelectedStarship({...starship})}>
                                    <div className="bg-neutral-800 my-3 mx-40 p-3 text-gray-400 cursor-pointer">
                                        <h3 className="font-bold">{starship.name.toUpperCase()}</h3>
                                        <p>{starship.model}</p>
                                    </div>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </InfiniteScroll>}
            {selectedStarship && <StarshipInfo />}
        </div>
    )
}

export default StarShipsList
