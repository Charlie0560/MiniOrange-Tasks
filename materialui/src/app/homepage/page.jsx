"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import TabContext from "@mui/lab/TabContext"
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'


// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
function homepage() {

    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Box>

                {/* <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
                        <Tab label="Item one" {...a11yProps(0)} />
                        <Tab label="Item tow" {...a11yProps(1)} />
                        <Tab label="Item three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel> */}


                {/* {optional} */}


                <TabContext value={value}>

                    <Box>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="item one" value="1" />
                            <Tab label="item two" value="2" />
                            <Tab label="item three" value="3" />

                        </TabList>
                    </Box>
                    <TabPanel value='1'>Item one</TabPanel>
                    <TabPanel value='2'>Item two</TabPanel>
                    <TabPanel value='3'>Item three</TabPanel>
                </TabContext>
            </Box>

            <center>

            </center>
        </div>
    )
}

export default homepage