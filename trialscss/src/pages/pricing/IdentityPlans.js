import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pricingCSS from "../../styles/pricing.module.scss";

function IdentityPlans() {
  return (
    <div>
        <thead>
          <tr>
            <th scope="col" colspan="4">
              #
            </th>
            <th scope="col">Free</th>
            <th scope="col">Basic</th>
            <th scope="col">Professional</th>
            <th scope="col">Enterprise</th>
          </tr>

          <td></td>
        </thead>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default IdentityPlans;
