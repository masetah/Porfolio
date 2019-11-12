import React, {Component} from 'react';
import Footer from '../Components/Footer';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
        <div className="contact-body">
           <Grid className="contact-grid">
               <Cell col={6}>
                   <h2>Mase Taherian</h2>
                   <img 
                   src="IMG_6956.png"
                   alt="Mase Taherian"
                   style={{height: '225px', borderRadius: '25px'}}
                   />
                   <p style={{width: '60%', margin: 'auto', paddingTop: '1em'}}>Thank you for visiting my site. I'd would enjoy discussing any opportunities your orgianization may have available.</p>
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
                                <i className="fab fa-linkedin-square" aria-hidden="true"/>
                                masetaherian
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                MaseTaherian@gmail.com
                            </ListItemContent>
                        </ListItem>
                        {/* <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fab fa-skype" aria-hidden="true"/>
                                live:masetaherian
                            </ListItemContent>
                        </ListItem> */}
                    </List>
                   </div>
               </Cell>
           </Grid>
           <Footer/>
        </div>
        )
    }
}

export default Contact;