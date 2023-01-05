import "../css/about.css";
import profile from './img/ricky_profile.JPG'
import Button from '@mui/material/Button';

function About() {

    return (
        <>
            <div className="container-fluid" style={{ padding:'5rem',backgroundColor:'#82C3EC', height:'37rem'}}>
                <div className="row">
                    <div className="col-4 image-profile">
                        <img src={profile} class="rounded-circle img-thumbnail shadow-lg" 
                        style={{padding:0}}
                        width={'350rem'} alt="Ricky Profile"/>
                    </div>
                    <div className="col-8 desc-profile">
                        <h1>About Me</h1>
                        <h4>I am a programmer interested in the world of websites. 
                            I am a person who is able to organize, manage time, and have high curiosity about something. 
                            I can also work in any condition. Working with people in building websites is one of the things I love.
                             Here are some skills that I have based on my experience:</h4>
                        <div className="button-skills">
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> HTMl </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> CSS </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> JavaScript </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> PHP </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Git </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> SQL </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> React </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Flask </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Laravel </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Wordpress </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Node Js </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Python </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Teamwork </Button>
                            <Button variant="contained" style={{backgroundColor:'white',color:'#472183',margin:'0 1rem 1rem 0'}}> Leadership </Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default About;
