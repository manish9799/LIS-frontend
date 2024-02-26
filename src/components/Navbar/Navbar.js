import { IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navConfig } from '../../configData'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MainContainer from '../MainContainer'

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <MainContainer>
            <div style={{ backgroundColor: 'black',marginBottom:'20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px',position:'relative' }}>
                    <Typography className='logo'> Tremendous LIS</Typography>
                    <Stack  className='nav-menu' direction='row'>
                        <List sx={{ display: 'flex', width:'100%' }}>
                            {navConfig?.map((item, i) => {
                                return (
                                    <ListItem key={i} sx={{ justifyContent:'center'}} >
                                        <Link to={`${item.path}`} className='menu-item' >
                                                {item.title}
                                        </Link>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Stack>
                        <IconButton className='hamburger-btn' onClick={()=>setOpenMenu(!openMenu)}>
                            <MenuIcon  
                                fontSize='large' 
                                sx={{
                                color:'white',"&:hover": {
                                color:'skyblue'
                                }}} 
                            />
                        </IconButton>
                    <Stack className='hamburger-menu' sx={{right: openMenu ? '0px':'-200px'}}>
                        <List className='hamburger-list'>
                            {navConfig?.map((item, i) => {
                                return (
                                    <ListItem key={i} sx={{ justifyContent:'center'}} >
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
    )
}

export default Navbar