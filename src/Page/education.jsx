import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../css/education.css';
import its from './img/its.png';
import binar from './img/binar.png';

function Education() {

    return (
        <>
            <div class="education">
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                    <CardMedia
                    component="img"
                    height='200rem'
                    src={its}
                    alt="its-logo"
                    style={{objectFit:'scale-down'}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                        Institut Teknologi Sepuluh Nopember (ITS)
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                        Informatiics ( 2019 - 2023 )
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions  style={{display:'flex',justifyContent:'center'}}>
                    <Button size="small"  color="primary" href='https://www.its.ac.id/informatika' style={{color:'#472183'}}>
                        <b>Detail Information</b>
                    </Button>
                </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                    <CardMedia
                    component="img"
                    height='200rem'
                    src={binar}
                    alt="binar-logo"
                    style={{objectFit:'scale-down'}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                        Binar Academy
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                        Fullstack Website (2022)
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions  style={{display:'flex',justifyContent:'center'}}>
                    <Button size="small"  color="primary" href='https://www.binaracademy.com/' style={{color:'#472183'}}>
                        <b>Detail Information</b>
                    </Button>
                </CardActions>
                </Card>
            </div>
        </>
    );
}

export default Education;
