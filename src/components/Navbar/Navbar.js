import { Button, IconButton, List, ListItem, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navConfig } from '../../configData'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MainContainer from '../MainContainer'
import NavDrawer from './NavDrawer'

const Navbar = () => {

    const chilNav = [
        { title: 'Analyzer', path: '/analyzer' },
        { title: 'Analyzer Parameter', path: '/analyzerParameter' },
        { title: 'CPT', path: '/CPT' },
        { title: 'LSI Code', path: '/LSICode' },
        { title: 'Test Parameter', path: '/TestParameter' },
    ]
    const [openMenu, setOpenMenu] = useState(false)
    const [openDrawer,setOpenDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <NavDrawer
            open={openDrawer}
            setOpen={setOpenDrawer}
            />
            <MainContainer>
                <div style={{ backgroundColor: 'black' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', position: 'relative' }}>
                        <Typography className='logo' sx={{minWidth:'300px'}}> Tremendous LIS</Typography>
                        <Stack className='nav-menu' direction='row'>
                            <List sx={{ display: 'flex', width: '100%' }}>
                                {navConfig?.map((item, i) => (
                                    <ListItem key={i} sx={{ justifyContent: 'center' }} >

                                        {item.title == 'Services' ?
                                            <div>
                                                <Button
                                                    id="basic-button"
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                >
                                                    Services
                                                </Button>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                   
                                                >
                                                    {chilNav?.map((item, i) => (
                                                        <MenuItem onClick={handleClose}>
                                                            <Link  to={`${item.path}`} style={{textDecoration:'none',color: 'green' }}  >
                                                                <Typography sx={{ listStyle: 'none' }} >
                                                                {item.title}
                                                                </Typography>
                                                            </Link>
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </div>
                                            :
                                            <Link to={`${item.path}`} className='menu-item' >
                                                {item.title}
                                            </Link>
                                        }
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                        <IconButton className='hamburger-btn'
                        onClick={()=>setOpenDrawer(!openDrawer)}
                        >
                            <MenuIcon
                                fontSize='large'
                                sx={{
                                    color: 'white', "&:hover": {
                                        color: 'skyblue'
                                    }
                                }}
                            />
                        </IconButton>
                        <Stack className='hamburger-menu' sx={{ right: openMenu ? '0px' : '-200px' }}>
                            <List className='hamburger-list'>
                                {navConfig?.map((item, i) => {
                                    return (
                                        <ListItem key={i} sx={{ justifyContent: 'center' }} >
                                            <Link to={`${item.path}`} className='menu-item' >
                                                {item.title}
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Stack>
                    </div>
                </div>
            </MainContainer>
        </>
    )
}

export default Navbar