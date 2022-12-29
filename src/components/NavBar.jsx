import { AppBar, Typography, styled, Toolbar, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius, 
    width: "40%",
    
}));

const Icon = styled(Box)(({theme})=>({
    display: "none",
    gap: "7px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const Userbox = styled(Box)(({theme})=>({
    display: "flex",
    gap: "7px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return(        
    <AppBar position="sticky">      
        <StyledToolbar>
           <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}} >Social Media</Typography>
           <AccessibilityRoundedIcon sx={{display: {xs:"block", sm:"none"}}} />
           <Search><InputBase placeholder='Search...'/>
           
           </Search>
           <Icon> 
                <Badge badgeContent={4} color="error">
                    <MapsUgcRoundedIcon />
                </Badge>
                <Badge badgeContent={9} color="error">
                <NotificationsNoneRoundedIcon />
                
             </Badge>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"
                sx={{width:"30px", height:"30px"}}
                onClick={e=>setOpen(true)}
                >J</Avatar>
           </Icon>
           <Userbox onClick={(e)=>{setOpen(true)}}>
           <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{width:"30px", height:"30px"}}>J</Avatar>
           <Typography>Mohd Junaid</Typography>
           </Userbox>
             
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>       
    )
}
export default NavBar;