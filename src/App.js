import React from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import CardBody from './components/Pages/CardBody/CardBody'
import PageBody from './components/Pages/PageBody/PageBody'


import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
    
        <CardBody/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PageBody/>
    
        
      </header>
    </div>
  );
}

export default App;
