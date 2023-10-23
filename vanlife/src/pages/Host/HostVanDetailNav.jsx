import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailNav() {
    
    const {vans} = useOutletContext();

    return (
        <div className="details">
            <p><span>Name:</span> {vans.name}</p>
            <p><span>Category:</span> {vans.type}</p>
            <p><span>Description:</span> {vans.description}</p>
            <p><span>Visibility:</span> Public</p>
        </div>
    )
}