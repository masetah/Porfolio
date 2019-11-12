import React, {Component} from 'react';
import {
    Card, 
    CardTitle, 
    CardActions,
    CardText, 
    Button, 
    CardMenu, 
    IconButton} from 'react-mdl';

class ProjectCard extends Component {
    render() {
        return (
            <React.Fragment>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'35px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${this.props.backgroundURL}) center / cover` }}></CardTitle>
                        <CardText>
                        <h5>{this.props.title}</h5>
                        {this.props.description}
                        </CardText>
                        <CardActions border>
                            <Button href={this.props.githubLink} colored>Github</Button>
                            <Button colored href={this.props.liveDemoLink}>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        <IconButton name ="share" />
                        </CardMenu>                    
                    </Card>
            </React.Fragment>
        )
    }

}

export default ProjectCard;