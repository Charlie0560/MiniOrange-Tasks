import {
  faBed,
  faBriefcase,
  faBuildingColumns,
  faBurger,
  faCar,
  faCartShopping,
  faFilm,
  faFilter,
  faGlobe,
  faHandHoldingDollar,
  faHouseMedical,
  faMagnifyingGlass,
  faPhoneFlip,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import custimg from "./intel3.png";
import anoimg from "../production_banner/thinkific-integration.webp";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PaginationComponent from "./pagination";

const drawerBleeding = 56;

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const categories = [
  {
    icon: faUserGroup,
    name: "All",
  },
  {
    icon: faGlobe,
    name: "World Top Brands",
  },
  {
    icon: faBuildingColumns,
    name: "Educational Institutes",
  },
  {
    icon: faBed,
    name: "Government / Non-Profit Org",
  },
  {
    icon: faHandHoldingDollar,
    name: "Finance And Banks",
  },
  {
    icon: faFilm,
    name: "Media And Entertainment",
  },
  {
    icon: faCar,
    name: "Global Automobiles",
  },
  {
    icon: faHouseMedical,
    name: "Healthcare And Hospital",
  },
  {
    icon: faBurger,
    name: "Food And Beverages",
  },
  {
    icon: faPhoneFlip,
    name: "Telecom And Internet Sector",
  },
  {
    icon: faCartShopping,
    name: "Retail Customers",
  },
  {
    icon: faBriefcase,
    name: " SMB Customers",
  },
];

const regionsList = [
  {
    value: "",
    region: "All",
  },
  {
    value: "Asia Pacific(APAC)",
    region: "Asia Pacific(APAC)",
  },
  {
    value: "Middle East(EMEA)",
    region: "Middle East(EMEA)",
  },
  {
    value: "America",
    region: "America",
  },
];

const custimgFiles = [
  {
    name: "Intel",
    customer: custimg,
    category: "World Top Brands",
  },
  {
    name: "Intel2",
    customer: custimg,
    category: "World Top Brands",
    region: "Asia Pacific(APAC)",
  },
  {
    name: "another",
    customer: anoimg,
    category: "World Top Brands",
    region: "Asia Pacific(APAC)",
  },
  {
    name: "another2",
    customer: custimg,
    category: "World Top Brands",
    region: "Asia Pacific(APAC)",
  },
  {
    customer: custimg,
    category: "World Top Brands",
    region: "Middle East(EMEA)",
  },
  {
    customer: custimg,
    category: "Food And Beverages",
    region: "Middle East(EMEA)",
  },
  {
    customer: custimg,
    category: "World Top Brands",
    region: "Middle East(EMEA)",
  },

  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
  {
    customer: custimg,
  },
];

function customer(props) {
  const [searchName, setSearchName] = useState("");
  const [regions, setRegions] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = React.useState(false);

  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleChange = (event) => {
    setRegions(event.target.value);
  };
  const handlePageChange = (page) => {
    // You can fetch the data for the new page here if needed
    setCurrentPage(page);
  };
  const itemsPerPage = 18;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = custimgFiles.slice(startIndex, endIndex);
  return (
    <div className="customerPage">
      <div className="row">
        <div className="col-md-3 cust-left-sec">
          <h4 className="cust-cat-heading">CATEGORIES</h4>

          <div className="cat-list">
            {categories.map((cat) => (
              <h5
                className="category-name"
                onClick={() => setCategory(cat.name)}
                style={{ color: category == cat.name && "orange" }}
              >
                <FontAwesomeIcon
                  icon={cat.icon}
                  style={{ color: category == cat.name ? "orange" : "#4cbf9d" }}
                />
                {cat.name}
              </h5>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <button onClick={toggleDrawer(true)} className="cust-mobile-filter">
            <FontAwesomeIcon icon={faFilter} />
            Fliter
          </button>
          <div className="fltr-wrapper">
            <div className="srch-wrapper">
              <input
                type="search"
                placeholder="Search Customers"
                onChange={(e) => setSearchName(e.target.value)}
              />
              <button className="srch-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="region-wrapper">
              <p>
                <b>Refine Customer By: </b>
              </p>
              <FormControl className="region-fltr">
                <Select
                  value={regions}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  width={100}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <MenuItem style={{ fontSize: "12px" }} value="">
                    Region
                  </MenuItem>
                  {regionsList.map((r) => (
                    <MenuItem style={{ fontSize: "12px" }} value={r.value}>
                      {r.region}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="cust-mob-heading">
            <h3 className="text-center" id="cust-heading">
              Over 200k+ registrations and 9k+ premium customers globally trust
              miniOrang
            </h3>
          </div>
          {category && (
            <center>Trusted by Educational institutes across the world</center>
          )}
          {searchName && (
            <div className="cust-images ">
              {itemsToShow.map(
                (c) =>
                  c.name?.toLowerCase().startsWith(searchName) && (
                    <Image
                      src={c.customer}
                      width={135}
                      className="cust-img image-fluid"
                      alt="Picture of the cutomer"
                    />
                  )
              )}
              <h1 style={{ color: "#f7934d", textAlign: "center" }}>
                No Customer Found!
              </h1>
            </div>
          )}
          {!searchName && (
            <div className="cust-images ">
              {category === "All" &&
                !regions &&
                itemsToShow.map((c) => (
                  <Image
                    src={c.customer}
                    width={135}
                    className="cust-img image-fluid"
                    alt="Picture of the cutomer"
                  />
                ))}
              {category === "All" &&
                regions &&
                itemsToShow.map(
                  (c) =>
                    regions === c.region && (
                      <Image
                        src={c.customer}
                        width={135}
                        className="cust-img image-fluid"
                        alt="Picture of the cutomer"
                      />
                    )
                )}
              {itemsToShow.map(
                (c) =>
                  !category &&
                  !regions && (
                    <Image
                      src={c.customer}
                      width={135}
                      className="cust-img image-fluid"
                      alt="Picture of the cutomer"
                    />
                  )
              )}
              {category &&
                !regions &&
                itemsToShow.map(
                  (c) =>
                    category === c.category && (
                      <Image
                        src={c.customer}
                        width={135}
                        className="cust-img image-fluid"
                        alt="Picture of the cutomer"
                      />
                    )
                )}
              {!category &&
                regions &&
                itemsToShow.map(
                  (c) =>
                    regions === c.region && (
                      <Image
                        src={c.customer}
                        width={135}
                        className="cust-img image-fluid"
                        alt="Picture of the cutomer"
                      />
                    )
                )}
              {category &&
                regions &&
                itemsToShow.map(
                  (c) =>
                    regions === c.region &&
                    category === c.category && (
                      <Image
                        src={c.customer}
                        width={135}
                        className="cust-img image-fluid"
                        alt="Picture of the cutomer"
                      />
                    )
                )}
            </div>
          )}
          <div className="cust-pagination">
            <PaginationComponent
              totalItems={custimgFiles.length}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            51 results
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <div className="fltr-wrapper-mobile">
            <div className="srch-wrapper">
              <input
                type="search"
                placeholder="Search Customers"
                onChange={(e) => setSearchName(e.target.value)}
              />
              <button className="srch-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="region-wrapper">
              <p>
                <b>Refine Customer By: </b>
              </p>
              <FormControl className="region-fltr">
                <Select
                  value={regions}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  width={100}
                  style={{
                    fontSize: "12px",
                  }}
                  className="regionSelection"
                >
                  <MenuItem style={{ fontSize: "12px" }} value="">
                    Region
                  </MenuItem>
                  {regionsList.map((r) => (
                    <MenuItem style={{ fontSize: "12px" }} value={r.value}>
                      {r.region}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="mobile-categories">
            <h4 className="cust-cat-heading">CATEGORIES</h4>

            <div className="cat-list">
              {categories.map((cat) => (
                <h5
                  className="category-name"
                  onClick={() => setCategory(cat.name)}
                  style={{ color: category == cat.name && "orange" }}
                >
                  <FontAwesomeIcon
                    icon={cat.icon}
                    style={{
                      color: category == cat.name ? "orange" : "#4cbf9d",
                    }}
                  />
                  {cat.name}
                </h5>
              ))}
            </div>
          </div>

          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
}

customer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  window: PropTypes.func,
};

export default customer;
