import "../css/home.css";
import Button from '@mui/material/Button';

function Home() {

    return (
        <>
            <div className="container-fluid" style={{ padding:'10rem', height:'37rem'}}>
                <div className="home">
                    <h3>Hi, my name is</h3> 
                    <h1><b>RICKY SUPRIYANTO</b></h1>
                    <h3>I'm interested in website development. Currently I'm  focusing on as front and back-end developer</h3>
                </div>
                {/* <Button variant="contained" style={{backgroundColor:'#91D8E4'}}> */}
                <Button variant="outlined" href="/about" style={{color:'#472183', borderColor:'#472183'}}>More Details</Button>
            </div>
        </>
    );
}

export default Home;
