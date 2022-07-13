import { Component } from "react";
import './Header.css';
import Alert from 'react-bootstrap/Alert';

class Header extends Component{
    
    render(){
        return(
          <div>
            <Alert id='h1' variant='dark'>A Bevy of Horned Beasts!</Alert>
            <Alert id='h3' variant='warning'>Vote for your favorite!</Alert>
          </div>
        )     
      }
    }

export default Header;