import React, { useState } from "react";
import pricingCSS from "../../styles/pricing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Widget({ updateParentValue, inputPhone }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [looking, setLooking] = useState("");
  const [help, setHelp] = useState("");
  const handleSubmit = () => {
    alert(email + "\n" + phone + "\n" + looking + "\n" + help);
  };
  return (
    <div className={pricingCSS.widget}>
      <div className={pricingCSS.widgetHeader}>
        <p>miniOrange Email Support</p>
        <p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => updateParentValue(false)}
          />
        </p>
      </div>
      <form className="container">
        <label>
          Your Email Address:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {inputPhone && (
          <label>
            Phone Number:
            <input
              type="number"
              name="phonenumber"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        )}
        <label>
          What are you looking for ?
          <select onChange={(e) => setLooking(e.target.value)}>
            <option disabled>Select Category</option>
            <option value="Product Questions">Product Questions</option>
            <option value="Sales Enquiry">Sales Enquiry</option>
            <option value="Schedule a Demo">Schedule a Demo</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <label>
          How can we help you ?
          <textarea onChange={(e) => setHelp(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Widget;
