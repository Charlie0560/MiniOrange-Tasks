import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import prod_banner_img from "./thinkific-integration.webp";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Collapse } from "@mui/material";

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
const banner_list_cont = [
  {
    value: ` SSO + MFA Support for any Thinkific Plan (Free, Basic, Plus,
      etc)`,
  },
  {
    value: ` SSO + MFA Support for any Thinkific Plan (Free, Basic, Plus,
      etc)`,
  },
  {
    value: ` SSO + MFA Support for any Thinkific Plan (Free, Basic, Plus,
      etc)`,
  },
  {
    value: ` SSO + MFA Support for any Thinkific Plan (Free, Basic, Plus,
      etc)`,
  },
];
const banner_btns = [
  {
    link: "/pricing",
    value: "Pricing",
  },
  {
    link: "/pricing",
    value: "Pricing",
  },
  {
    link: "/pricing",
    value: "Pricing",
  },
];
function production_banner() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="prod-banner">
      <div className="container">
        <div className="row">

          {/* first column */}
          <div className="col-md-6">
            <div className="product-banner-heading">
              <h1 className="h2">
                <span className="prod-banner-h-t1">miniOrange +&nbsp;</span>
                <br />
                <span className="prod-banner-h-t2">Thinkific SSO & MFA</span>
              </h1>
            </div>
            <h3 className="prod-banner-cont">
              Thinkific Single Sign-On (SSO) using the miniOrange JWT solution
              enables seamless and secure access to your Thinkific site using a
              single set of login credentials along with any of your existing
              Identity Providers/User Store (Azure Active Directory, Okta, Ping,
              etc.) credentials. Additionally, for advanced security
              Multi-Factor Authentication (MFA) for Thinkific can also be
              enabled.
            </h3>



            <div className="prod-banner-list-div">
              <p className="product-banner-text pd-tp-tw">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#eb5424" }}
                />
                <span>
                  &nbsp;&nbsp;
                  <b>
                    SSO + MFA Support for any Thinkific Plan (Free, Basic, Plus,
                    etc)
                  </b>
                </span>
              </p>
              <p className="product-banner-text pd-tp-tw">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#eb5424" }}
                />
                <span>
                  &nbsp;&nbsp;
                  <b>
                    SSO + MFA Support for any Thinkific Plan (Free, Basic, Plus,
                    etc)
                  </b>
                </span>
              </p>
              <p className="product-banner-text">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#eb5424" }}
                />
                <span>
                  &nbsp;&nbsp;
                  <b>miniOrange SSO solution Recommended by Thinkific</b>
                </span>
              </p>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                {banner_list_cont.map((list_name) => (
                  <p className="product-banner-text">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "#eb5424" }}
                    />
                    <span>
                      &nbsp;&nbsp;
                      <b>{list_name.value}</b>
                    </span>
                  </p>
                ))}
              </Collapse>
            </div>
            <div className="prod-banner-expand-icon">
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </div>





            <a
              href="#request-demo-section"
              target="_blank"
              className="btn primary-btn"
            >
              <b>Request a Demo</b>
            </a>

            {banner_btns.map((btns) => (
              <a
                href={btns.link}
                target="_blank"
                className="btn secondary-btn sec-btn"
              >
                {btns.value}
              </a>
            ))}

            <br></br>
          </div>






          {/* second column */}
          <div className="col-md-6 prod-banner-img-section">
            <Image
              src={prod_banner_img}
              width={500}
              alt="Picture of the author"
              className="prod-banner-img image-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default production_banner;
