"use client";
import React, { useState } from "react";
import pricingCSS from "../../styles/pricing.module.scss";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import prod_css from "../../styles/production_banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDollarSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { employeeIAM } from "@/pages/api/pricing";
import AddOns from "./AddOns";
import Widget from "./Widget";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function EmployeeIAM() {
  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [feature, setFeature] = useState(false);
  const [dense, setDense] = useState(false);
  const [expandedState, setExpandedState] = useState({});
  const [openWidget, setOpenWidget] = useState(false);
  const [inputPhone, setInputPhone] = useState(true);
  const openService = (val) => {
    setOpenWidget(true);
    setInputPhone(val);
  };
  const handleExpandClick = (index) => {
    setExpandedState((prevExpandedState) => ({
      ...prevExpandedState,
      [index]: !prevExpandedState[index],
    }));
    console.log(expandedState);
    setFeature(!feature);
  };

  const updateValue = () => {
    setOpenWidget(false);
  };

  return (
    <div>
      <p>
        Employee IAM is designed to manage and protect the identities of
        internal employees and remote workforce.
      </p>

      <div className={`row ${pricingCSS.pricing_toggleSection}`}>
        <div className={`col-md-4 ${pricingCSS.togglebtn}`}>
          <span
            style={{
              opacity: checked ? 0.5 : 1,
            }}
          >
            <b>Cloud</b>{" "}
          </span>
          <label className={pricingCSS.switchToggle}>
            <input type="checkbox" onChange={(e) => setChecked(!checked)} />
            <span className={`${pricingCSS.slider} ${pricingCSS.round}`}></span>
          </label>
          <span
            style={{
              opacity: !checked ? 0.5 : 1,
            }}
          >
            On-Premise(Self Hosted)
          </span>
        </div>
        <div className={`col-md-8 ${pricingCSS.tagline}`}>
          {!checked ? (
            <span>Minimum 10 Users Required (Cloud)</span>
          ) : (
            <span> Minimum 25 Users Required (On-Premise)</span>
          )}
        </div>
      </div>

      {/* cards */}

      <div className="row">
        <div className={`col-md-12 ${pricingCSS.pricingCardSection}`}>
          {employeeIAM.map((e, index) => (
            <Card
              sx={{ maxWidth: 600 }}
              className={`mt-5 col-md-6 col-xs-12 col-sm-12 ${pricingCSS.pricingCards}`}
            >
              <CardContent>
                <div className="row">
                  <div className={`col-md-7 ${pricingCSS.leftSection}`}>
                    <h2 style={{ wordBreak: "break-word", height: "50px" }}>
                      {e.title}
                    </h2>
                    <a
                      className={`btn  ${prod_css.primary_btn}`}
                      style={{ width: "max-content" }}
                      onClick={(e) => openService(true)}
                    >
                      Request a Quote
                    </a>
                  </div>
                  <div className={`col-md-4 ${pricingCSS.rightSection}`}>
                    <span>List Price</span>
                    <p>
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
                        {!checked ? e.listPrice : e.onpremisePrice}
                      </span>
                    </p>
                    <span>{e.per}</span>
                  </div>
                </div>
              </CardContent>
              <CardActions
                disableSpacing
                style={{
                  backgroundColor: "#646464",
                  padding: "0px",
                  height: "40px",
                  cursor: "pointer",
                }}
                onClick={() => handleExpandClick(index)}
              >
                <span
                  style={{ fontSize: "17px", margin: "auto", color: "white" }}
                >
                  {!expandedState[index] ? (
                    <span>Show Features</span>
                  ) : (
                    <span> Collapse Features</span>
                  )}
                  <ExpandMore
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ margin: "auto", color: "white" }}
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </span>
              </CardActions>
              <Collapse in={expandedState[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{e.title} Features:</Typography>
                  <Demo>
                    <List dense={dense}>
                      {e.features.map((ef, featureindex) => (
                        <ListItem className={pricingCSS.pFeatures}>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            style={{ color: "#eb5424" }}
                          />

                          {ef}
                        </ListItem>
                      ))}
                    </List>
                  </Demo>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </div>
      </div>

      {/* addons  */}

      <AddOns />

      {/* Widget */}

      {openWidget && (
        <Widget updateParentValue={updateValue} inputPhone={inputPhone} />
      )}
      {!openWidget && (
        <div className={pricingCSS.serviceIcon} onClick={() => openService(false)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      )}
    </div>
  );
}

export default EmployeeIAM;
