import { Badge, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import BaiscMenu from '../Menu/BaiscMenu';

const Notification = ({ iconsColor, badgeContent}) => {
    const newNotification = `you have ${badgeContent} new notification`
    const notification = `No new notification`
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Tooltip title={badgeContent ? newNotification : notification}>
                <IconButton
                    color={iconsColor}
                    onClick={(e) => { handleOpen(e) }}
                    anchorEl={anchorEl}
                >
                    <Badge badgeContent={badgeContent} color='primary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BaiscMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        </>
    )
}

export default Notification