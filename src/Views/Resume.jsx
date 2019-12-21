import React, {Component} from 'react';
// import Footer from '../Components/Footer';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render() {
        return (
        <div className="resume">
            <Grid>
                <Cell col={4} className="resume-left-col">
                    <h2>Mase Taherian, PMP</h2>
                    <h4 style={{color:'grey'}}>Full Stack Software Engineer</h4>
                    <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    <p>I am a self-motivated individual in a constant pursuit of excellence. I am often the person in the room that asks, “How can we do this better?” I have had the opportunity to work in many industries including: sales, education, fitness, retail, service, and telecomm. With each new opportunity I am able to bring a perspective that challenges the norm and finds solutions that fit unique circumstances. I am hard working and will not stop until a task has come to complete fruition. I enjoy working in a collaborative setting and finding ways for all members of a team to highlight their talents. I am a very honest person and pride myself on being an effective communicator on all levels. I am very excited to see what great things we can accomplish together. </p>
                    <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    <h5>Location</h5>
                    <p>Dallas, Tx</p>
                    <h5>Phone</h5>
                    <a href="tel: 817-832-1355"><p>(817) 832-1355</p></a>
                    <h5>Email</h5>
                    <a href="mailto: masetaherian@gmail.com"><p>MaseTaherian@gmail.com</p></a>
                    <h5>Web</h5>
                    <p>masetaherian.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    
                    <a style={{paddingLeft:"4px"}} href='Mase-Taherian-Resume.pdf' download><img src="Logos/resume.png" alt="resume-icon"></img></a>
                    <p>Download</p>
                </Cell>
                <Cell col={8} className="resume-right-col">
                    <h2>Education</h2>
                    <Education 
                    startYear={"5/2019"}
                    endYear={"11/2019"}
                    schoolName="General Assembly"
                    degree="Software Engineering"
                    schoolDescription={"Rigorous 6-month software engineering immersive program. This program offers a project based learning experience with various technologies including: ReactJs, JavaScript, Jquery, HTML, CSS, Ruby, Rails, Express, NodeJs, PostgreSQL, MongoDB, and Github. "}
                    />
                    <Education 
                    startYear={"8/2006"}
                    endYear={"12/2010"}
                    schoolName="University of North Texas"
                    degree="B.S Kinsiology"
                    schoolDescription={"Bachelors of Science degree in Kinesiology with a minor in Social Science from the University of North Texas in Denton, Tx. Took classes such as Anatomy/Physiology, Biology, Physics, Psychophysiology, Group Psychology, Motor Development, Motor Behavior, Movement for Special Populations, Quantitative Analysis, Sociology of Sport, Exercise Testing and Prescription."}
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills/>
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Experience</h2>
                    <Experience 
                    startYear={"3/2017"}
                    endYear={"10/2019"}
                    companyName="ViaOne Services"
                    position="Lifeline Compliance Manager"
                    jobDescription={"Ensured all stakeholders adhered to Federal, program, state, and company rules, regulations and policy. Managed 20 local and offshore resources. Enforced compliance regulations for upwards of 400 contracted partners on any given day. Lead initiatives that ultimately lead to the best performing compliance department in the lifeline program."}
                    />
                    <Experience 
                    startYear={"1/2017"}
                    endYear={"3/2017"}
                    companyName="Verizon"
                    position="Solutions Specialist"
                    jobDescription={"Worked directly with the consumer in a retail setting. Probed and asked qualifying questions to ensure the customer’s needs were being met. Provided solutions to best fit the customers needs. Often times troubleshooted devices with customers. "}
                    />
                    <Experience 
                    startYear={"4/2012"}
                    endYear={"8/2016"}
                    companyName="Arlington ISD"
                    position="Educator"
                    jobDescription={"Responsible for delivering district 8th grade Science curriculum to students.. Ensured students had a safe welcoming environment that fostered a collaborative learning setting. Coached Football, Basketball, Track, and Soccer for both the 7th and 8th grade athletes. Moderated summer school. 2016 recipient of Arlington ISD’s Dream Makers award."}
                    />
                    <Experience 
                    startYear={"3/2011"}
                    endYear={"4/2012"}
                    companyName="24hr Fitness"
                    position="Personal Trainer"
                    jobDescription={"Developed individualized exercise programs for clients that aligned with their fitness and lifestyle goals. Coached clients on proper nutrition, exercise form, and execution of their individualized exercise program. Planned events and gained leads for perspective clients. Executed group exercise classes."}
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                </Cell>
            </Grid>
           {/* <Footer/> */}
        </div>
        )
    }
}

export default Resume;