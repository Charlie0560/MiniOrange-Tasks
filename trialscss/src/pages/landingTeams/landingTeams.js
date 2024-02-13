import React, { useEffect, useState } from "react";
import teamsCSS from "../../styles/landingTeams.module.scss";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import wordPressLogo from "../../images/wp-logo.webp";
import atlassianLogo from "../../images/atlassian-logo.webp";
import drupalLogo from "../../images/drupal-logo.webp";
import iamLogo from "../../images/iam-logo.webp";
import shopifyLogo from "../../images/shopify-logo.webp";
import TabContent from "./tabContent";
import wordPressProd from "../../images/wp-products.webp";
import atlaProd from "../../images/atlassian-products.webp";
import iamProd from "../../images/idp-products.webp";
import shopifyProd from "../../images/shopify-products.webp";
import drupalProd from "../../images/drupal-products.webp";

import Image from "next/image";

const tabs = [
  { img: wordPressLogo, title: "WordPress", value: 1 },
  { img: atlassianLogo, title: "Atlassian", value: 2 },
  { img: iamLogo, title: "Identity Platform", value: 3 },
  { img: shopifyLogo, title: "Shopify", value: 4 },
  { img: drupalLogo, title: "Drupal", value: 5 },
];

const tabCon = [
  {
    value: 1,
    img: wordPressProd,
    heading:
      "Equip your WordPress site with our best-in-class security solutions ",
    url: "https://plugins.miniorange.com/wordpress",
    text: "Explore our suite of best-in-class WordPress plugins covering every facet of your WordPress for educational institutes, financial institutions, IT, real estate and more.",
  },
  {
    value: 2,
    img: atlaProd,
    heading: "Authentication And Logon Into Atlassian with our suite of Apps",
    url: "https://plugins.miniorange.com/atlassian",
    text: "miniOrange simplifies Atlassian suite security and user management with, one-click access, for employees, customers and partners, through all device types, to all enterprise having on-premises applications.",
  },
  {
    value: 3,
    img: iamProd,
    heading: "Seamless and reliable IAM solution for your business",
    url: "https://www.miniorange.com/iam/",
    text: "Everything you need for Identity and access management (IAM) to secure workforce, customer, and partner identities to meet the unique needs of a fast-growing company that too at a price that works for your budget.",
  },
  {
    value: 4,
    img: shopifyProd,
    heading: "Secure your own Shopify eCommerce websites or stores",
    url: "https://plugins.miniorange.com/shopify/",
    text: "Wholesome security solutions within Shopify using our Apps like Single Sign-On, Shopify Store as IDP, Login with OTP, Two Factor Authentication, Social Login, Firewall, etc.",
  },
  {
    value: 5,
    img: drupalProd,
    heading:
      "State-Of-The-Art Security Solutions for your Drupal website, to make it as robust as it can",
    url: "https://plugins.miniorange.com/drupal",
    text: "We understand how important Data Privacy is, and to that effect, our solutions such as SSO, MFA, Provisioning and Sync can be securely deployed completely within the confines of your own ecosystem.",
  },
];

function landingTeams() {
  const [value, setValue] = useState(1);
  const [tabdata, setTabData] = useState(tabCon[0]);

  const handleChange = (tvalue) => {
    setValue(tvalue);
    setTabData(tabCon[value - 1]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next tab value
      const nextValue = (value % tabs.length) + 1;
      setValue(nextValue);
      setTabData(tabCon[nextValue - 1]);
    }, 30000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <div className="mt-5">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box className={teamsCSS.teamTabs}>
            {tabs.map((t) => (
              <div
                className={teamsCSS.teamTab}
                onClick={() => handleChange(t.value)}
                style={{
                  boxShadow: t.value === value ? "4px 5px 9px #c7c7c7" : "none",
                }}
              >
                <Image src={t.img} alt={t.title} width={25} height={25} />
                <span>{t.title}</span>
              </div>
            ))}
          </Box>
          <TabPanel value={value}>
            <TabContent tabdata={tabdata} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default landingTeams;
