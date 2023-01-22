
import './App.css';
 import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
   apikey="1696dc4300d04a38accb38b134cb6ab5"
   
   render() {
     return (

      
       <div>
        <Router>
         <Navbar/>
         <Routes>
          <Route path="/" element={<News exact key="general" PageSize="9" apikey={this.apikey} country="in" category="General"/>}/>
          <Route path="/business"element={<News exact key="business" PageSize="9" apikey={this.apikey} country="in" category="Business"/>}/>
          <Route path="/entertainment"element={<News exact key="entertainment"  PageSize="9" apikey={this.apikey} country="in" category="Entertainment"/>}/>
          <Route path="/general"element={<News exact key="general" PageSize="9" apikey={this.apikey} country="in" category="General"/>}/>
          <Route path="/health"element={<News exact key="health"  PageSize="9" apikey={this.apikey} country="in" category="Health"/>}/>
          <Route path="/science"element={<News exact  key="science" PageSize="9" apikey={this.apikey} country="in" category="Science"/>}/>
          <Route path="/sports"element={<News exact key="sports"  PageSize="9" apikey={this.apikey} country="in" category="Sports"/>}/>
          <Route path="/technology"element={<News exact key="technology"  PageSize="9" apikey={this.apikey} country="in" category="Technology"/>}/>
        </Routes>
        </Router>
       </div>
     )
   }
 }
 
 



