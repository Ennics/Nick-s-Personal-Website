import '../Banner.css';

function Contact() {
    function clickLinkedInHandler(){
        console.log('yo');
    }
    return(
        <div id='contact' className='contact-image'>
            <div className='container-fluid gradient-custom'>
                <h2 className='pt-5 about-me experiences-title'> Let's get in touch! </h2>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <h5 className='pt-5 about-me experiences-title'>Contact me through LinkedIn.</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <a href="https://linkedin.com" className="btn btn-custom-transparent btn-lg active icon" role="button" aria-pressed="true">
                    <img src="linkedin.png" alt="LinkedIn" className='icon'/>
                </a>
                <a href="https://github.com" className="btn btn-custom-transparent btn-lg active icon" role="button" aria-pressed="true">
                    <img src="github.png" alt="GitHub" className='icon'/>
                </a>
            </div>
        </div>
    );
}

export default Contact;