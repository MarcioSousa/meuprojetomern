// cSpell:Ignore squamate, Seja, Vindo, missão, Nossa, Mais, Saiba, Compartilhe
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 500,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='http://source.unsplash.com/featured/dog'
          title='Seja bem Vindo'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nossa Missão
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A missão da Delta é com o ....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartilhe
        </Button>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
}
