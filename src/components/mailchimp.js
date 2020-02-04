import React from "react";
import jsonp from "jsonp";
import PropTypes from "prop-types";

const MAIL_URL = "https://devcon.us4.list-manage.com/subscribe/post?u=31e5301634aa07f8ca904a3b9&amp;id=ca1b759acc";

class Mailchimp extends React.Component {
  state = {};

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields } = this.props;
    const values = fields
      .map(field => {
        return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
      })
      .join("&");
    const path = `${MAIL_URL}&${values}`;
    console.log(path);
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state["EMAIL"];
    !regex.test(email) ? this.setState({ status: "empty" }) : this.sendData(url);
  }

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      console.log(data);
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: "duplicate" });
      } else if (err) {
        this.setState({ status: "error" });
      } else if (data.result !== "success") {
        this.setState({ status: "error" });
      } else {
        this.setState({ status: "success" });
      }
    });
  }

  render() {
    const { fields, styles, className, buttonClassName, inputClassName } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages
    };
    const { status } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
            <h1 className="text-center section-title" style={{ paddingTop: "40px", paddingBottom: "20px" }}>
              Sign Up To Our Newsletter
            </h1>
            <div className="col-sm-12 justify">
              <div className="w-full mb-6">
                <form className="text-center" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group mb-6">
                    {fields.map(input => (
                      <input
                        className="form-control text-black border rounded py-2 px-3 m-2 placeholder-black"
                        {...input}
                        key={input.name}
                        onChange={({ target }) => this.setState({ [input.name]: target.value })}
                        defaultValue={this.state[input.name]}
                        placeholder={input.placeholderAccess}
                      />
                    ))}
                  </div>
                  <div className="form-group">
                    <button
                      disabled={status === "sending" || status === "success"}
                      type="submit"
                      className="bg-blue-400 hover:bg-blue-600 px-6 py-2 rounded-lg font-bold text-gray-700"
                    >
                      {messages.button}
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="msg-alert">
                      {status === "sending" && <p style={styles.sendingMsg}>{messages.sending}</p>}
                      {status === "success" && <p style={styles.successMsg}>{messages.success}</p>}
                      {status === "duplicate" && <p style={styles.duplicateMsg}>{messages.duplicate}</p>}
                      {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
                      {status === "error" && <p style={styles.errorMsg}>{messages.error}</p>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe!"
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      color: "#0652DD"
    },
    successMsg: {
      color: "#009432"
    },
    duplicateMsg: {
      color: "#EE5A24"
    },
    errorMsg: {
      color: "#ED4C67"
    }
  }
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string
};

export default Mailchimp;
