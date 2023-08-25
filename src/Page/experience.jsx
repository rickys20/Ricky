import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/experience.css';
import its from './img/logo-its-biru.png';
import tdc from './img/tdc.jpg';
import hmtc from './img/Logo_HMTC.png';
import Navbar from "./navbar";

function Experience() {

    return (
        <>
        <Navbar />
            <div class="experience">
                <div class="row row-experience">
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={hmtc}
                        alt="hmtc-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Himpunan Mahasiswa Teknik Computer-Informatika (HMTC) ITS
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Head of External Affairs Department ( Jan 202 - Des 2022 )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={its}
                        alt="its-blue-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Institut Teknologi Sepuluh Nopember
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Administrator at Net-Centric Computing Laboratory ( Apr 2021 - Present )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={its}
                        alt="its-blue-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Institut Teknologi Sepuluh Nopember
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Assistant Lecturer for Operating System Course ( Feb 2022 - Jun 2022 )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
                <div class="row row-experience">
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={its}
                        alt="its-blue-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Institut Teknologi Sepuluh Nopember
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Assistant Lecturer for Digital System Course ( Feb 2022 - Jun 2022 )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>   
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={its}
                        alt="its-blue-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Institut Teknologi Sepuluh Nopember
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Assistant Lecturer for Discrete Mathematic Course ( Aug 2021 - Jan 2022 )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={hmtc}
                        alt="hmtc-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Himpunan Mahasiswa Teknik Computer-Informatika (HMTC) ITS
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Staff of External Affairs Department ( May 2021 - Jan 2022 )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
                <div class="row row-experience">
                    <Card sx={{ maxWidth: 345 }} style={{paddingBottom:'1rem',paddingTop:'1rem'}}>
                    <CardActionArea style={{padding:'1rem', height:'25rem'}}>
                        <CardMedia
                        component="img"
                        height='200rem'
                        src={tdc}
                        alt="tdc-blue-logo"
                        style={{objectFit:'scale-down'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                            Technopreneurship Development Centre ITS ( TDC )
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
                            Secretary and Treasurer of External Division ( Jan 2021 - Jan 2022 )
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Experience;
