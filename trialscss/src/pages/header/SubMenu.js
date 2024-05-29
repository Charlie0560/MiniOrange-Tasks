import { useState } from 'react';
import { Tabs, Tab, Box, Typography, Divider, Link } from '@mui/material';
import { KeyboardArrowRight, ArrowForward } from '@mui/icons-material'
import Image from 'next/image';

const TabSection = ({ value, handleChange, tabHeading, tabArr, tabBottomBtn, selectedTab }) => {
  return (
    <Box sx={{my:1}}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            display: 'none'
          }
        }}
        sx={{
          borderRight: 1,
          borderColor: 'divider', // Set the default background color of the tabs bar
          '& .MuiTab-root.Mui-selected, & .MuiTab-root.Mui-focusVisible': {
            backgroundColor: '#fff2e0', // Set the background color of the active tab and when focused
            color: '#ef6c00',
            borderRight: '3px solid ',
          },
        }}
      >
        {tabHeading &&
          <Typography
            variant='caption'
            sx={{ color: 'lightgray', textTransform: 'uppercase', my: 1 }}
          >
            {tabHeading}
          </Typography>
        }
        {tabArr.map((tabObj) => (
          <Tab
            // icon={tabObj.tabName === selectedTab.tabName && <KeyboardArrowRight />}
            iconPosition="end"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {tabObj.img &&
                  <Image
                    src={tabObj.img}
                    width={25}
                    height={25}
                    style={{ border: '1px solid gray', backgroundColor: `${tabObj.imgBgClr || '#fff'}`, borderRadius: `${tabObj.imgBorRad || '7px'}`, marginRight: 10 }}
                  />}
                {tabObj.tabName}
                {tabObj.tabName === selectedTab.tabName && <KeyboardArrowRight sx={{ height: '15px', marginLeft: 'auto' }} />}
              </Box>
            }
            value={tabObj.tabName}
            disableRipple
            sx={{
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: {md:'250px', xs:'100%'},
            }}
          />
        ))}
        {tabBottomBtn &&
          <Link
            sx={{
              textTransform: 'capitalize',
              textDecoration: 'none',
              color: 'lightGray',
              display: 'flex',
              alignItems: 'center',
              my:1
            }}
          >
            {tabBottomBtn}
            <ArrowForward sx={{ color: 'primary.main', width: "20px", height: '15px', marginLeft: 1 }} />
          </Link>}
      </Tabs>
    </Box>
  )
}
/*Props -
tabArr - array of objects that contains tabName ie the name of the tab and content which is the component  that is to be rendered when the corresponding tab is selected.
menuWidth - There are two types of component width, 100% and 70%
tabArr - Simple side tab withoit icons
tabHeading & tabBottomBtn - Simple tab heading and bottom link
imageTab - side tab with icons
imageTabHeading & imageTabBottomBtn - Icon tab heading and bottom link
sideSection - When isTabSection is false then a single menu component must be rendered, which is passed through this prop*/
export default function HalfWidthMenu({ tabArr, menuWidth, tabHeading, tabBottomBtn, imageTab, imageTabHeading, imageTabBottomBtn, sideSection }) {

  const defaultTab = tabArr ? tabArr[0]?.tabName : ''; // Default tab name when tabArr is not provided
  const [value, setValue] = useState(defaultTab);
  const [selectedTab, setSelectedTab] = useState(tabArr ? tabArr[0] : null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedTab(tabArr.find(obj => obj.tabName === newValue) || imageTab.find(obj => obj.tabName === newValue))
  };

  return (
    
      <Box
        sx={{ flexGrow: 1, display: { md: 'flex' }, width: `${menuWidth}`, mx: 'auto', mt:'2px', backgroundColor:'primary.contrastText' }}
      >
        {/* If isTabSection is true then the tabs are rendered by the tabArr and the corresponding menu is rendered by selectedTab, and if its false then a side section components is displayed */}
        <Box
        >
          {tabArr &&
            <TabSection
              value={value}
              selectedTab={selectedTab}
              handleChange={handleChange}
              tabArr={tabArr}
              tabHeading={tabHeading}
              tabBottomBtn={tabBottomBtn}
            />
          }
          {imageTab &&
            <>
              <Divider />
              <TabSection
                value={value}
                selectedTab={selectedTab}
                handleChange={handleChange}
                tabArr={imageTab}
                tabHeading={imageTabHeading}
                tabBottomBtn={imageTabBottomBtn}
              />
            </>
          }
        </Box>
        {
          tabArr &&
          selectedTab.content
        }
        {!tabArr &&
          sideSection
        }
      </Box>
  );
}