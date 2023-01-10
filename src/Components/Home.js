import "../Banner.css";

function Home() {
    function clickHomeHandler(){
        document.getElementById('home').scrollIntoView();
    }
    function clickAboutMeHandler(){
        document.getElementById('aboutme').scrollIntoView();
    }
    function clickExperiencesHandler(){
        document.getElementById('experiences').scrollIntoView();
    }
    function clickContactHandler(){
        document.getElementById('contact').scrollIntoView();
    }
    return (
        <div id='home' className='py-2 bg-image profile-image d-flex justify-content-center align-items-center'>
            <div class="typewriter">
                <div class="typewriter-text">Hey, I'm Nicholas Nicolaev</div>
            </div>
            <div className='container-fluid fixed-top gradient-custom'>
                <div className='row'>
                    <div className='col-sm-5'>
                        <button type='button' onClick={clickHomeHandler} className='btn btn-outline-dark btn-lg mx-1 font'>Home</button>
                        <button type='button' onClick={clickAboutMeHandler} className='btn btn-outline-dark btn-lg mx-1 font'>About Me</button>
                        <button type='button' onClick={clickExperiencesHandler} className='btn btn-outline-dark btn-lg mx-1 font'>Experience</button>
                        <button type='button' onClick={clickContactHandler} className='btn btn-outline-dark btn-lg mx-1 font'>Contact</button>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Home;