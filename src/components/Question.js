import React, { Component } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import RadioButtonsGroup from '../components/RadioOptions'
class Question extends Component {
    render() {
        const { id, avatarURL, author, optionOne, optionTwo } = this.props.question
        console.log(this.props, "5raaaaaaaaaaaaa props");

        return (
            <div>
                <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        {/* <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        /> */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {author} asks  Would You Rather?
                            </Typography>
                            <Typography gutterBottom variant="small" component="div">
                                {optionOne.text}
                            </Typography>
                            <Typography gutterBottom variant="small" component="div">
                                {optionTwo.text}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            View Poll
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Question