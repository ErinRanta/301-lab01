// import { Component } from "react";
import HornedBeast from './HornedBeast'
import './main.css';

const Main = () => {
    return (
     <>
        <h2>Unicorns, Narwhals, and Rhinos!</h2>
             <p>Animals</p>
             <HornedBeast _id="1" image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="Uniwhal" description="A unicorn and a narwhal nuzzling their horns" keyword="narwhal" horns="1" />
             <HornedBeast _id="2" image_url="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title="Rhino Family" description="Parent rhino with two babies" keyword="rhino" horns="2" />
    </>
     );
 }
 
 export default Main;

// import { Component } from 'react';
// import HornedBeast from './HornedBeast'
// import beastJSON from '../data.json';
// import Image from 'react-bootstrap/Image'

// class BeastList extends Component {
//   render() {
//     return (
//       <div id="">
//         {this.props.beasts.map(beast => <Image width="200px" src={beast.image_url} onClick={() => this.props.selectBeast(beast)} />)}
//       </div>
//     )
//   }
// }

// export default BeastList;