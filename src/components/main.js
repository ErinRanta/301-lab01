
// import { Component } from "react";
// import HornedBeast from './hornedbeast'
// import beastJSON from '../data.json';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// class Main extends Component{
//     constructor(){
//         super();
//         this.state = {beasts: beastJSON}
//     }
    
   
//     render(){
//         return(
//             <Container fluid>
//                 <Row xs={1} sm={2}md={3} lg={4} xl={5}>
//                     {this.state.beasts.map(b => 
//                         <Col>
//                             key={b._id.toString()}
//                             <HornedBeast 
//                                 title={b.title}
//                                 image_url={b.image_url}
//                                 description={b.description}
//                             />
//                         </Col>
//                     )}
//                 </Row>  
//             </Container>
//         );
//     }
// }

// export default Main;


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./hornedbeast.js";
import React from 'react';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.images = props.images;
  }

  render () {

    return (
        <main>
          <Container>
            <Row>
              {this.images.map(el => <HornedBeast image_url={el.image_url} title={el.title} description={el.description} handleModalClick={this.props.handleModalClick} />)}
            </Row>
          </Container>
        </main>
        );
    }
  }

export default Main;