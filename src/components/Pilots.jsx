export default function Pilots({ pilots }) {
    if (pilots.length === 0) {
      return <p className="text-start mt-5 ms-3">There are no pilots available for this starship.</p>
    }
  
    return (
      <div className="container-fluid mt-5">
        <h3 className="text-start text-uppercase fs-5 bor">Pilots</h3>
        <div className="row">
          {pilots.map(pilot => (
            <div key={pilot.url} className="col-3 col-md-2 mb-3">
              <div className="card mt-3 bg-dark"> 
                <img src={`https://starwars-visualguide.com/assets/img/characters/${pilot.url.split("/")[5]}.jpg`} alt={pilot.name} className="card-img-top"/>
                <div className="card-body card-body-details d-flex align-items-center">
                  <h5 className="card-title text-secondary fs-6 ">{pilot.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
