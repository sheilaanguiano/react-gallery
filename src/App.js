import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter,
  Switch,
	Route
} from  'react-router-dom';


//Components
import apiKey from './config';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';





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

  //Loads all the button queries to push the correct state when clicking on a button
  componentDidMount(){  
    this.performSearch('sculpture');
    this.performSearch('architecture');
    this.performSearch('painting');
    this.performSearch();
  }
  
  /**
  * [Performs a search or loads a set of 24 photos by default when the component is Mounted] 
  * @param {String} query - A string containing the term to search
  */

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
          
          <Nav />
          {
            (this.state.loading) 
              ? <h2>Loading...</h2>
              :
              <Switch>
                <Route  exact path='/' render={() => <PhotoList data={this.state.photos} />} />
                <Route  exact path='/sculpture' render={() => <PhotoList data={this.state.sculpture} />} />
                <Route  exact path='/architecture' render={()=><PhotoList data={this.state.architecture} />} />
                <Route  exact path='/painting' render={() => <PhotoList data={this.state.painting} />} />
                <Route  path='/search/:query' render={() => <PhotoList data={this.state.photos} query={this.state.query} />} />
                <Route path='*' render={()=> <NotFound />} />
              </Switch>  
          }
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;