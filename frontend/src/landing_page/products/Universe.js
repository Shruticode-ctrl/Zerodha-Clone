import React from 'react';

function Universe() {
    return (
          <div className="container mt-5">
      <div className="row text-center">
      <h1 className="mt-5">The Zerodha Universe</h1>
      <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" alt="small case logo"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" alt="fund house" style={{ height: "40px", width: "100%", objectFit: "contain" }}/>
          <p className="text-small text-muted">Asset management</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" alt="streak logo" style={{ height: "40px", width: "100%", objectFit: "contain" }}/>
          <p className="text-small text-muted"> Algo & strategy platform</p>
        </div>

            <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" alt="sensibull logo" style={{ height: "40px", width: "100%", objectFit: "contain" }}/>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
          
           <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" alt="golden pi"/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>

           <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" alt="ditto logo" style={{ height: "40px", width: "100%", objectFit: "contain" }}/>
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
      );
}

export default Universe;