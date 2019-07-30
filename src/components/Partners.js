import React from "react";

function Partners() {
  return (
    <section id="partners">
      <div className="container">
        <h1 className="text-center section-title">Partners</h1>
        <div className="">
          {/* TODO */}
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <a href="https://www.jetbrains.com" target="_blank">
                  <img
                    width="200"
                    height="200"
                    alt="JetBrains"
                    src={require("../assets/jetbrains.png")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a href="https://www.stickermule.com" target="_blank">
                  <img
                    width="200"
                    height="200"
                    alt="Stickermule"
                    src={require("../assets/stickermule.svg")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a href="#" target="_blank">
                  <img
                    width="200"
                    height="200"
                    alt="JetBrains"
                    src={require("../assets/agoracode.png")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a href="https://www.gitkraken.com" target="_blank">
                  <img
                    width="200"
                    height="200"
                    alt="GitKraken"
                    src={require("../assets/gitkraken.svg")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a href="https://www.bongohive.co.zm" target="_blank">
                  <img
                    width="200"
                    height="200"
                    alt="Bongohive"
                    src={require("../assets/bongohive.png")}
                  />
                </a>
              </div>
              {/* Below section is kept for styling purposes */}
              {/* Section is preset to add new partner */}
              <div className="col-sm" />
              <a href="#" target="_blank">
                <img 
                    width="200" 
                    height="200" 
                    alt="" 
                    src="" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="center email-header">
        <h6>
          If you would like to partner with us, send us an email at{" "}
          <a href="mailto:info@devcon.co.zm">DevConZM</a>
        </h6>
      </div>
    </section>
  );
}
export default Partners;
