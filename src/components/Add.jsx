import { Avatar, Box, Button, Fab, Modal, styled,  TextField,  Tooltip, Typography } from "@mui/material";
import React, { useState } from 'react';
import {Add as AddIcon} from '@mui/icons-material';
import { Stack } from "@mui/system";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItem:"center",
    justifyContent:"center",
});

const UserBox = styled(Box)({
    display:"flex",
    alignItem:"center",
    gap:"10px",
    marginBottom:"20px"
});

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={e=>setOpen(true)} title="Add Post" sx={{ position:"fixed", bottom:20 }}>
                <Fab size="small" color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={2} borderRadius={5}>
    <Typography variant="h6" color="gray" textAlign="center" >Create Post</Typography>
    <UserBox>
    <Avatar alt="Remy Sharp" 
    src="https://mui.com/static/images/avatar/2.jpg" />
    <Typography fontWeight={500} variant="span">
        Mohd Junaid
    </Typography>
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1}></Stack>
        <Button  sx={{marginBottom:"50%"}}>Post</Button>
  </Box>
</StyledModal>
        </>
    )
}
export default Add;