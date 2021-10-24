import React, { Component } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
class Question extends Component {

    render() {
        const { id, author, optionOne, optionTwo, avatarURL } = this.props.question;
        return (
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={avatarURL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component={'p'}>
                            {author} asks Would You rather
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={'p'}>
                            {optionOne.text}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={'p'}>
                            {optionTwo.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`questions/${id}`}>
                            <Button size="small" type="submit">View Poll</Button>

                        </Link>
                    </CardActions>
                </Card>

            </div >
        )
    }
}

export default Question