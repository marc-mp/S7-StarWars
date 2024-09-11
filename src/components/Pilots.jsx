import { useContext } from 'react'
import { DataContext } from '../context/DataContext'



export default function Pilots() {

  const {selectedStarship } = useContext(DataContext)

    // setStarshipImage((`https://starwars-visualguide.com/assets/img/characters/${selectedStarship.pilots.split("/")[5]}.jpg`))


    return (
      <div className="m-3 " >
        <div className='text-2xl border-y-2 border-neutral-600 mb-4'>
          <h2>PILOTS</h2>
        </div>
        {selectedStarship.pilots.length === 0 && 
          <div className='m-12'>
            <p>Pilots information not available</p>
          </div>
        }
        <div className='card card-side bg-base-100 shadow-xl grid grid-cols-4'>
          {selectedStarship.pilots.map(pilot => (
            <div key={pilot} className='m-2'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${pilot.split("/")[5]}.jpg`} alt={pilot.name} className="card-img-top"/>

                <div className="card-body bg-neutral-800 p-3  border-t-2 border-red-500">
                  <h3 className="card-title text-secondary fs-6 ">{pilot.name}</h3>
                </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
