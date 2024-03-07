import React, { useState } from 'react'
import { Box, Accordion, AccordionDetails, AccordionSummary, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { navConfig } from '../../configData';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavDrawer = ({ open, setOpen }) => {
  const [expanded, setExpanded] = useState({});

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: isExpanded ? true : false,
    }));
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{ width: 250, margin: 0, padding: 0, height: '100%' }}
          role="presentation"
          onKeyDown={() => setOpen(false)}
        >
          <List disablePadding>
            {navConfig.map((item, index) => (
              <React.Fragment key={item.title}>
                {item.children && item.children.length > 0 ? (
                  <Accordion
                    expanded={expanded[index]}
                    onChange={handleAccordionChange(index)}
                  >
                    <AccordionSummary
                      sx={{ maxHeight: '30px', margin: '0px !important', }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <ListItemText primary={item.title} />
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: '8px', backgroundColor: '#cecece' }}>
                      <List disablePadding>
                        {item.children.map((childItem, childIndex) => (
                          <ListItem key={childItem.title} sx={{ maxHeight: '35px' }} disablePadding>
                              <Link to={`${childItem.path}`} style={{ textDecoration: 'none', color: 'black',width:'100%' }}>
                            <ListItemButton onClick={handleItemClick}>
                                <ListItemText primary={childItem.title} />
                            </ListItemButton>
                              </Link>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleItemClick}>
                     
                      <Link to={`${item.path}`} style={{ textDecoration: 'none', color: 'black', }}>
                      <ListItemText primary={item.title} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
