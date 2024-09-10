import { createContext, useState } from "react"
import { useInfiniteQuery } from '@tanstack/react-query'


export const DataContext = createContext()

export default function DataContextProvider({ children }) {

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


    const [starshipImages] = useState({
        "CR90 corvette" : "https://preview.redd.it/cr90-corvette-aka-blockade-runner-v0-zwbd3547t1z91.jpg?width=1080&crop=smart&auto=webp&s=76157b543d04adea9e213080b1dabaeffb1eeffe",
        "Star Destroyer": "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Star-Wars-Ships-Star-Destroyer.jpg",
        "Sentinel-class landing craft" : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657811c3-939d-4d1e-8fa5-d1adbf999420/dg1s5li-abe2567b-fa78-45be-988d-9586b589d5e8.jpg/v1/fill/w_1600,h_900,q_75,strp/sentinel_class_imperial_landing_craft_by_ravendeviant_dg1s5li-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjU3ODExYzMtOTM5ZC00ZDFlLThmYTUtZDFhZGJmOTk5NDIwXC9kZzFzNWxpLWFiZTI1NjdiLWZhNzgtNDViZS05ODhkLTk1ODZiNTg5ZDVlOC5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cM2HReYSxUgvLFQ4LVuXcTEIonttan7bKHfU8cY1ylM",
        "Death Star": "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
        "Millennium Falcon": "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Millennium-Falcon-1.jpg",
        "Y-wing": "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768",
        "X-wing": "https://www.si.edu/sites/default/files/styles/social_media/public/newsdesk/press_releases/composite_x-wing.jpg?itok=iBwp6H1h",
        "TIE Advanced x1": "https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg?region=0%2C147%2C1560%2C878",
        "Executor": "https://p.turbosquid.com/ts-thumb/5T/0acPdy/dC/executor_shot08/png/1636738661/1920x1080/fit_q87/ff2d0c8fff7e7cfe957157aa706236726d00e151/executor_shot08.jpg",
        "Rebel transport": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a50fed6-5f37-42b3-aba5-b48c99a0aa08/d78zzb2-a7e4b4e1-3d65-41a0-862e-acda27b76f17.jpg/v1/fill/w_1069,h_748,q_70,strp/rebel_transport_box_art_by_wraithdt_d78zzb2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvMmE1MGZlZDYtNWYzNy00MmIzLWFiYTUtYjQ4Yzk5YTBhYTA4XC9kNzh6emIyLWE3ZTRiNGUxLTNkNjUtNDFhMC04NjJlLWFjZGEyN2I3NmYxNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HrKwz2Xj-1H9dZRa33s6t_76S6q1XDZZy5rMtjKbrRw",
        "Slave 1": "https://img-new.cgtrader.com/items/4609254/e55cce2546/large/star-wars-slave-1-3d-model-e55cce2546.jpg",
        "Imperial shuttle": "https://i.ytimg.com/vi/4Dt9rqZ0mzk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzmhOicWJdusufwI2-wLAULm0CGA",
        "EF76 Nebulon-B escort frigate": "https://i.ytimg.com/vi/aewxcQ4pQ78/maxresdefault.jpg",
        "Calamari Cruiser": "https://i.ebayimg.com/images/g/VGwAAOxyj4hTGrKj/s-l300.jpg",
        "A-wing": "https://i0.wp.com/vilaingeek.com/wp-content/uploads/2024/02/Resistance_A-wing_SWCT.webp?fit=890%2C480&ssl=1",
        "B-wing": "https://1.bp.blogspot.com/-t7xQbZ7ljW8/VAjTq1BYAEI/AAAAAAAAblE/xWF2Inmz9Uc/s1600/bwing2.jpg",
        "Republic Cruiser": "https://img-new.cgtrader.com/items/5097823/fc831a2a5b/large/star-wars-consular-class-cruiser-c70-charger-3d-model-fc831a2a5b.jpg",
        "Droid control ship": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYKD2j-dg95w-8omjFpw4cwJqc5pvLfu4cw&s",
        "Naboo fighter": "https://steamuserimages-a.akamaihd.net/ugc/2039607710560927342/F82A3068BE3B4C31F3A51EC2C458A86D228F9F5E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        "Naboo Royal Starship": "https://www.eurobricks.com/forum/uploads/1337097197/sml_gallery_11254_196_27796.png",
        "Scimitar": "https://i.redd.it/y68np24w863z.jpg",
        "J-type diplomatic barge": "https://i.pinimg.com/736x/7d/30/60/7d30603130933386ae441fd6957cbc27.jpg",
        "AA-9 Coruscant freighter": "https://i.redd.it/star-wars-aa-9-coruscant-freighter-v0-e1gmtbz3sosb1.jpg?width=1920&format=pjpg&auto=webp&s=e13b3843d490afadea403f260f5cbed37fac493f",
        "Jedi starfighter": "https://media.sketchfab.com/models/053a14f9353a4f4aa6300fa0a398ffab/thumbnails/c300142f62c848be80226458c6996090/66054ebfbe8e4ee3a1b3d8bf9ae84f74.jpeg",
        "H-type Nubian yacht": "https://lh3.googleusercontent.com/proxy/urFIRuhhaT6gGpr8j3fku5FPLBszQfW4u-AuccLyoHnjQrGQAAs2u7_0R1jlliqaLtLZyfmPJfOl6bepOkVOMDdtO1wQWvdfSdDyvA",
        "Republic Assault ship": "https://images.swcombine.com//ships/91/large.png",
        "Solar Sailer": "https://lumiere-a.akamaihd.net/v1/images/databank_geonosiansolarsailer_01_169_b3873578.jpeg?region=0%2C49%2C1560%2C780",
        "Trade Federation cruiser": "https://swrpggm.com/wp-content/uploads/2021/02/Providence_FE.png",
        "Theta-class T-2c shuttle": "https://holocron.swcombine.com/images/thumb/8/83/Theta-class_T-2c_Shuttle.jpg/300px-Theta-class_T-2c_Shuttle.jpg",
        "Republic attack cruiser": "https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg?region=0%2C0%2C1560%2C780",
        "Naboo star skiff": "https://i.ebayimg.com/images/g/ingAAOSwm8tejYRs/s-l1200.jpg",
        "Jedi Interceptor": "https://media.moddb.com/images/mods/1/44/43244/eta_interceptors.jpg",
        "arc-170": "https://media.licdn.com/dms/image/sync/D4D27AQHs_roydp6Yiw/articleshare-shrink_800/0/1713634406295?e=2147483647&v=beta&t=lFo7kO0ICFqvAqP6vXuNZ-NWA20NGVMBzbhA4mKpVgs",
        "Banking clan frigte": "https://preview.redd.it/eqtf1ht1fdg41.png?width=340&format=png&auto=webp&s=d7d54bda4739417f2fc098bfadc391eb7c87e2bc",
        "Belbullab-22 starfighter": "https://i.ebayimg.com/images/g/pSAAAOSwGvhUBsY9/s-l400.jpg",
        "V-wing": "https://images.swcombine.com//ships/126/large.png",
        
    })

    const [selectedStarship, setSelectedStarship] = useState(null)
    const [usuario, setUsuario] = useState(null)


  return (
    <DataContext.Provider value={{ 
        selectedStarship, setSelectedStarship,
        query,
        starshipImages,
        usuario, setUsuario,
        
     }}>
      {children}
    </DataContext.Provider>
  )
}
