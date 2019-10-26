import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
        <div className="contact-body">
           <Grid className="contact-grid">
               <Cell col={6}>
                   <h2>Mase Taherian</h2>
                   <img 
                   src="masePic.jpg"
                   alt="Mase Taherian"
                   style={{height: '225px', borderRadius: '25px'}}
                   />
                   <p styel={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </Cell>
               <Cell col={6}>
                   <h2>Contact Me</h2>
                   <hr/>
                   <div className="contact-list">
                   <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (817) 832-1355
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                masetaherian
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                MaseTaherian@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                live:masetaherian
                            </ListItemContent>
                        </ListItem>

                    </List>
                   </div>
               </Cell>
           </Grid>
        </div>
        )
    }
}

export default Contact;