import React from "react";
import thanks from "../Components/assets/thanks.png";

function Thanks(){
    return(
      <div className="container thank">
       <img className="thank-img" src={thanks} alt=""></img>
       <p className="sub-heading">Our team will contact you soon <span className="highlight">for your enquires</span></p>
      </div>
    );
}

export default Thanks;