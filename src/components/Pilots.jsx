import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Pilots = () => {
  const { selectedStarship } = useContext(DataContext)
  const [pilotsData, setPilotsData] = useState([])

  useEffect(() => {
    const fetchPilotData = async () => {
      try {
        const getPilots = selectedStarship.pilots.map(pilotUrl => fetch(pilotUrl).then(res => res.json()))
        const pilots = await Promise.all(getPilots)
        setPilotsData(pilots)
      } catch (error) {
        console.error('Error fetching pilot data:', error)
      }
    }

    if (selectedStarship && selectedStarship.pilots.length) {
      fetchPilotData()
    }
  }, [selectedStarship])

  
  return (
    <div className="mx-3 my-10">
      <div className='text-2xl border-y-2 border-neutral-600 mb-4'>
        <h2>PILOTS</h2>
      </div>
      {selectedStarship.pilots.length === 0 && 
        <div className='m-12'>
          <p>Pilots information not available</p>
        </div>
      }
      <div className='card card-side bg-base-100 shadow-xl sm:flex flex-col md:grid grid-cols-4 '>
        {pilotsData.map(pilot => (
          <div key={pilot.name} className='m-2 '>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${pilot.url.split('/')[5]}.jpg`} alt={pilot.name} className='w-full'/>
            <div className="card-body bg-neutral-800 p-3 border-t-2 border-red-500 ">
              <h3 className="card-title justify-center text-xl text-gray-400">{pilot.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pilots

