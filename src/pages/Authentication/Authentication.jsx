import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Cbutton from '../../common/Cbutton/Cbutton'
import Notification from '../../common/NotificationBell/Notification';
import BaiscMenu from '../../common/Menu/BaiscMenu';
const Authentication = () => {
  

  
  return (
    <Grid container>
      This is Authentication Pages
      <Notification 
      iconsColor={"primary"} 
      badgeContent={4} 
      />
      
    </Grid>
  )
}

export default Authentication