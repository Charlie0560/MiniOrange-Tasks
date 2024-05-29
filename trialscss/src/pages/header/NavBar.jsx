import { useState } from 'react';
import { Tabs, Tab, Box, Typography, Divider, Link} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

export default function NavBar({ value, handleChange, NavItems, setValue, selectedTab, handleClick }) {

	return (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				sx={{
					'& .MuiTab-root.Mui-selected, & .MuiTab-root.Mui-focusVisible': {
						color: 'primary.main',
					},
					height: '55px',
				}}
			>
				{NavItems.map((tabObj) => (
					<Tab
						icon={(value === tabObj.tabName && value != 'Customers') ? <KeyboardArrowUp sx={{ color: 'primary.main', height: '20px' }} /> : <KeyboardArrowDown sx={{ height: '20px' }} />}
						iconPosition="end"
						label={tabObj.tabName}
						value={tabObj.tabName}
						onClick={handleClick}
						disableRipple
						sx={{
							textTransform: 'none',
							py: 0
						}}
					/>
				))}
			</Tabs>
		</>
	)
}

//handleclick??
//put customers in diff tab from the map to remove arrows