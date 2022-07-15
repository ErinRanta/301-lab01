import React from 'react';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
// import ChosenBeast from './components/ChosenBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './data.json';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      beastList: list,
      chosenBeast: {},
      showModal: false,
    }
  }
  handleShowModal = (beastName) => {
    const chosenBeast = list.find(beast => beast.title === beastName);
    this.setState({showModal: true, chosenBeast: chosenBeast});
    console.log(chosenBeast.description);
  };

  handleExitModal = () => {
    this.setState({showModal: false});
  };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          beastList={this.state.beastList}
          handleShowModal={this.handleShowModal}
        />
        <ChosenBeast 
          show = {this.state.showModal}
          handleExit = {this.handleExitModal}
          chosenBeast = {this.state.chosenBeast}
        />
        <Footer />
      </div>
    
    );
  }
}

export default App;





