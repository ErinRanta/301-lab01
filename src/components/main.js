
import HornedBeast from './HornedBeast.js'
import Images from '../data.json';
// import Images from 'react-bootstrap/Image'

const Main = () => {
  let imagesArr = Images;

  let displayArr = [];

  imagesArr.forEach((element) => {
    displayArr.push(<HornedBeast image_url={element.image_url} title={element.title} description={element.description}/>);
  })

return (
  <main>{displayArr}</main>
);}


export default Main;




