import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Projects from './Projects'
import Contact from './Contact'
// import Footer from '../Components/Footer';
class Home extends Component {
    render() {
        return (
        <div className="home" >
            <Grid className="banner">
                <Cell col={12}>
                    <div >
                    <h1>MASE TAHERIAN</h1>
                    <h5>Dallas, Tx</h5>
                    </div>
                </Cell>
                </Grid>
                <div className="info-div">
                <Grid >
                    <Cell col={12}>
                        <h2>Full Stack Software Engineer</h2>
                        <hr/>
                        <p>ReactJS | HTML/CSS | JavaScript | NodeJS | Express | Ruby on Rails | PostgreSQL | MongoDB | REST | Project Management </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/masetaherian/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/masetah" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github-square"/>
                            </a>
                            <a href="https://www.facebook.com/mase.taherian" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-facebook-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </Cell>
                </Grid>
                </div>
                <div className="home-projects">
                    <h2>My Projects</h2>
                    <Projects />
                </div>
                <div >
                    <Contact />
                </div>
        </div>
        )
    }
}

export default Home;