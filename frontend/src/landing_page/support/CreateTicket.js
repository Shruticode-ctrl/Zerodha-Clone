import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">

        <h1 className="fs-2">
          To create a ticket, select a relevant topic
        </h1>

        {/* Column 1 */}
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-square-poll-vertical"></i> Your Zerodha Account
          </h4>

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin/leverage, Product and Order types
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite Web and Mobile
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </a>
        </div>

        {/* Column 2 */}
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-credit-card"></i> Funds
          </h4>

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding Funds
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Withdrawal
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </a>
        </div>

        {/* Column 3 */}
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
        </div>

        {/* Column 4 */}
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-circle-user"></i> Console
          </h4>

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Ledger
          </a>
        </div>

        {/* Column 5 */}
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-coins"></i> Coin
          </h4>

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Understanding Mutual Funds
          </a>
          <br />

          <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            About Coin
          </a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;