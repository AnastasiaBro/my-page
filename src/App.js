import React, { Component } from 'react';
import './App.css';

import BackdropComponent from './components/Backdrop/Backdrop';

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';

import AllNotes from './components/AllNotes/AllNotes';
import AllIllustrations from './components/AllIllustrations/AllIllustrations';
import AllJS from './components/AllJS/AllJS';
import AllRecipes from './components/AllRecipes/AllRecipes';
import AllKniting from './components/AllKniting/AllKniting';
import Travel from './components/Travel/Travel';

import Amineko from './components/Amineko/Amineko';
import Pumpkin from './components/Pumpkin/Pumpkin';
import London from './components/London/London';
import Octopus from './components/Octopus/Octopus';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="main-title">Welcome to hobbies!</h1>
          <Header/>
          
          <main className="page-main">

            <BackdropComponent />
            
            <Route exact path='/my-page' component={AllNotes} />
            <Route path='/illustrations' component={AllIllustrations} />
            <Route path='/javascript' component={AllJS} />
            <Route path='/recipes' component={AllRecipes} />
            <Route path='/kniting' component={AllKniting} />
            <Route path='/travel' component={Travel} />

            <Route path='/london' component={London} />
            <Route path='/amineko' component={Amineko} />
            <Route path='/pumpkin' component={Pumpkin} />
            <Route path='/octopus' component={Octopus} />
            
          </main>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
