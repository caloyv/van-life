import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";

import "../css/HostVanDetail.css";

export default function HostVanDetail() {
  const [vans, setVans] = useState(null);
  const params = useParams();

  const activeStyles = {
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    color: "var(--clr-dark-black)",
    fontWeight: "700",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans[0]));
  }, []);

  if (!vans) return <h1 className="loading">Loading</h1>;

  return (
    <section className="host-van-detail-container">
      <div>
        <Link className="back-btn" to=".." relative="path">
          Back to all vans
        </Link>
      </div>

      <div key={vans.id} className="host-van-detail-tile">
        <div className="host-van-detail-top-section">
          <img src={vans.imageUrl} alt="" />
          <div className="host-van-detail-title">
            <div>
              <i className={`van-type ${vans.type}`}>{vans.type}</i>
              <h1 className="host-van-detail-name">{vans.name}</h1>
              <p className="van-price">
                ${vans.price}
                <span>/day</span>
              </p>
            </div>
          </div>
        </div>
        <div className="host-van-detail-bottom-section">
          <div className="host-van-detail-nav">
            <NavLink end style={({ isActive }) => isActive ? activeStyles : null} to=".">
              Details
            </NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="pricing">
              Pricing
            </NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="photos">
              Photos
            </NavLink>
          </div>
          <Outlet 
            context={{vans}}
          />
        </div>
      </div>
    </section>
  );
}
