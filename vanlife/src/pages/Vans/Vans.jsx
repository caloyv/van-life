import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../../server'
import '.././css/Vans.css'

export default function Vans() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    let ignore = false
    fetch("/api/vans")
    .then(response => response.json())
    .then(data => {if(!ignore){setVans(data.vans)}})
    
    // console.log(vans.type)
    return () => {ignore=true}
  },[])
  
  const vanElements = vans.map(van => (
    <div key={van.id} className='van-tile'>
      <Link to={`${van.id}`}>
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type}`}>{van.type}</i>
      </Link>
    </div>
  ))
    return (
      <main>
        <div className="top-section">
          <h1>Explore our van options</h1>
          <div className="filters-container">
            <button>Simple</button>
            <button>Luxury</button>
            <button>Rugged</button>
            <button>Clear filters</button>
          </div>
        </div>
        <div className="vans-section">
          {vanElements}
        </div>
      </main>
    )
  }