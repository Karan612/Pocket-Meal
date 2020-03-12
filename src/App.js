import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Routes from './pages/Routes';
import ParticleComponent from './pages/Particles';

class App extends Component {  
  render() {
    return (             
        <div className="App">          
          <div className="App__Aside">   
          <ParticleComponent />                              
          </div>          
          <div className="App__Form">                                    
              <Routes />                                            
          </div>                                 
        </div>                     
    );
  }
}

export default App;