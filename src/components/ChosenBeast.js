import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class ChosenBeast extends Component{
  render(){
    
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleExit}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.chosenBeast.title}</Modal.Title>
          </Modal.Header>
          <Image src={this.props.chosenBeast.image_url}
            alt={this.props.chosenBeast.title}
            title={this.props.chosenBeast.title} />
          <Modal.Body>{this.props.chosenBeast.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.props.handleExit}>Close</Button>
          </Modal.Footer>
        </Modal>
      
      </>
    )
  }
}

export default ChosenBeast;