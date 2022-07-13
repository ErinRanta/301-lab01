import { Component } from "react";
import './HornedBeasts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container'



class HornedBeast extends Component{
    constructor(props){
        super(props);
        this.state = {clicks: 0};
        // this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick = () => {
        this.setState({
            clicks: this.state.clicks + 1
         });
         console.log(this.state.clicks);
    }

    
            render() {
                return(
                
                  <Card>
                    <Card className="center"style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image_url} />
                        <Card.Body>
                          <Card.Title>{this.props.title}</Card.Title>
                          <Card.Text>{this.props.description}</Card.Text>
                          <Card.Text>Current Votes: {this.state.votes}</Card.Text>
                          <Button variant="primary" onClick={this.handleClick}>&hearts; Vote for this Beast</Button>
                        </Card.Body>
                      </Card>
                    </Card>
                      
                 
                
                
                );
              }
            }
export default HornedBeast;