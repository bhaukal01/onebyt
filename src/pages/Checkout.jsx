import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const selectedPlan = location.state?.plan || {
    name: "No Plan Selected",
    price: "$0",
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <p>Complete your purchase securely.</p>

      <div className="card p-3 mb-4 plan-disp">
        <h5>Selected Plan: {selectedPlan.name}</h5>
        <p>Price: ${selectedPlan.price}/month</p>
      </div>

      <form>
        <div className="p-info mb-4">
          <div className="col">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mx-3 col">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="p-info mb-4">
          <div className="col">
            <label className="form-label">Server Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your server name"
              required
            />
          </div>
          <div className="mx-3 col">
            <label className="form-label">Server Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your server description"
              required
            />
          </div>
        </div>

        <div className="p-info">
          <div className="mb-3 col">
            <label className="form-label">Server Software</label>
            <select className="form-select">
              <option>Bungeecord</option>
              <option>Vanilla</option>
              <option>Paper</option>
              <option>Spigot</option>
              <option>Forge</option>
            </select>
          </div>
          <div className="mb-3 col">
            <label className="form-label">Server Version</label>
            <select className="form-select">
              <option>1.8.8</option>
              <option>1.8.9</option>
              <option>1.12.2</option>
              <option>1.16.5</option>
              <option>1.17</option>
              <option>1.17.1</option>
              <option>1.18.1</option>
              <option>1.20</option>
              <option>1.21</option>
              <option>1.21.4</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select className="form-select">
            <option>Select</option>
            <option>No Payment Gateway Found</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}

export default Checkout;
