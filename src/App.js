import React, {Component} from 'react';
import Main from './Components/Main';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  // componentDidMount=()=>{
  //   fetch('http://localhost:3000/projects')
  //   .then(res=>res.json())
  //   .then(projects=>this.setState({
  //     projects: projects
  //   }))
  //   .catch(err=>console.log(err))
    
  //   fetch('https://appraiseme.herokuapp.com', 
  //   {mode:'no-cors'})
  //   .then(res=>console.log('woke up praiseMe'))
    
  //   fetch('https://appraiseme.herokuapp.com', 
  //   {mode:'no-cors'})
  //   .then(res=>console.log('woke up WerqOut'))
    
  //   fetch('https://appraiseme.herokuapp.com', 
  //   {mode:'no-cors'})
  //   .then(res=>console.log('woke up TravelToo'))
  // }

  render(){
    return (
      <div className="App">
      <Layout>
          <Header className="header-color" title="Portfolio Site">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Portfolio Site">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
      </div>
    );
  }
  
}

export default App;
