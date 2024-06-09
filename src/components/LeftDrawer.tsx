import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { FaFacebookSquare } from "react-icons/fa";
import { Icon, IconButton } from '@mui/material';
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const calageries = [
  {
    link:"",
    title:"Home"
  },
  {
    link:"",
    title:"Shop"
  },
  {
    link:"",
    title:"JEE study Meterial"
  },
  {
    link:"",
    title:"NEET study Material"
  },
  {
    link:"",
    title:"School"
  },
  {
    link:"",
    title:"Track Your Order"
  },
  {
    link:"",
    title:"IIT And NEET Notes"
  },
  {
    link:"",
    title:"Blog"
  }
]

const socialMedia = [
  {
    link:"",
    title:"Facbook",
    icon:FaFacebookSquare 
  },
  {
    link:"",
    title:"Instagram",
    icon:IoLogoInstagram  
  },
  {
    link:"",
    title:"Twitter",
    icon:FaSquareXTwitter  
  },
  {
    link:"",
    title:"Email",
    icon:MdOutlineMail  
  }
]

const addresss = [
  {
    link:"",
    title:"Location",
    icon:FaLocationDot 
  },
  {
    link:"",
    title:"EMail",
    icon:MdOutlineMail 
  },
  {
    link:"",
    title:"Phone",
    icon:FaPhoneAlt 
  }
]

export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {calageries.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {socialMedia.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{marginRight:"0rem"}}>
                <item.icon size={25} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {addresss.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{marginRight:"0rem"}}>
                <item.icon size={25} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
