import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function UserCard() {
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
                        Name
                    </Typography>
                    <Typography variant="h6" color="text">
                        Answered Questions:<span>1</span>
                    </Typography>
                    <Typography variant="h6" color="text">
                        Asked Questions:<span>1</span>
                    </Typography>
                    <Typography variant="h6" color="text">
                        Score:<span>2</span>
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}