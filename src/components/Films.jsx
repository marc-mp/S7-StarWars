import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Films = () => {
  const { selectedStarship } = useContext(DataContext)
  const [filmsData, setFilmsData] = useState([])

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const getFilms = selectedStarship.films.map(filmUrl => fetch(filmUrl).then(res => res.json()))
        const films = await Promise.all(getFilms)
        setFilmsData(films)
      } catch (error) {
        console.error('Error fetching film data:', error)
      }
    }

    if (selectedStarship && selectedStarship.films.length) {
      fetchFilmData()
    }
  }, [selectedStarship])

  return (
    <div className="mx-3 my-10">
      <div className='text-2xl border-y-2 border-neutral-600 mb-4'>
        <h2>FILMS</h2>
      </div>
      {selectedStarship.films.length === 0 && 
        <div className='m-12'>
          <p>Films information not available</p>
        </div>
      }
      <div className='card card-side bg-base-100 shadow-xl grid grid-cols-4'>
        {filmsData.map(film => (
          <div key={film.episode_id}  className='m-2'>
            <img src={`https://starwars-visualguide.com/assets/img/films/${film.url.split('/')[5]}.jpg`} alt={film.title} />
            <div className="card-body bg-neutral-800 p-3 border-t-2 border-red-500">
              <h3 className="card-title justify-center text-xl text-gray-400 ">{film.title}</h3>
              <p className="card-title justify-center text-lg text-gray-400">Episode: {film.episode_id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Films

