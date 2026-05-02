import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
       <div className="container border-top mt-5">
        <div className="row mt-5 ">
            <div className="col">
                <img src="media/logo.svg" alt="logo" style={{width:"50%"}}/>
           <p>&copy; 2010 - 2026, Zerodha Broking Ltd.All rights reserved.</p>
            </div>

            <div className="col">
                <p><b>Account</b> </p>
           <a href="/" style={{ textDecoration: "none" }}>Open demat account</a><br/> 
           <a href="/" style={{ textDecoration: "none" }}>Minor demat account</a><br/> 
           <a href="/" style={{ textDecoration: "none" }}>NRI demat account</a><br/>
           <a href="/" style={{ textDecoration: "none" }}>HUF demat account</a><br/>  
           <a href="/" style={{ textDecoration: "none" }}>Commodity</a><br/>
           <a href="/" style={{ textDecoration: "none" }}>Dematerialisation</a><br/>
           <a href="/" style={{ textDecoration: "none" }}>Fund transfer</a><br/>
           <a href="/" style={{ textDecoration: "none" }}>MTF</a><br/>
            </div>

            <div className="col">
                 <p><b>Support</b></p>
           <a href="/" style={{ textDecoration: "none" }}>Contact us</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Support portal</a><br />
           <a href="/" style={{ textDecoration: "none" }}>How to file a complaint?</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Status of your complaints</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Bulletin</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Circular</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Z-Connect blog</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Downloads</a>
            </div>

            <div className="col">
                 <p><b>Company</b></p>
           <a href="/" style={{ textDecoration: "none" }}>About</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Philosophy</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Press & media</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Careers</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Zerodha Cares (CSR)</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Zerodha.tech</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Open source</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Referral program</a>
            </div>

            <div className="col">
                 <p><b>Quick links</b></p>
           <a href="/" style={{ textDecoration: "none" }}>Upcoming IPOs</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Brokerage charges</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Market holidays</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Economic calendar</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Calculators</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Markets</a><br /> 
           <a href="/" style={{ textDecoration: "none" }}>Sectors</a><br />
           <a href="/" style={{ textDecoration: "none" }}>Gift Nifty</a>
            </div>

        </div>

        <div className="mt-5 text-muted" style={{fontSize:"14px"}}>
            {/* niche wala content same rehne do */}
        </div>

  </div>
  </footer>
     );
}

export default Footer;