import { createContext, useState, useEffect } from "react"
import { useInfiniteQuery } from '@tanstack/react-query'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '../credenciales';


export const DataContext = createContext()

export default function DataContextProvider({ children }) {

    const [selectedStarship, setSelectedStarship] = useState(null)
    const [usuario, setUsuario] = useState(null)

    
    // const fetchStarships = async ({ pageParam = 1 }) => {
    //     const response = await fetch(`https://swapi.dev/api/starships/?page=${pageParam}`)
    //     console.log(response)
    //     if (response.status != 200) {
    //         throw new Error('Api no responde')
    //     }
    //     const data = await response.json()
    //     console.log(data)
    //     return data
    // }

    
    //obtencion de datos de API swapi.dev y si falla obtendremos datos de API swapi.py4e
    const fetchStarships = async ({ pageParam = 1 }) => {
        try {
            // Intentar con la API principal
            const response = await fetch(`https://swapi.dev/api/starships/?page=${pageParam}`);
            
            if (!response.ok) {
                throw new Error(`swapi.dev falló con estado: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("✅ Datos obtenidos de swapi.dev:", data);
            return data;
    
        } catch (error) {
            console.warn("⚠️ Error en swapi.dev, intentando con swapi.py4e...", error.message);
    
            try {
                // Si swapi.dev falla, intentar con swapi.py4e
                const fallbackResponse = await fetch(`https://swapi.py4e.com/api/starships/?page=${pageParam}`);
    
                if (!fallbackResponse.ok) {
                    throw new Error(`swapi.py4e falló con estado: ${fallbackResponse.status}`);
                }
    
                const fallbackData = await fallbackResponse.json();
                console.log("✅ Datos obtenidos de swapi.py4e:", fallbackData);
                return fallbackData;
    
            } catch (fallbackError) {
                console.error("❌ Ambas APIs fallaron:", fallbackError.message);
                throw new Error("Ambas APIs están fuera de servicio. Inténtalo más tarde.");
            }
        }
    };
    


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
