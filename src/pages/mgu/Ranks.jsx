import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/ranks.css";

const ranks = [
  {
    name: "VIP",
    price: "199",
    info: {
      1: "Reduces RandomTP Cooldown by 50%",
      2: "4 Player Vaults (/pv)",
      3: "5 sethomes",
      4: "2 Player Warps",
      5: "+30% More Claim Blocks",
      11: "Access to /hat command",
      6: "Access to green chat color (&a and &2)",
      7: "Ability to start and track 6 Quests",
      8: "Access to 5 Jobs",
      12: "Access to /craft command",
      10: "Access to VIP Kit (/kit VIP) (Weekly)",
      9: "5000 Claim Blocks (One Time/Seasonal)",
    },
    img_src: "https://ik.imagekit.io/1usyzu9ab/VIP.png?updatedAt=1742319284867",
  },
  {
    name: "VIP+",
    price: "399",
    info: {
      1: "All previous rank perks",
      2: "/nick command",
      3: "7 Set Homes",
      4: "3 Player Warps",
      5: "6 Player Vaults (/pv)",
      6: "Access to /near command",
      7: "+50% More Claim Blocks",
      8: "Access to blue chat color (&9 and &1)",
      9: "Ability to start and track 8 Quests",
      10: "Access to 7 Jobs",
      11: "Ability to Color Signs",
      12: "Access to VIP+ Kit (/kit VIP+) (Weekly)",
      13: "8000 Claim Blocks (One Time/Seasonal)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/VIP+.png?updatedAt=1742319285111",
  },
  {
    name: "Prince",
    price: "649",
    info: {
      1: "All previous rank perks",
      2: "10 Set Homes",
      3: "4 Player Warps",
      4: "8 Player Vaults (/pv)",
      5: "Access to /feed command (3 minute cooldown)",
      6: "+70% More Claim Blocks",
      7: "Access to all chat colors (&0-9 and &a-f)",
      8: "Ability to start and track 10 Quests",
      9: "Access to 8 Jobs",
      10: "Access to fly in your claims",
      11: "Access to Prince Kit (/kit Prince) (Weekly)",
      12: "10000 Claim Blocks (One Time/Seasonal)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/Prince_1.png?updatedAt=1742319285116",
  },
  {
    name: "King",
    price: "1199",
    info: {
      1: "All previous rank perks",
      2: "13 Set Homes",
      3: "5 Player Warps",
      4: "10 Player Vaults (/pv)",
      5: "Access to /heal command (3 minute cooldown)",
      6: "+90% More Claim Blocks",
      7: "Access to all chat formatting codes (&k-o and &r)",
      8: "Ability to start and track 12 Quests",
      9: "Access to /fly command",
      10: "Access to King Kit (/kit King) (Weekly)",
      11: "13000 Claim Blocks (One Time/Seasonal)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/King_1.png?updatedAt=1742319284119",
  },
  {
    name: "Emperor",
    price: "1899",
    info: {
      1: "All previous rank perks",
      2: "15 Set Homes",
      3: "6 Player Warps",
      4: "12 Player Vaults (/pv)",
      5: "Access to /repair command (3 minute cooldown)",
      6: "Access to /condense command",
      7: "Access to /top command",
      8: "+110% More Claim Blocks",
      9: "Access to all chat formatting codes (&k-o and &r)",
      10: "Ability to start and track 12 Quests",
      11: "Access to /fly command",
      12: "Access to /itemname command",
      15: "Access to /smelt command (1 minute cooldown)",
      13: "Access to Emperor Kit (/kit Emperor) (Weekly)",
      14: "15000 Claim Blocks (One Time/Seasonal)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/Emperor_1.png?updatedAt=1742319285605",
  },
  {
    name: "Deity",
    price: "2799",
    info: {
      1: "All previous rank perks",
      2: "Unlimited Set Homes",
      3: "8 Player Warps",
      4: "150% More Claim Blocks",
      5: "Ability to start and track 15 Quests",
      7: "Ability to join full servers",
      8: "Access to /smelt all command (1 minute cooldown)",
      9: "Access to /repair all command (3 minute cooldown)",
      6: "Exclusive Discord Chat & Events",
      10: "Access to Deity Kit (/kit Deity) (Weekly)",
      11: "18000 Claim Blocks (One Time/Seasonal)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/Deity.png?updatedAt=1742319285609",
  },
];

const subscriptionRanks = [
  {
    name: "King (30 Days)",
    price: "149",
    info: {
      1: "All previous rank perks",
      2: "13 Set Homes",
      3: "5 Player Warps",
      4: "10 Player Vaults (/pv)",
      5: "Access to /heal command (3 minute cooldown)",
      6: "+90% More Claim Blocks",
      7: "Access to all chat formatting codes (&k-o and &r)",
      8: "Ability to start and track 12 Quests",
      9: "Access to /fly command",
      10: "Access to King Kit (/kit King) (Weekly)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/King_1.png?updatedAt=1742319284119",
  },
  {
    name: "Emperor (30 Days)",
    price: "249",
    info: {
      1: "All previous rank perks",
      2: "15 Set Homes",
      3: "6 Player Warps",
      4: "12 Player Vaults (/pv)",
      5: "Access to /repair command (3 minute cooldown)",
      6: "Access to /condense command",
      7: "Access to /top command",
      8: "+110% More Claim Blocks",
      9: "Access to all chat formatting codes (&k-o and &r)",
      10: "Ability to start and track 12 Quests",
      11: "Access to /fly command",
      12: "Access to /itemname command",
      15: "Access to /smelt command (1 minute cooldown)",
      13: "Access to Emperor Kit (/kit Emperor) (Weekly)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/Emperor_1.png?updatedAt=1742319285605",
  },
  {
    name: "Deity (30 Days)",
    price: "399",
    info: {
      1: "All previous rank perks",
      2: "Unlimited Set Homes",
      3: "8 Player Warps",
      4: "150% More Claim Blocks",
      5: "Ability to start and track 15 Quests",
      7: "Ability to join full servers",
      8: "Access to /smelt all command (1 minute cooldown)",
      9: "Access to /repair all command (3 minute cooldown)",
      6: "Exclusive Discord Chat & Events",
      10: "Access to Deity Kit (/kit Deity) (Weekly)",
    },
    img_src:
      "https://ik.imagekit.io/1usyzu9ab/Deity.png?updatedAt=1742319285609",
  },
];

const Ranks = () => {
  const navigate = useNavigate();
  const [popupRank, setPopupRank] = useState(null);

  const handleBuy = (rank) => {
    navigate("/buy", {
      state: {
        packageName: rank.name,
        price: rank.price,
        packageImg: rank.img_src,
      },
    });
  };

  return (
    <div>
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

      <div className="container mt-4">
        <h3 className="section-title">Lifetime Ranks</h3>
        <div className="row">
          {ranks.map((rank, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card p-3 text-center position-relative">
                <img src={rank.img_src} alt="test" />
                <h5>{rank.name}</h5>
                <p>₹{rank.price}</p>
                {/* <div className="info-box">{rank.info}</div> */}
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-buy"
                    onClick={() => handleBuy(rank)}
                  >
                    Buy
                  </button>
                  <a onClick={() => setPopupRank(rank)}>
                    <img
                      className="infoimg"
                      src="https://img.icons8.com/?size=100&id=ytCVkHgJIqcg&format=png&color=FFFFFF"
                      alt="info"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title mt-4">Subscription Ranks</h3>
        <div className="row">
          {subscriptionRanks.map((rank, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card p-3 text-center position-relative">
                <img src={rank.img_src} alt="test" />
                <h5>{rank.name}</h5>
                <p>₹{rank.price}/month</p>
                {/* <div className="info-box">{rank.info}</div> */}
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-buy"
                    onClick={() => handleBuy(rank)}
                  >
                    Buy
                  </button>
                  <a onClick={() => setPopupRank(rank)}>
                    <img
                      className="infoimg"
                      src="https://img.icons8.com/?size=100&id=ytCVkHgJIqcg&format=png&color=FFFFFF"
                      alt="info"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupRank && (
        <div className="popup-overlay show">
          <div
            className="popup-content justify-content-between align-items-center"
            onClick={() => setPopupRank(null)}
          >
            <img
              src={popupRank.img_src}
              alt={popupRank.name}
              className="popup-img"
            />
            <h3>{popupRank.name}</h3>
            <p>₹{popupRank.price}</p>
            {typeof popupRank.info === "object" ? (
              Object.values(popupRank.info).map((item, index) => (
                <p className="features" key={index}>
                  {item}
                </p>
              ))
            ) : (
              <p>{popupRank.info}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ranks;
