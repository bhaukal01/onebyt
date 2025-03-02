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

      <div className="card p-3 mb-4">
        <h5>Selected Plan: {selectedPlan.name}</h5>
        <p>Price: {selectedPlan.price}</p>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select className="form-select">
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
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
