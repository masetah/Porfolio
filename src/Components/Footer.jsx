import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-icons">
                <a id="github" href="https://github.com/masetah"  ><img className="logo" src="/Logos/github-logo.png" alt="Github Logo" target="_blank" rel="noopener noreferrer"/> </a> 
                <a id="linkedin" href="https://www.linkedin.com/in/masetaherian/"  ><img className="logo" src="/Logos/linkedin.png" alt="Linkedin Logo" target="_blank" rel="noopener noreferrer"/> </a>
                <a id="facebook" href="https://www.facebook.com/mase.taherian" ><img className="logo" src="/Logos/facebook.png" alt="Facebook Logo" target="_blank" rel="noopener noreferrer"/> </a>
                <a id="resume" href="https://docs.google.com/document/d/10WLVziclEpZTavVlsRC3ToLlMVfBwFeCMBfGVLkJ7a4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="logo" src="/Logos/resume.png" alt="Resume Logo"/> </a>
                </div>
            </div>
        );
    }
}

export default Footer;