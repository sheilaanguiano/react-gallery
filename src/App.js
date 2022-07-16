import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter,
	Route
} from  'react-router-dom';


//Components
import apiKey from './config';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import SearchForm from './components/SearchForm';





class App extends Component {
  constructor(){
    super();
    this.state = {
      photos:[]
    }
  }

  componentDidMount(){
    this.performSearch();
  }
  
  performSearch = (query = 'pen and ink') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({photos : responseData.photos.photo })
      })
      .catch(error => {
        console.log('Error fectching and passing data', error);
      });

  }

  render (){
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Welcome to Photo App</h1>, 
            <SearchForm onSearch={this.performSearch} />,
            <Nav />,
            {/* <Route> <Route/> */}
            <PhotoList data={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;