import { useNavigate } from "react-router-dom";

function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic Plan",
      price: "$5/month",
      ram: "2GB RAM",
      storage: "10GB SSD",
      players: "10 Players",
    },
    {
      name: "Standard Plan",
      price: "$10/month",
      ram: "4GB RAM",
      storage: "20GB SSD",
      players: "20 Players",
    },
    {
      name: "Advanced Plan",
      price: "$15/month",
      ram: "6GB RAM",
      storage: "30GB SSD",
      players: "30 Players",
    },
    {
      name: "Pro Plan",
      price: "$20/month",
      ram: "8GB RAM",
      storage: "40GB SSD",
      players: "40 Players",
    },
    {
      name: "Elite Plan",
      price: "$25/month",
      ram: "12GB RAM",
      storage: "60GB SSD",
      players: "60 Players",
    },
    {
      name: "Ultimate Plan",
      price: "$30/month",
      ram: "16GB RAM",
      storage: "80GB SSD",
      players: "80 Players",
    },
    {
      name: "Mega Plan",
      price: "$40/month",
      ram: "24GB RAM",
      storage: "100GB SSD",
      players: "100 Players",
    },
    {
      name: "Extreme Plan",
      price: "$50/month",
      ram: "32GB RAM",
      storage: "150GB SSD",
      players: "150 Players",
    },
  ];

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
                <h6 className="card-subtitle mb-2 text-muted">{plan.price}</h6>
                <p className="card-text">
                  {plan.ram} • {plan.storage} • {plan.players}
                </p>
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
    </div>
  );
}

export default Plans;
