import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailNav() {

    const {vans} = useOutletContext();

    return (
        <div className="photos">
            <img src={vans.imageUrl} alt="" />
        </div>
    )
}