import React, {Component} from 'react';
import ProjectCard from '../Components/ProjectCard.jsx';

// import Footer from '../Components/Footer';
import {
    Tabs, 
    Tab, 
    Grid, 
    Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories(){
        //ALL++++++++++++++++++++++++
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    {/* APPRAISEME APP */}
                    <ProjectCard
                    title="AppPraise Me"
                    backgroundURL="apppraiseme.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/AppPraisMe"
                    liveDemoLink="https://appraiseme.herokuapp.com"
                    />
                    {/* WERQOUT APP */}
                    <ProjectCard
                    title="Werq Out"
                    backgroundURL="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/WerqOut"
                    liveDemoLink=""
                    /> 
                    {/* PORTFOLIO SITE */}
                    <ProjectCard
                    title="Portfolio Site"
                    backgroundURL="portfolio-screenshot.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/Portfolio"
                    liveDemoLink=""
                    /> 
                    {/* STARWARS SITE */}
                    <ProjectCard
                    title="Star Wars Galactipedia"
                    backgroundURL="starwars.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/Star-Wars-Galactipedia"
                    liveDemoLink="https://masetah.github.io"
                    /> 
                    {/* TRAVEL TOO SITE */}
                    <ProjectCard
                    title="Travel Too"
                    backgroundURL="traveltoo.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/TravelToo"
                    liveDemoLink="https://travel-too.herokuapp.com"
                    /> 
                </div>
            )
            //React+++++++++++++++++++++
            }else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">
                    {/* APPRAISEME APP */}
                    <ProjectCard
                    title="AppPraise Me"
                    backgroundURL="apppraiseme.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/AppPraisMe"
                    liveDemoLink="https://appraiseme.herokuapp.com"
                    />
                    {/* WERQOUT APP */}
                    <ProjectCard
                    title="Werq Out"
                    backgroundURL="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/WerqOut"
                    liveDemoLink=""
                    /> 
                    {/* PORTFOLIO SITE */}
                    <ProjectCard
                    title="Portfolio Site"
                    backgroundURL="portfolio-screenshot.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/Portfolio"
                    liveDemoLink=""
                    /> 
                </div>
            )

        }else if (this.state.activeTab===2){
            return(
                <div className="project-grid">
                    <ProjectCard
                    title="Star Wars Galactipedia"
                    backgroundURL="starwars.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/Star-Wars-Galactipedia"
                    liveDemoLink="https://masetah.github.io"
                    /> 
                </div>
            )
            //Express+++++++++++++++++++++
        }else if(this.state.activeTab===3){
            return(
                <div className="project-grid">
                    <ProjectCard 
                    title="Travel Too"
                    backgroundURL="traveltoo.png"
                    description="This will be where the description for the project goes."
                    githubLink="https://github.com/masetah/TravelToo"
                    liveDemoLink="https://travel-too.herokuapp.com"
                    /> 
                </div>
            )
        }
    }
    render() {
        return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId})}ripple>
                <Tab>All</Tab>
               <Tab>React</Tab>
               <Tab>JQuery</Tab>
               <Tab>Express</Tab>
            </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div> 
                    </Cell>
                </Grid>
                {/* <Footer/> */}
        </div>
        )
    }
}

export default Projects;