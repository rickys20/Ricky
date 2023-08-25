import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../css/projects.css';
import mgmp from './img/mgmp-jatim.png';
import siloka from './img/siloka.png';
import centralai from './img/central-ai-logo.png';
import uplink from './img/uplink-logo.png';
import Navbar from "./navbar";

function Projects() {

    return (
        <>
        <Navbar />
            <div className='container-fluid g-0 projects'>
                <div className='row px-5 gy-2 pb-5 pt-5'>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <Card>
                        <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                            <CardMedia
                            component="img"
                            height='200rem'
                            src={mgmp}
                            alt="mgmp-jatim-logo"
                            style={{objectFit:'scale-down'}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                                MGMP English SMA Jawa Timur
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                                Web Developer ( 2021 )
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions  style={{display:'flex',justifyContent:'center'}}>
                            <Button size="small"  color="primary" href='https://mgmp-englishsma-jatim.org/' style={{color:'#472183'}}>
                                <b>Detail Website</b>
                            </Button>
                        </CardActions>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <Card>
                        <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                            <CardMedia
                            component="img"
                            height='200rem'
                            src={siloka}
                            alt="siloka-logo"
                            style={{objectFit:'scale-down'}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                                SILOKA: APLIKASI REKREASI LOKAL
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                                Backend Developer ( 2022 )
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions  style={{display:'flex',justifyContent:'center'}}>
                            <Button size="small"  color="primary" href='https://frontend-siloka.vercel.app/' style={{color:'#472183'}}>
                                <b>Detail Website</b>
                            </Button>
                        </CardActions>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <Card>
                        <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                            <CardMedia
                            component="img"
                            height='200rem'
                            src={centralai}
                            alt="central-ai-logo"
                            style={{objectFit:'scale-down'}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                                Central Artificial Intelligence
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                                Backend Developer ( 2022 )
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions  style={{display:'flex',justifyContent:'center'}}>
                            <Button size="small"  color="primary" href='https://centralai.id/' style={{color:'#472183'}}>
                                <b>Detail Website</b>
                            </Button>
                        </CardActions>
                        </Card>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-12'>
                        <Card>
                        <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                            <CardMedia
                            component="img"
                            height='200rem'
                            src={uplink}
                            alt="central-ai-logo"
                            style={{objectFit:'scale-down'}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                                Uplink.ID
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                                Fullstack Developer ( 2023 )
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions  style={{display:'flex',justifyContent:'center'}}>
                            <Button size="small"  color="primary" href='https://uplink.id/' style={{color:'#472183'}}>
                                <b>Detail Website</b>
                            </Button>
                        </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
