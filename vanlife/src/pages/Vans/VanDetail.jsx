import React, {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom"

import '../css/VanDetail.css'

export default function VanDetail() {
    const params = useParams()

    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    },[params])
    console.log(van)


    return (
        <main className="van-details-container">
            <Link className="back-btn" to={".."} relative="path">Back to all vans</Link>

            {van ? (
            <div key={van.id} className="van-details">
                <img src={van.imageUrl} alt="" />
                <i className={`van-type ${van.type}`}>{van.type}</i>
                <h1>{van.name}</h1>
                <p className="van-price">${van.price}<span>/day</span></p>
                <p className="van-desc">{van.description}</p>
                <button className="rent-btn">Rent this van</button>
            </div>)
            : <h2 className="loading">Loading...</h2>}
            
        </main>
    )
}