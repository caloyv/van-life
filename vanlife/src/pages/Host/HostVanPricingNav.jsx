import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailNav() {

    const {vans} = useOutletContext();

    return (
        <div className="pricing">
            <p>${vans.price}.00<span>/day</span></p>
        </div>
    )
}