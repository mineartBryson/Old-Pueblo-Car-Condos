import React from "react";
import "../styles/investments.css";
// import marketDemandImg from "../assets/images/market-demand.jpeg";
// import revenuePotentialImg from "../assets/images/revenue-potential.jpeg";
// import investorBenefitsImg from "../assets/images/investor-benefits.jpeg";

function InvestmentSection() {
  return (
    <section className="investment">
      <div className="investment__header">
        <h2>Invest in a High-Growth Market</h2>
        <p>Old Pueblo Car Condos presents a rare opportunity to capitalize on a **high-demand, low-supply** market.</p>
      </div>

      <div className="investment__grid">
        <div className="investment__card">
          {/* <img src={marketDemandImg} alt="Market Demand" className="investment__image"/> */}
          <h3>📈 Market Demand</h3>
          <p>Luxury car storage demand exceeds **355,000+ units**, while fewer than **10,000 units** exist nationwide.</p>
        </div>

        <div className="investment__card">
          {/* <img src={revenuePotentialImg} alt="Revenue Potential" className="investment__image"/> */}
          <h3>💰 Revenue Streams</h3>
          <p>Investors earn from **unit appreciation, rental income, and premium service add-ons**.</p>
        </div>

        <div className="investment__card">
          {/* <img src={investorBenefitsImg} alt="Investor Benefits" className="investment__image"/> */}
          <h3>🚀 Investor Benefits</h3>
          <p>Early investors secure **premium units** and benefit from **pre-sale incentives & future appreciation**.</p>
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
