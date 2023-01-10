import '../Banner.css';
import 'aos/dist/aos.css';
import Card from '../Card';

function Experiences() {
    return(
        <div  id='experiences' className='experiences-image'>
            <div className='gradient-custom-two'>
                <div className='container-fluid gradient-custom'>
                    <h2 className='pt-5 about-me experiences-title'>- Experiences -</h2>
                </div>
                <div data-aos='fade-right'>
                    <Card className='d-flex justify-content-center align-items-center'>
                    <img src='AllSaintsHigh.png' alt='' className=''/>
                        <p className='experiences-content p-4'>
                            <p className='experiences-header'>All Saints Catholic High School</p>
                            <p className='experiences-timeframe'>September 2015 - June 2021 (Class of 2021)</p>
                            <p className='experiences-location'>Ottawa, ON</p>
                            <p>
                                My highschool years enabled me to find what I truly enjoy doing. During my 4 years of study, I enrolled in a program 
                                called SHSM (Specialist High Skills Major). This program allowed me to specialize in a subject while completing all
                                the necessary credits. I selected the Technology program and have learned how to design and code.
                            </p>
                            <p>
                                I knew computer science was the right path for me as my math skills were always my strong suit. I also really enjoyed
                                programing and developing all sorts of different applications such as Tic Tac Toe, Nine Men Moris, Snakes and Ladders,
                                as well as many others. 
                            </p>
                            <p>
                                During my highschool years I participated in many extra-curiculars. I was, and still am playing the piano for The Royal
                                Conservatory of Music. Furthermore, I still continue to play competitive tennis at a National level. Being an athlete has
                                taught me so much about hard work and dicipline as well as their roles in success. 
                            </p>
                        </p>
                    </Card>
                </div>
                <div data-aos='fade-right'>
                    <Card className='d-flex justify-content-center align-items-center'>
                    <img src='cuimage.png' alt='' className=''/>
                        <p className='experiences-content p-4'>
                            <p className='experiences-header'>Carleton University</p>
                            <p className='experiences-timeframe'>September 2021 (Class of 2025)</p>
                            <p className='experiences-location'>Ottawa, ON</p>
                            <p>
                                Carleton University is the school I have selected because of its amazing Computer programs as well as its location.
                                I have been born and raised here in Ottawa and am proud to be attending university here. 
                            </p>
                            <p>
                                I have been accpeted into Carleton's Computer Science program and am extremely excited to get started in the fall.
                            </p>
                        </p>
                    </Card>
                </div>
                <div data-aos='fade-right'>
                    <Card className='d-flex justify-content-center align-items-center'>
                    <img src='rebel.png' alt='' className=''/>
                        <p className='experiences-content p-4'>
                            <p className='experiences-header'>Rebel.com</p>
                            <p className='experiences-timeframe'>May 2021 - June 2021</p>
                            <p className='experiences-location'>Ottawa, ON</p>
                            <p>
                                Rebel.com is a company that allows business owners, entrepreneurs and pretty much anyone to have
                                access to all the tools necessary to build a modern website. They offer domain services, web-hosting and much more.
                            </p>
                            <p>
                                This one month co-op was part of my Highschool SHSM program. I worked as a developer, joining in on meetings and learning
                                web-development. During this time I learned HTML, CSS, Javascript, React and Bootsrtap. I also built this website
                                during my time there. This was my first time working for a company and it was an extremely valuble experience.
                            </p>
                        </p>
                    </Card>
                </div>
                <div data-aos='fade-right'>
                    <Card className='d-flex justify-content-center align-items-center'>
                    <img src='richcraft.png' alt='' className=''/>
                        <p className='experiences-content p-4'>
                            <p className='experiences-header'>City of Ottawa</p>
                            <p className='experiences-timeframe'>September 2019 - Present</p>
                            <p className='experiences-location'>Ottawa, ON</p>
                            <p>
                                I am an employee for the City of Ottawa working as a lifeguard and Swimming Instructor. I enforce water 
                                safety rules at my local pool, Richcraft Recreaction Complex Kanata, and teach kids the basics of swimming
                                and water safety as well as first-aid. 
                            </p>
                            <p>
                                Ever since I was a little kid, I loved swimming. Even when I was around 10 years old, I knew that I would be 
                                a lifeguard some day. I have made that vision a reality and have loved the job since the first day. It has taught me
                                how to build strong public relations, how to be a role model, how to lead, teach, as well as how to keep everyone safe
                                when they come visit our pool. 
                            </p>
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Experiences;