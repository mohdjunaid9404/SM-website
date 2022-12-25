import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Checkbox } from '@mui/material';
import {MoreVert, Share, Favorite, FavoriteBorder} from '@mui/icons-material';
// import images from '../images/istockphoto-1382384282-612x612.jpg'

const Post = () => {
    return(
       
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Mohd Junaid"
        subheader="December 25, 2022"
      />
      <CardMedia
        component="img"
        height="15%"
        src= "https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
        alt="image not found"    
      >
        {/* <img src="istockphoto-1382384282-612x612.jpg" alt="image not found" /> */}
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
       </CardActions>
    </Card>
    
    )
}
export default Post;