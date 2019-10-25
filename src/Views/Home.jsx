import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Footer from '../Components/Footer';
class Home extends Component {
    render() {
        return (
        <div className="home" >
            <Grid className='banner'>
                <Cell col={12}>
                    <h1>MASE TAHERIAN</h1>
                    <h5>Dallas, Tx</h5>
                    <img  
                        src="https://icons-for-free.com/iconfiles/png/512/internet+web+webpage+website+window+icon-1320168140328914271.png" 
                        alt="web page icon"
                        className="web-page-icon"
                        />
                    {/* <div className="info-div">
                        <h1>Full Stack Web Developer</h1>
                    </div> */}
                </Cell>
                <div className="info-div">
                        <h2>Full Stack Web Developer</h2>
                        <hr/>
                        <p>ReactJS | HTML/CSS | JavaScript | NodeJS | Express | Ruby on Rails | PostgreSQL | MongoDB </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/masetaherian/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/masetah" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            <a href="https://www.facebook.com/mase.taherian" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"/>

                            </a>
                            <a href="https://twitter.com/masetaherian" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
            </Grid>

            <Footer/>
        </div>
        )
    }
}

export default Home;