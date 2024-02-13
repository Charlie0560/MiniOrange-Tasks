import React, { useState } from "react";
import { addOns } from "@/pages/api/pricing";
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
} from "@fortawesome/free-solid-svg-icons";
import { List, ListItem } from "@mui/material";

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

function AddOns() {
  const [expandedState, setExpandedState] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [dense, setDense] = useState(false);
  const [feature, setFeature] = useState(false);

  const handleExpandClick = (index) => {
    setExpandedState((prevExpandedState) => ({
      ...prevExpandedState,
      [index]: !prevExpandedState[index],
    }));
    console.log(expandedState);
    setFeature(!feature);
  };
  return (
    <div>
      <center>
        <h1 className="mt-5"> Add Ons</h1>
      </center>

      <div className="row">
        <div className={`col-md-12 ${pricingCSS.pricingCardSection}`}>
          {addOns.map((e, index) => (
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
                      href="#request-demo-section"
                      target="_blank"
                      className={`btn  ${prod_css.primary_btn} mt-5`}
                      style={{ width: "max-content" }}
                    >
                      Request a Quote
                    </a>
                  </div>
                  <div
                    className={`col-md-4 ${pricingCSS.rightSection}`}
                    style={{ textAlign: "left", fontSize: "14px" }}
                  >
                    <span>{e.text}</span>
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
                  <Typography paragraph>{e.title}</Typography>
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
    </div>
  );
}

export default AddOns;
