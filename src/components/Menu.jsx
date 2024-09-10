import { Link } from "react-router-dom"


export default function Menu() {

    return (
        
        <div className="border-y-2 border-neutral-800">
            <div role="tablist" className=" flex justify-center">
                <button role="tab" className="tab border-x-2  border-neutral-800"><Link to={"/"}>HOME</Link></button>
                <button role="tab" className="tab border-e-2  border-neutral-800 "><Link to={"/App"}>STARSHIPS</Link> </button>
            </div>

        </div>

    )

}