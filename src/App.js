import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter,
  Routes,
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
      photos:[],
      sculpture:[],
      architecture: [],
      painting: [],
      loading: true
    }
  }

  componentDidMount(){  
    this.performSearch('sculpture');
    this.performSearch('architecture');
    this.performSearch('painting');
    this.performSearch();
  }
  
  performSearch = (query = 'pomeranians') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        if(query === 'sculpture'){
          this.setState({sculpture: responseData.photos.photo, loading: false });
        } else if (query === 'architecture'){
          this.setState({architecture: responseData.photos.photo, loading: false });
        } else if (query === 'painting'){
          this.setState({painting: responseData.photos.photo, loading: false });
        } else {
          this.setState({
            photos : responseData.photos.photo,
            query: query,
            loading: false
           })
        }        
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
          <Routes>
            <Route  exact path='/' element={<PhotoList data={this.state.photos} />} />
            <Route  exact path='/sculpture' element={<PhotoList data={this.state.sculpture} />} />
            <Route  exact path='/architecture' element={<PhotoList data={this.state.architecture} />} />
            <Route  exact path='/painting' element={<PhotoList data={this.state.painting} />} />
            <Route  path='/search/:query' element={<PhotoList data={this.state.photos} query={this.state.query} />} />

                
          </Routes>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;