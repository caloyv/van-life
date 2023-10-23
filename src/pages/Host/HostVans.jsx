import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import '../css/HostVans.css'

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))

    }, []); 
    
    const renderListedVans = vans.map(van => (
      <div key={van.id} className="host-van-tile-container">
        <NavLink to={`/host/vans/${van.id}`}>
          <div  className="host-van-tile">
            <img src={van.imageUrl} alt="" />
            <div className="host-van-title">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </NavLink>
      </div>
    ))

  return (
    <div className="host-vans-container">
      <h1>Your listed vans</h1>
      {
        renderListedVans ?
        renderListedVans :
        <h1 className="loading">Loading</h1>  
      }
    </div>

  );
}
