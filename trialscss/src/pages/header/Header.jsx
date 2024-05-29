import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography, Paper, TextField, Button, InputBase } from '@mui/material'
import NavBar from "./NavBar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MyLogo from '../../public/images/miniorange-logo.webp'
import { AccountCircleOutlined } from '@mui/icons-material'
import Compo from "./Compo"


export default function Header() {
	// Created a new theme to make the orange color as primary
	const theme = createTheme({
		palette: {
			primary: {
				main: '#eb5424',
				contrastText: '#fff',
			},
		},
	})

	const NavItems = [
		{
			tabName: 'Products',
			content: <Compo title="Products" />
		}, {
			tabName: 'Solutions',
			content: <Compo title="Solutions" />
		},
		{
			tabName: 'Pricing',
			content: <Compo title="Pricing" />
		},
		{
			tabName: 'Resources',
			content: <Compo title="Resources" />
		},
		{
			tabName: 'Company',
			content: <Compo title="Company" />
		},
		{
			tabName: 'Customers',
			content: <Compo title="Customers" />
		},
		{
			tabName: 'Why miniOrange',
			content: <Compo title="Why miniOrange" />
		},
	]

	const [selectedTab, setSelectedTab] = useState(NavItems[0])
	const [value, setValue] = useState(NavItems[0].tabName)
	const [menuOpen, setMenuOpen] = useState(true)
	const [opened, setOpened] = useState(false);
	const handleChange = (event, newValue) => {
		setValue(newValue)
		console.log(newValue)
		setSelectedTab(NavItems.find(obj => obj.tabName === newValue))
	};
	const handleClick = (currentTab) => {
		opened ? (setOpened(false), setValue("")) : setOpened(true);
	}

	return (
		<ThemeProvider theme={theme}>
			<Paper elevation={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
				{/* <Image src={MyLogo} width={150} style={{ alignSelf: 'flex-end' }} /> */}
				<Box component='div' sx={{ alignSelf: 'flex-end' }}>
					<NavBar
						value={value}
						setValue={setValue}
						handleChange={handleChange}
						handleClick={() => handleClick(value)}
						NavItems={NavItems}
						selectedTab={selectedTab}
					/>
				</Box>
				<Box component='div' >
					<Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
						<AccountCircleOutlined />
						<Typography>Login</Typography>
						{/* <TextField size='small' placeholder='Search' type="search" /> */}
						<InputBase
							sx={{ ml: 1, flex: 1, border: '3px solid lightgray', borderRadius: '10px' }}
							placeholder="Search"
							inputProps={{ 'aria-label': 'search google maps' }}
						/>
					</Box>
					<Box component='div' >
						<Button
							sx={{ height: '30px' }}
							variant='contained'
						>
							Sign Up
						</Button>
						<Button
							sx={{ height: '30px' }}
							variant='outlined'
						>
							Contact Us
						</Button>
					</Box>
				</Box>
			</Paper>

			{menuOpen && (
				selectedTab.content
			)
			}
		</ThemeProvider>

	)
}

// use grids instead of box for mobile responsiveness
