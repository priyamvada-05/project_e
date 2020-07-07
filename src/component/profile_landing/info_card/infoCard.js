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

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [counter, setCounter] = useState(0)
  const date = new Date()

  const handleLike = ()=>{
    setCounter( counter +1)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }

        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          Hello everyone, I have an idea to revolutionize the energy community by reducing the Carbon emmision
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textPrimary" component="p">
          {counter} Like
        </Typography>
      </CardActions>
    </Card>
  );
}
