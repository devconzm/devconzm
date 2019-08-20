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
                  href="https://www.stickermule.com"
                  title="sticker mule"
                  target="_blank"
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
                <a href="#" title="agora code" target="_blank">
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
                >
                  <img
                    width="200"
                    height="200"
                    alt="asikananetwork"
                    src={require("../assets/asikananetwork.jpg")}
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="center email-header">
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
