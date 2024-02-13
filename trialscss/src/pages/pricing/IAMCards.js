import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import prod_css from "../../styles/production_banner.module.scss";
import pricingCSS from "../../styles/pricing.module.scss";

function IAMCards({ tier, basicPrices, proPrices }) {
  return (
    <div className={`${pricingCSS.IAMCards}`}>
      <div className={` ${pricingCSS.customerIAMCard}`}>
        <p className={pricingCSS.priceHead}>Free</p>
        <p style={{ marginTop: "0px" }}>
          <FontAwesomeIcon
            icon={faDollarSign}
            style={{
              color: "#eb5424",
              position: "absolute",
              marginTop: "20px",
            }}
          />{" "}
          <span
            style={{
              fontSize: "70px",
              color: "black",
              marginLeft: "15px",
            }}
          >
            0
          </span>
          <span style={{ marginLeft: "20px" }}>per month</span>
        </p>
        <p style={{ marginTop: "0px" }}>
          For individuals just getting started with miniOrange
        </p>

        <a
          href="#request-demo-section"
          target="_blank"
          className={`btn  ${prod_css.primary_btn}`}
          style={{ width: "max-content", marginTop: "0px" }}
        >
          Free Trial
        </a>
      </div>

      <div className={` ${pricingCSS.customerIAMCard}`}>
        <center>
          <div className={pricingCSS.popTag}>Most Popular</div>
        </center>
        <p className={pricingCSS.priceHead}>Basic</p>
        <p
          style={{
            color: "#eb5424",
            fontSize: "14px",
            display: tier === "10000+" && "none",
          }}
        >
          <b>Starting at</b>
        </p>
        <p>
          <FontAwesomeIcon
            icon={faDollarSign}
            style={{
              color: "#eb5424",
              position: "absolute",
              marginTop: "20px",
              display: tier === "10000+" && "none",
            }}
          />{" "}
          <span
            style={{
              fontSize: tier !== "10000+" ? "70px" : "40px",
              color: "black",
              marginLeft: tier === "10000+" ? "0px" : "15px",
            }}
          >
            {basicPrices}
          </span>
        </p>
        <b>
          per month Upto <span style={{ color: "red" }}>{tier}</span> Users
        </b>
        <p className="mt-4">
          For business that require integration with external identity &
          multiple social connections
        </p>

        <a
          href="#request-demo-section"
          target="_blank"
          className={`btn  ${prod_css.primary_btn}`}
          style={{ width: "max-content" }}
        >
          Start Basic
        </a>
      </div>

      <div className={` ${pricingCSS.customerIAMCard}`}>
        <p className={pricingCSS.priceHead}>Professional</p>
        <p
          style={{
            color: "#eb5424",
            fontSize: "14px",
            display: tier === "10000+" && "none",
          }}
        >
          <b>Starting at</b>
        </p>
        <p>
          <FontAwesomeIcon
            icon={faDollarSign}
            style={{
              color: "#eb5424",
              position: "absolute",
              marginTop: "20px",
              display: tier === "10000+" && "none",
            }}
          />{" "}
          <span
            style={{
              fontSize: tier !== "10000+" ? "70px" : "40px",
              color: "black",
              marginLeft: tier === "10000+" ? "0px" : "15px",
            }}
          >
            {proPrices}
          </span>
        </p>
        <b>
          per month Upto <span style={{ color: "red" }}>{tier}</span> Users
        </b>
        <p className="mt-4">
          For business that need basic MFA with connections to multiple identity
          sources & external databases
        </p>

        <a
          href="#request-demo-section"
          target="_blank"
          className={`btn  ${prod_css.primary_btn}`}
          style={{ width: "max-content" }}
        >
          Start Professional
        </a>
      </div>
      <div
        className={` ${pricingCSS.customerIAMCard} ${pricingCSS.customCard}`}
      >
        <p className={pricingCSS.priceHead} style={{ color: "#eb5424" }}>
          Enterprises
        </p>

        <p>
          <span
            style={{
              fontSize: "40px",
              color: "white",
              marginLeft: "0px",
            }}
          >
            Custome Plan Pricing
          </span>
        </p>

        <p className="mt-4">
          Best for Government and Healthcare projects that need advance security
          and enterprise integration to scale up
        </p>

        <a
          href="#request-demo-section"
          target="_blank"
          className={`btn  ${prod_css.primary_btn}`}
          style={{ width: "max-content" }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default IAMCards;
