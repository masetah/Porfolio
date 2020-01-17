import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Skills extends Component {
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div className="skill-icons" style={{display:'flex', flexWrap:'wrap', justifyContent:"space-around"}}>
                    <div>
                    <i className="fab fa-react" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>ReactJs</p> 
                    </div>
                    <div>
                    <i className="fab fa-js-square" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>JavaScript</p> 
                    </div>
                    <div>
                    <i className="fab fa-html5" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>HTML</p> 
                    </div>
                    <div>
                    <i className="fab fa-css3-alt" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>CSS</p> 
                    </div>
                    <div>
                    <i className="fas fa-gem" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>Ruby</p> 
                    </div>
                    <div>
                    <img style={{width:'80px',height:'75px'}} src="rails.png" alt="rails-logo"/>
                    <p style={{color: "white", textAlign:"center", paddingTop:"12px",paddingRight:"8px" }}>Rails</p> 
                    </div>
                    <div>
                    <i className="fas fa-server" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>Express</p> 
                    </div>
                    <div>
                    <i className="fab fa-node-js" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>NodeJS</p> 
                    </div>
                    <div>
                    <i className="fas fa-database" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>PostgreSQL</p> 
                    </div>
                    <div>
                    <i className="fas fa-database" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>MongoDB</p> 
                    </div>
                    <div>
                    <i className="fab fa-github-square"></i>
                    <p style={{color: "white", textAlign:"center"}}>Github</p> 
                    </div>
                    <div>
                    <i className="fab fa-gitlab" aria-hidden="true"/>
                    <p style={{color: "white", textAlign:"center"}}>Gitlab</p> 
                    </div>
                </div>
                </Cell>
            </Grid>
        )
    }
}
export default Skills;