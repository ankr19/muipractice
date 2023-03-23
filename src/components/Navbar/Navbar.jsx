import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const drawerWidth = 200;
import { navbarStyles } from './Style';
import { NavbarItems } from './consts/NavbarItem';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {NavbarItems.map((val, index) => (
                    <ListItem key={val.id}>
                        <ListItemButton onClick={() => { navigate(val.route) }}>
                            <ListItemIcon sx={navbarStyles.icons}>
                                {val.icon}
                            </ListItemIcon>
                            <ListItemText primary={val.label} sx={navbarStyles.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {NavbarItems.map((item, index) => (
          <ListItem
              key={item.id}
              onClick={() => navigate(item.route)}
          >
            <ListItemButton>
            <ListItemIcon
              sx={navbarStyles.icons}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={navbarStyles.text}
              primary={item.label}
            />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    );
}

export default Navbar