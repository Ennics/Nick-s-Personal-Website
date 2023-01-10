import "../Banner.css";
import 'aos/dist/aos.css';
import Card from '../Card';
import AOS from 'aos';

function AboutMe() {
    return(
        <div id='aboutme' className='aboutme-image' >
            <div className='container-fluid gradient-custom'>
                <h2 className='pt-5 about-me '>- About Me -</h2>
            </div>
            <div data-aos='fade-right'>
                <Card className='d-flex justify-content-center align-items-center'>
                    <img src='ProfPhoto.png' alt=''/>
                    <p className='aboutme-text p-4'>
                        My name is Nick and I am a first year student studying Computer Science at Carleton University.
                        I am relatively new to the world of programing and software development but I am rapidly improving as 
                        time goes on. The purpose of this website is to showcase some of my web-development skills and to show off
                        some of my personal achievments. Feel free to contact me by email or through LinkedIn! 
                    </p>
                </Card>
            </div>
        </div>
    );
}

export default AboutMe;