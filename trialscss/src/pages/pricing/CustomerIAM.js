import React, { useState } from "react";
import pricingCSS from "../../styles/pricing.module.scss";
import { FormControl, MenuItem, Select } from "@mui/material";

import { customerIAM } from "@/pages/api/pricing";
import IAMCards from "./IAMCards";
import IdentityPlans from "./IdentityPlans";

const tiers = [500, 1000, 2500, 5000, 7500, 10000, "10000+"];

function CustomerIAM() {
  const [tier, setTier] = useState(500);

  const handleChange = (event) => {
    setTier(event.target.value);
  };
  var basicPrices = "";
  var proPrices = "";
  if (tier === 500) {
    basicPrices = customerIAM.basic.upto500;
    proPrices = customerIAM.professional.upto500;
  } else if (tier === 1000) {
    basicPrices = customerIAM.basic.upto1000;
    proPrices = customerIAM.professional.upto1000;
  } else if (tier === 2500) {
    basicPrices = customerIAM.basic.upto2500;
    proPrices = customerIAM.professional.upto2500;
  } else if (tier === 5000) {
    basicPrices = customerIAM.basic.upto5000;
    proPrices = customerIAM.professional.upto5000;
  } else if (tier === 7500) {
    basicPrices = customerIAM.basic.upto7500;
    proPrices = customerIAM.professional.upto7500;
  } else if (tier === 10000) {
    basicPrices = customerIAM.basic.upto10000;
    proPrices = customerIAM.professional.upto10000;
  } else if (tier === "10000+") {
    basicPrices = "Contact Us";
    proPrices = "Contact Us";
  }

  return (
    <div>
      <p>
        Designed to manage and protect external identities such as consumers
        (website/mobile app visitors), students/staff, citizens, etc. We have
        On-Premise CIAM hosting options available
      </p>
      <div className={pricingCSS.tierSelection}>
        <p style={{ fontSize: "18px", marginTop: "20px" }}> User Tier </p>
        <FormControl className={pricingCSS.tier_fltr}>
          <Select
            value={tier}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            // width={100}
            style={{
              fontSize: "15px",
              backgroundColor: "#333333",
              color: "white",
            }}
          >
            {tiers.map((r) => (
              <MenuItem
                style={{
                  fontSize: "15px",
                  backgroundColor: "#333333",
                  color: "white",
                }}
                value={r}
              >
                Upto : {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <br />
      <br />
      <IAMCards tier={tier} basicPrices={basicPrices} proPrices={proPrices} />
      <br />
      <br />
      {/* <center>
        <h2 style={{ fontWeight: 700 }}>
          Compare Customer Identity Plan Features
        </h2>
      </center>
      <IdentityPlans /> */}
    </div>
  );
}

export default CustomerIAM;
