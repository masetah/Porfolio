import React, {Component} from 'react';
import Footer from '../Components/Footer';
import {
    Tabs, 
    Tab, 
    Grid, 
    Cell, 
    Card, 
    CardTitle, 
    CardActions,
    CardText, 
    Button, 
    CardMenu, 
    IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}>AppPraise Me</CardTitle>
                        <CardText>
                        This will be where the description for the project goes.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/masetah/AppPraisMe" colored>Github</Button>
                            <Button colored disabled>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        <IconButton name ="share" />
                        </CardMenu>                    
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}>Werq Out</CardTitle>
                        <CardText>
                        This will be where the description for the project goes.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/masetah/WerqOut"colored>Github</Button>
                            <Button colored disabled>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        <IconButton name ="share" />
                        </CardMenu>                    
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url("public/portfolio-screenshot.png") center / cover' }}>Portfolio Site</CardTitle>
                        <CardText>
                        This will be where the description for the project goes.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/masetah/AppPraisMe" colored>Github</Button>
                            <Button colored disabled>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        <IconButton name ="share" />
                        </CardMenu>                    
                    </Card>
                </div>
            )
        }else if (this.state.activeTab===1){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}>Star Wars Galactipedia</CardTitle>
                        <CardText>
                        This will be where the description for the project goes.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/masetah/Star-Wars-Galactipedia" colored>Github</Button>
                            <Button href="https://masetah.github.io" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        <IconButton name ="share" />
                        </CardMenu>                    
                    </Card>
                </div>
            )
        }else if(this.state.activeTab===2){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}>Travel Too</CardTitle>
                        <CardText>
                        This will be where the description for the project goes.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/masetah/TravelToo"colored>Group Github</Button>
                            <Button href="https://github.com/masetah/TravelToo2"colored>Individual Github</Button>
                            <Button href="https://travel-too.herokuapp.com"colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        <IconButton name ="share" />
                        </CardMenu>                    
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId})}ripple>
               <Tab>React</Tab>
               <Tab>JavaScript</Tab>
               <Tab>EJS</Tab>
            </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div> 
                    </Cell>
                </Grid>
                <Footer/>
        </div>
        )
    }
}

export default Projects;