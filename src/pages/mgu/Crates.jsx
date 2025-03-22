import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const crates = [
  {
    name: "Soon",
    price: "9999",
    info: "Soon",
    img_src: "",
  },
];

const Crates = () => {
  const navigate = useNavigate();

  const handleBuy = (crate) => {
    navigate("/buy", {
      state: {
        packageName: crate.name,
        price: crate.price,
        packageImg: crate.img_src,
      },
    });
  };
  return (
    <div className="container mt-4">
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <a href="/">
              <img
                src="https://ik.imagekit.io/1usyzu9ab/MGU.png?updatedAt=1742319283271"
                alt="Logo"
                className="logo img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mt-4 mb-3">
            <a href="/ranks" className="btn btn-custom mb-3">
              Ranks
            </a>
            <a href="/upgrades" className="btn btn-custom mb-3">
              Rank Upgrades
            </a>
            <a href="/crates" className="btn btn-custom">
              Crates
            </a>
          </div>
        </div>
      </div>

      <h3 className="section-title">Crates</h3>
      <div className="row">
        {crates.map((crate, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card p-3 text-center position-relative">
              <h5>{crate.name}</h5>
              <p>₹{crate.price}</p>
              <div className="info-box">{crate.info}</div>
              <button className="btn btn-buy" onClick={() => handleBuy(crate)}>
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crates;
