import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Routes from './pages/Routes';

class App extends Component {  
  render() {
    return (             
        <div className="App">          
          <div className="App__Aside">                                  
          </div>          
          <div className="App__Form">                                    
              <Routes />                                            
          </div>                                 
        </div>                     
    );
  }
}

export default App;