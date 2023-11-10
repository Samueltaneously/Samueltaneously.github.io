import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};


export const Contact = (props) => {
  const formRef = useRef();
  const [{ name, email, message }, setState] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("service_m10eznd", "template_g0mrc6l", formRef.current, "WtYjGtrifwLAchbKv")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  console.log("showAlert:", showAlert);



  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact Me</h2>
                <p>
                  Fill out the form below to send an email, and I'll
                  get back to you as soon as possible!
                </p>
              </div>
              <form ref={formRef} name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Popup Alert */}
          {showAlert && (
            <div className="popup-alert">
              <span onClick={closeAlert} className="close-button">
                &times;
              </span>
              <p>Email sent successfully!</p>
            </div>
          )}

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Location
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Samuel H. Nelson
          </p>
        </div>
      </div>
    </div>
  );
};
