import React from 'react'
import Notification from '../../components/common/NotificationBell/Notification';
import Cbutton from '../../components/common/Cbutton/Cbutton'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, Tooltip, Typography } from '@mui/material';
const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            marginTop: "0px",
            width: '270%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '10px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '10px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '320px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    };
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <Notification
                    iconColor="white"
                />
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <Cbutton
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </Cbutton>
                    <Tooltip
                        title="Help"
                    >
                        <IconButton
                            color="white"
                            sx={headerStyles.helpIcon}
                        >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default Header