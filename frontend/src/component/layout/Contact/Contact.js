import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import logo from "../Header/logo.svg";

const Contact = () => {
  return (
    <div className="contactContainer">
         <img className=" comfy"  src={logo} />
         <p  className=" animated bounce"> Click on the mail link to contact us...
          <a className="mailBtn" href="mailto:TheComfySloth@gmail.com">
        <Button>TheComfySloth@gmail.com</Button>
      </a>
      </p>
    </div>
  );
};

export default Contact;
