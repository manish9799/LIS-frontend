import { Button, IconButton, List, ListItem, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navConfig } from '../../configData'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MainContainer from '../MainContainer'
import NavDrawer from './NavDrawer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px',paddingBottom:'15px', position: 'relative' }}>
                        <Typography className='logo'> Tremendous LIS</Typography>
                        <Stack className='nav-menu' direction='row'>
                            <List sx={{ display: 'flex', width: '100%',padding:'0px' }}>
                                {navConfig?.map((item, i) => (
                                    <ListItem key={i} sx={{ justifyContent: 'center',padding:'0px' }} >
                                        {item?.children?.length ?
                                            <div>
                                                <Button
                                                    id={`main-menu-button-${i}`} 
                                                    aria-controls={`sub-menu-${i}`} 
                                                    aria-haspopup="true"
                                                    aria-expanded={Boolean(subMenuAnchorEl)}
                                                    onClick={handleMainMenuClick}
                                                >
                                                  <Typography className='menu-item'>
                                                     {item.title}
                                                    </Typography> 
                                                    <KeyboardArrowDownIcon style={{color:'white'}}/>
                                                </Button>
                                                <Menu
                                                    id={`sub-menu-${i}`} 
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl) && anchorEl.id === `main-menu-button-${i}`} 
                                                    onClose={handleClose}
                                                >
                                                    {item?.children?.map((subItem, j) => (
                                                        <MenuItem key={j} onClick={handleClose}>
                                                            <Link to={`${subItem.path}`} style={{ textDecoration: 'none', color: 'green',width:'100%' }} >
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
