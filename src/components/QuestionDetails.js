import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import RadioButtonsGroup from '../components/RadioOptions'
export default function QuestionDetails({ id, avatarURL, author, optionOne, optionTwo }) {


    console.log(optionOne, "from qdetails");
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Answer New Question                    </Typography>
                    <Typography variant="h6" color="text">
                        Would You Rather?
                    </Typography>
                    <TextField id="standard-basic" label="Option 1" variant="standard" />
                    <TextField id="standard-basic" label="Option 2" variant="standard" />
                    <RadioButtonsGroup options={[optionOne, optionTwo]} />

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="Large" color="primary" >
                    Submit
                </Button>
            </CardActions>
        </Card>
    );
}