import React from "react";
import Header from "./Header";

function InfoContent() {
  return (
    <div className="masthead">
      <Header />
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light">DevConZM</h1>
            <button type="button" className="btn btn-primary">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContent;
