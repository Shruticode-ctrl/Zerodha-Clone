import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <Link to={tryDemo}>
              Try Demo{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>

            <Link to={learnMore} style={{ marginLeft: "50px" }}>
              Learn More{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="mt-3">
            <a href={googlePlay} target="_blank" rel="noreferrer">
              <img src="/media/googlePlayBadge.svg" alt="Google Play" />
            </a>

            <a
              href={appStore}
              style={{ marginLeft: "50px" }}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/media/appStoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;