import Button from '@mui/material/Button';

function About() {

    return (
        <>
            <div className="container-fluid" style={{ padding:'10rem', height:'40rem'}}>
                <div className="home">
                    <p>ABOUT PAGE</p> 
                    <h1><b>RICKY SUPRIYANTO</b></h1>
                    <p>I'm interested in website development. Currently I'm  focusing on as front and back-end developer</p>
                </div>
                {/* <Button variant="contained" style={{backgroundColor:'#91D8E4'}}> */}
                <a href="/about">More details</a>    
                {/* </Button> */}
                {/* <div className="home-section">
                        <div className="justify-center">
                            <h2 className="text-judul" style={{color:'#472183'}}>Sewa & Rental Mobil Terbaik di kawasan Surabaya</h2>
                            <h6 className="text-judul-desc" style={{color:'#82C3EC'}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h6>
                            <a href="/posts"><button type="button" className="btn button-green" style={{color:'#F1F6F5'}}>Mulai Sewa Mobil</button></a>
                        </div>
                </div> */}
            </div>
        </>
    );
}

export default About;
