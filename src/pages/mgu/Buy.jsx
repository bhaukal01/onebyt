import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageName, price, packageImg } = location.state || {};

  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cashfree, setCashfree] = useState(null);

  useEffect(() => {
    if (!packageName || !price) {
      navigate("/ranks"); // Redirect if no rank selected
    }

    async function initializeSDK() {
      const sdk = await load({ mode: "production" }); // Change to "production" for live mode
      setCashfree(sdk);
    }
    initializeSDK();
  }, [packageName, price, navigate]);

  const handlePayment = async () => {
    if (!username.trim()) {
      setErrorMessage("Please enter your Minecraft username.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://payapi.onebyt.cloud/api/purchase/buy",
        { username, rank: packageName, price }
      );

      if (data.paymentSessionId && cashfree) {
        cashfree
          .checkout({
            paymentSessionId: data.paymentSessionId,
            redirectTarget: "_modal", // Opens payment in a popup
          })
          .then(async (result) => {
            if (result.error) {
              console.error("Payment Error:", result.error);
              setErrorMessage("Payment failed. Please try again.");
            }
            if (result.paymentDetails) {
              console.log(
                "✅ Payment Success:",
                result.paymentDetails.paymentMessage
              );

              // Send payment success details to backend
              await handlePaymentSuccess(result.paymentDetails);

              navigate("/success"); // Redirect after successful payment
            }
          });
      } else {
        setErrorMessage("Failed to initiate payment. Try again.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Error processing request. Try again."
      );
      console.error("Payment Error:", error.response?.data || error.message);
    }
  };

  const handlePaymentSuccess = async (paymentData) => {
    try {
      // Send payment success details to backend
      const response = await fetch(
        "https://payapi.onebyt.cloud/api/pay-success",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            rank: packageName,
            price,
          }),
        }
      );

      const result = await response.json();
      if (result.success) {
        console.log("✅ Payment recorded successfully");

        // Call /rcon after payment is recorded
        await fetch("https://payapi.onebyt.cloud/api/rcon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, rank: packageName }),
        });

        console.log(
          `✅ RCON command executed: /lp user ${username} group add ${packageName}`
        );
      } else {
        console.error("❌ Failed to record payment:", result.error);
      }
    } catch (error) {
      console.error("❌ Error sending payment success data:", error);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h3 className="section-title">Checkout</h3>
      <div className="card p-4 text-center">
        <div className="justify-content-between align-items-center">
          <h5>Selected Package:</h5>
          <h3>{packageName || "No Package Selected"}</h3>
          {packageImg && (
            <img src={packageImg} alt="Package" className="img_main" />
          )}
          <p className="mt-3">
            <strong>Final Price:</strong> ₹{price || 0}
          </p>
        </div>

        <div className="mt-4">
          <label htmlFor="username" className="form-label">
            Enter In-Game Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control text-center"
            placeholder="Your Minecraft Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-buy mt-3" onClick={handlePayment}>
            Proceed to Payment
          </button>
          <a href="/ranks" className="btn btn-buy mt-3">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Buy;
