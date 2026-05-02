import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          <div className="col">
            <img src="media/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Account */}
          <div className="col">
            <p><b>Account</b></p>
            <Link to="/" style={{ textDecoration: "none" }}>Open demat account</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Minor demat account</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>NRI demat account</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>HUF demat account</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Commodity</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Dematerialisation</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Fund transfer</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>MTF</Link><br />
          </div>

          {/* Support */}
          <div className="col">
            <p><b>Support</b></p>
            <Link to="/support" style={{ textDecoration: "none" }}>Contact us</Link><br />
            <Link to="/support" style={{ textDecoration: "none" }}>Support portal</Link><br />
            <Link to="/support" style={{ textDecoration: "none" }}>How to file a complaint?</Link><br />
            <Link to="/support" style={{ textDecoration: "none" }}>Status of complaints</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Bulletin</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Circular</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Z-Connect blog</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Downloads</Link>
          </div>

          {/* Company */}
          <div className="col">
            <p><b>Company</b></p>
            <Link to="/" style={{ textDecoration: "none" }}>About</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Philosophy</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Press & media</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Careers</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>CSR</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Zerodha.tech</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Open source</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Referral program</Link>
          </div>

          {/* Quick links */}
          <div className="col">
            <p><b>Quick links</b></p>
            <Link to="/" style={{ textDecoration: "none" }}>Upcoming IPOs</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Brokerage charges</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Market holidays</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Economic calendar</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Calculators</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Markets</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Sectors</Link><br />
            <Link to="/" style={{ textDecoration: "none" }}>Gift Nifty</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;