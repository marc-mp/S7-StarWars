import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import StarshipInfo from './StarshipInfo'
import InfiniteScroll from 'react-infinite-scroll-component'
import Pilots from './Pilots'
import Films from './Films'

const StarShipsList = () => {
    const { query, setSelectedStarship, selectedStarship } = useContext(DataContext)
    const {data, fetchNextPage, hasNextPage, status } = query

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
                                    <div className="bg-neutral-800 my-3 mx-4 sm:mx-8 md:mx-36 lg:mx-48 xl:mx-80 p-3 text-gray-400 cursor-pointer">
                                        <h3 className="font-bold">{starship.name.toUpperCase()}</h3>
                                        <p>{starship.model}</p>
                                    </div>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </InfiniteScroll>}
            {selectedStarship &&
                <div>
                    <StarshipInfo />  <Pilots />  <Films />
                </div> 
            }
        </div>
    )
}

export default StarShipsList
