import { useContext } from 'react'
import { DataContext } from '../context/DataContext'


const StarshipInfo = () => {

  const {selectedStarship, setSelectedStarship } = useContext(DataContext)
  
  const cerrarInfoStarship = () => {
    setSelectedStarship(null)
  }

  console.log(selectedStarship.url)


  return (
      <div className="mx-3 my-10 p-3" >
        <div>
          <div className=' flex justify-end mb-2' onClick={cerrarInfoStarship}>
            <button className='border-2 border-neutral-800 p-1 '>X</button>
          </div>
          <div className='text-2xl border-y-2 border-neutral-600 mb-4'>
            <h2>STARSHIP</h2>
          </div>
          <div className="card card-side bg-base-100 shadow-xl  sm:flex flex-col md:grid grid-cols-2 ">
            <figure>
              <img src={`https://starwars-visualguide.com/assets/img/starships/${selectedStarship.url.split("/")[5]}.jpg`} alt={selectedStarship.name} />
            </figure>
            <div className="card-body bg-neutral-800 p-3  border-s-2 border-red-500">
              <h2 className="card-title text-2xl">{selectedStarship.name.toUpperCase()}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus a assumenda fugit unde voluptate eius quos laboriosam perspiciatis quidem deserunt modi voluptatum, quia tempora omnis incidunt obcaecati qui? Distinctio, quae.</p>
              <p>Model: {selectedStarship.model}</p>
              <p>Manufacturer: {selectedStarship.manufacturer}</p>
              <p>Cost in Credits: {selectedStarship.cost_in_credits}</p>
              <p>Length: {selectedStarship.length}</p>
              <p>Max Atmosphering Speed: {selectedStarship.max_atmosphering_speed}</p>
              <p>Crew: {selectedStarship.crew}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default StarshipInfo