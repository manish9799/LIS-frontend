import { Button, IconButton, List, ListItem, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navConfig } from '../../configData'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MainContainer from '../MainContainer'
import NavDrawer from './NavDrawer'

const Navbar = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null); 

    const handleMainMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSubMenuClick = (event) => {
        setSubMenuAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSubMenuAnchorEl(null); 
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
                        <Typography className='logo' sx={{ minWidth: '300px' }}> Tremendous LIS</Typography>
                        <Stack className='nav-menu' direction='row'>
                            <List sx={{ display: 'flex', width: '100%' }}>
                                {navConfig?.map((item, i) => (
                                    <ListItem key={i} sx={{ justifyContent: 'center' }} >

                                        {item?.children?.length ?
                                            <div>
                                                <Button
                                                    id={`main-menu-button-${i}`} 
                                                    aria-controls={`sub-menu-${i}`} 
                                                    aria-haspopup="true"
                                                    aria-expanded={Boolean(subMenuAnchorEl)}
                                                    onClick={handleMainMenuClick}
                                                >
                                                    {item.title}
                                                </Button>
                                                <Menu
                                                    id={`sub-menu-${i}`} 
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl) && anchorEl.id === `main-menu-button-${i}`} 
                                                    onClose={handleClose}
                                                >
                                                    {item?.children?.map((subItem, j) => (
                                                        <MenuItem key={j} onClick={handleClose}>
                                                            <Link to={`${subItem.path}`} style={{ textDecoration: 'none', color: 'green' }} >
                                                                <Typography sx={{ listStyle: 'none' }} >
                                                                    {subItem.title}
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
                            onClick={() => setOpenDrawer(!openDrawer)}
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
                    </div>
                </div>
            </MainContainer>
        </>
    )
}

export default Navbar;
