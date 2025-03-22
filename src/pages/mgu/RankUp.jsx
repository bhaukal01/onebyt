import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ranks = [
  {
    name: "VIP",
    price: 199,
    info: "All the Features of VIP Rank",
  },
  {
    name: "VIP+",
    price: 399,
    info: "Access to all the features of VIP+ Rank",
  },
  {
    name: "Prince",
    price: 649,
    info: "Access to all the features of Prince Rank",
  },
  {
    name: "King",
    price: 1199,
    info: "Access to all the features of King Rank",
  },
  {
    name: "Emperor",
    price: 1899,
    info: "Access to all the features of Emperor Rank",
  },
  {
    name: "Diety",
    price: 2799,
    info: "Access to all the features of Diety Rank",
  },
];

const RankUp = () => {
  const navigate = useNavigate();

  const handleBuy = (upgrade) => {
    navigate("/buy", {
      state: { packageName: upgrade.name, price: upgrade.price },
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

      <h3 className="section-title">Rank Upgrades</h3>
      <div className="row">
        {ranks.map((rank, index) => {
          if (index < ranks.length - 1) {
            const nextRank = ranks[index + 1];
            const upgradeCost = nextRank.price - rank.price;

            return (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card p-3 text-center position-relative">
                  <h5>
                    {rank.name} → {nextRank.name}
                  </h5>
                  <p>Upgrade Cost: ₹{upgradeCost}</p>
                  <div className="info-box">{nextRank.info}</div>
                  <button
                    className="btn btn-buy"
                    onClick={() => handleBuy(nextRank)} // ✅ Corrected here
                  >
                    Rank Up
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RankUp;
