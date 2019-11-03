import React, {Component} from 'react';
import Footer from '../Components/Footer';
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    <h5>Location</h5>
                    <p>Dallas, Tx</p>
                    <h5>Phone</h5>
                    <p>(817) 832-1355</p>
                    <h5>Email</h5>
                    <p>MaseTaherian@gmail.com</p>
                    <h5>Web</h5>
                    <p>site@masetaherian.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell col={8} className="resume-right-col">
                    <h2>Education</h2>
                    <Education 
                    startYear={"5/2019"}
                    endYear={"11/2019"}
                    schoolName="General Assembly"
                    degree="Software Engineering"
                    schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <Education 
                    startYear={"8/2006"}
                    endYear={"12/2010"}
                    schoolName="University of North Texas"
                    degree="B.S Kinsiology"
                    schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
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
                    jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <Experience 
                    startYear={"1/2017"}
                    endYear={"3/2017"}
                    companyName="Verizon"
                    position="Solutions Specialist"
                    jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <Experience 
                    startYear={"4/2012"}
                    endYear={"8/2016"}
                    companyName="Arlington ISD"
                    position="Educator"
                    jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <Experience 
                    startYear={"3/2011"}
                    endYear={"4/2012"}
                    companyName="24hr Fitness"
                    position="Personal Trainer"
                    jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                </Cell>
            </Grid>
           <Footer/>
        </div>
        )
    }
}

export default Resume;