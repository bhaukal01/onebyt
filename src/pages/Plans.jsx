import { data, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Bungee Plan [Only for Proxy servers]",
      price: "180",
      ram: "2GB RAM",
      storage: "10GB SSD",
      players: "10 Players",
      databases: "1 Database",
      backup: "1 Backup",
      portallocations: "1 Port Allocation",
      cpu: "100",
    },
    {
      name: "Standard Plan",
      price: "360",
      ram: "4GB RAM",
      storage: "20GB SSD",
      players: "20 Players",
      databases: "2 Databases",
      backup: "1 Backups",
      portallocations: "1 Port Allocation",
      cpu: "150",
    },
    {
      name: "Advanced Plan",
      price: "540",
      ram: "6GB RAM",
      storage: "30GB SSD",
      players: "30 Players",
      databases: "3 Databases",
      backup: "1 Backups",
      portallocations: "1 Port Allocations",
      cpu: "180",
    },
    {
      name: "Pro Plan",
      price: "720",
      ram: "8GB RAM",
      storage: "40GB SSD",
      players: "40 Players",
      databases: "4 Databases",
      backup: "2 Backups",
      portallocations: "2 Port Allocations",
      cpu: "220",
    },
    {
      name: "Elite Plan",
      price: "1080",
      ram: "12GB RAM",
      storage: "60GB SSD",
      players: "60 Players",
      databases: "5 Databases",
      backup: "2 Backups",
      portallocations: "3 Port Allocations  ",
      cpu: "300",
    },
    {
      name: "Ultimate Plan",
      price: "1440",
      ram: "16GB RAM",
      storage: "80GB SSD",
      players: "80 Players",
      databases: "6 Databases",
      backup: "3 Backups",
      portallocations: "4 Port Allocations",
      cpu: "350",
    },
    {
      name: "Mega Plan",
      price: "2160",
      ram: "24GB RAM",
      storage: "100GB SSD",
      players: "100 Players",
      databases: "7 Databases",
      backup: "3 Backups",
      portallocations: "4 Port Allocations",
      cpu: "400",
    },
    {
      name: "Extreme Plan",
      price: "2880",
      ram: "32GB RAM",
      storage: "150GB SSD",
      players: "150 Players",
      databases: "8  Databases",
      backup: "4 Backups",
      portallocations: "5 Port Allocations",
      cpu: "500",
    },
  ];

  let usd = plans.price;
  let inr = usd * 80;

  const handleSelectPlan = (plan) => {
    navigate("/checkout", { state: { plan } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Minecraft Hosting Plans</h2>
      <div className="row mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5 className="card-title">{plan.name}</h5>
                <br />
                <h6 className="card-subtitle mb-2 text-muted">
                  Rs. {plan.price}/month
                </h6>
                <br />
                <p className="card-text">{plan.ram}</p>
                <p className="card-text">{plan.storage}</p>
                <p className="card-text">
                  {plan.backup} • {plan.databases}
                </p>
                <p className="card-text">{plan.cpu}% Intel Xeon CPU </p>
                <p className="card-text">{plan.players}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSelectPlan(plan)}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="d-flex justify-content-center">
        ■■■■■■■■■■■■■■◻◻◻◻◻◻◻◻◻◻◻◻■■■■■■■■■■■■■■
      </span>
      <h2 className="text-center web">Web Hosting Plans</h2>
      <div>
        <p className="lead">Coming Soon</p>
      </div>
    </div>
  );
}

export default Plans;
