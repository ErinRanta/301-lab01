import { Component } from "react";
import './HornedBeasts.css';

class HornedBeast extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <>
            <li className="Horned-Beast">
            <h1>{this.props.title}</h1>
            <img src={this.props.image_url} alt={this.props.description}></img>
            <p>{this.props.description}</p>
            </li>
            </>
        );
    }
}

export default HornedBeast;