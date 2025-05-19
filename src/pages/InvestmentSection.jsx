//InvestmentSection.jsx
// Used to house some quick facts at the end of the website and leave a lasting impression on WHY investors would benefit by betting on
// Old Pueblo Car Condos. Includes sources to back up the information supplied and further inform possible stakeholders

import React from "react";
import "../styles/investments.css";

function InvestmentSection() {
  return (
    <section className="investment" id="investors">
      <div className="investment__header">
        <h2>Invest in a High-Growth Market</h2>
        <p>Old Pueblo Car Condos presents a rare opportunity to capitalize on a **high-demand, low-supply** market.</p>
      </div>

      <div className="investment__grid">
      <div className="investment__card">
        <h3>📈 Market Demand</h3>
        <p>
          Luxury car storage demand exceeds <strong>355,000+ units</strong>, while fewer than 
          <strong>10,000 units</strong> exist nationwide. 
          <a href="https://www.astuteanalytica.com/industry-report/vehicle-storage-unit-market">[Source]</a>
        </p>
      </div>

      <div className="investment__card">
        <h3>💰 Revenue Streams</h3>
        <p>
          Investors earn from <strong>unit appreciation, rental income, and premium service add-ons</strong>. 
          <a href="https://selling-guide.fanniemae.com/sel/b3-3.1-08/rental-income">[Source]</a>
        </p>
      </div>

      <div className="investment__card">
        <h3>🚀 Investor Benefits</h3>
        <p>
          Early investors secure <strong>premium units</strong> and benefit from 
          <strong>pre-sale incentives & future appreciation</strong>. 
          <a href="https://darroweverett.com/private-equity-management-incentive-structures-pros-cons/">[Source]</a>
        </p>
      </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
