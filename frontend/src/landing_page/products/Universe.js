import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1 className="mt-5">The Zerodha Universe</h1>

        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" alt="smallcase logo" />
          <p className="text-muted small">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="fund house"
            style={{ height: "40px", width: "100%", objectFit: "contain" }}
          />
          <p className="text-muted small">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/streakLogo.png"
            alt="streak logo"
            style={{ height: "40px", width: "100%", objectFit: "contain" }}
          />
          <p className="text-muted small">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/sensibullLogo.svg"
            alt="sensibull logo"
            style={{ height: "40px", width: "100%", objectFit: "contain" }}
          />
          <p className="text-muted small">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" alt="golden pi logo" />
          <p className="text-muted small">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/dittoLogo.png"
            alt="ditto logo"
            style={{ height: "40px", width: "100%", objectFit: "contain" }}
          />
          <p className="text-muted small">Insurance</p>
        </div>

        <div className="col-12 mt-4 mb-5">
          <button
            className="btn btn-primary fs-5 p-2"
            style={{ width: "20%" }}
          >
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  );
}

export default Universe;