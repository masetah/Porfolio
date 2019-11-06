import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Views/Home'
import Contact from '../Views/Contact'
import Projects from '../Views/Projects'
import Resume from '../Views/Resume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Resume}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main;