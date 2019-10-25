import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Views/Home'
import About from '../Views/AboutMe'
import Contact from '../Views/Contact'
import Projects from '../Views/Projects'
import Resume from '../Views/Resume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/resume" component={Resume}/>
    </Switch>
)

export default Main;