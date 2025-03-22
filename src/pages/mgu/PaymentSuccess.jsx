import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h3 className="section-title text-success">🎉 Payment Successful!</h3>
      <p>Thank you for your purchase! Your rank will be updated shortly.</p>

      <button className="btn btn-buy mt-3" onClick={() => navigate("/")}>
        Return to Store
      </button>
    </div>
  );
};

export default PaymentSuccess;
