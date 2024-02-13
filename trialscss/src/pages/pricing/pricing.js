import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EmployeeIAM from "./EmployeeIAM";
import CustomerIAM from "./CustomerIAM";

function pricing() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Employee IAM" value="1" style={{ color: "black" }} />
              <Tab
                label="Customer IAM (CIAM)"
                value="2"
                style={{ color: "black" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <EmployeeIAM />
          </TabPanel>
          <TabPanel value="2">
            <CustomerIAM />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default pricing;
