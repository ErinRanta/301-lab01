import { Component } from "react";
import './hornedbeasts.css';

class hornedBeast extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <>
            <li className="horned-beast">
            <h1>{this.props.title}</h1>
            <img src={this.props.image_url} alt={this.props.description}></img>
            <p>{this.props.description}</p>
            </li>
            </>
        );
    }
}

export default hornedBeast;