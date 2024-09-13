import { createContext, useState, useEffect } from "react"
import { useInfiniteQuery } from '@tanstack/react-query'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '../credenciales';


export const DataContext = createContext()

export default function DataContextProvider({ children }) {

    const [selectedStarship, setSelectedStarship] = useState(null)
    const [usuario, setUsuario] = useState(null)

    
    const fetchStarships = async ({ pageParam = 1 }) => {
        const response = await fetch(`https://swapi.dev/api/starships/?page=${pageParam}`)
        console.log(response)
        if (response.status != 200) {
            throw new Error('Api no responde')
        }
        const data = await response.json()
        console.log(data)
        return data
    }


    // scroll infinito
    const query = useInfiniteQuery({
        queryKey: ['starships'],
        queryFn: fetchStarships,
        getNextPageParam: (lastPage) => {
            if (lastPage.next) {
                const url = new URL(lastPage.next)
                return url.searchParams.get('page')
            }else{
                return undefined
            }
        },
    })



    useEffect(() => {
        const auth = getAuth(appFirebase);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsuario(user) // Si el usuario está logueado, lo guardamos
            } else {
                setUsuario(null) // Sino usuario debe ser null
            }
        })

        return () => unsubscribe()
    }, [])





  return (
    <DataContext.Provider value={{ 
        selectedStarship, setSelectedStarship,
        query,
        usuario, setUsuario,
        
     }}>
      {children}
    </DataContext.Provider>
  )
}
