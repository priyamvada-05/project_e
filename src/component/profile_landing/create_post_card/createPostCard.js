import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import './createPostCard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    fontSize:'0.7rem'
  },
  media: {
    height: 80, // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
    <div className='header'>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
      />
      <h4>Share some ideas</h4>
      </div>
      <CardContent className={classes.media}>
        <div className='userPost'>
        <input type='text' className='post' />
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textPrimary" component="p">
          Post
        </Typography>
      </CardActions>
    </Card>
  );
}
