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
                <a
                  href="https://www.jetbrains.com"
                  title="jet brains"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="200"
                    height="200"
                    alt="JetBrains"
                    src={require("../assets/jetbrains.png")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a
                  href="https://www.stickermule.com/supports/you"
                  title="sticker mule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="200"
                    height="200"
                    alt="Stickermule"
                    src={require("../assets/stickermule.svg")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a
                  href="https://github.com/agora-code-community"
                  title="agora code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="200"
                    height="200"
                    alt="Agora Code"
                    src={require("../assets/agoracode.png")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a
                  href="https://www.gitkraken.com"
                  title="git kraken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="200"
                    height="200"
                    alt="GitKraken"
                    src={require("../assets/gitkraken.svg")}
                  />
                </a>
              </div>
              <div className="col-sm">
                <a
                  href="https://www.bongohive.co.zm"
                  title="bongo hive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="200"
                    height="200"
                    alt="Bongohive"
                    src={require("../assets/bongohive.png")}
                  />
                </a>
              </div>

              <div className="col-sm">
                <a
                  href="https://asikananetwork.org"
                  title="asikana network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="200"
                    height="200"
                    alt="asikananetwork"
                    src={require("../assets/asikananetwork.jpg")}
                  />
                </a>
              </div>

              <div className="col-sm">
                <a
                  href="https://aws.amazon.com/"
                  title="AWS"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    width="200"
                    height="200"
                    alt="amazon web services"
                    src={require("../assets/aws.png")}
                  />
                </a>
              </div>

              <div className="col-sm">
                <a
                  href="https://pubnub.com"
                  title="pubnub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="300"
                    height="100"
                    alt="pubnub"
                    src={require("../assets/pubnub.png")}
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h6>
          If you would like to partner with us, send us an email at{" "}
          <a href="mailto:info@devcon.co.zm" title="email">
            info@devcon.co.zm
          </a>
        </h6>
      </div>
    </section>
  );
}
export default Partners;
