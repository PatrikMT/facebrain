import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import FaceRecognition from './components/FaceRecognition';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Clarifai from 'clarifai';
import Rank from './components/Rank'
import ParticlesBg from 'particles-bg'
import { render } from '@testing-library/react';
import Signin from './components/SignIn/Signin';
import Register from './components/Register/Register';







 //const app = new Clarifai.App({
 //  apiKey: '4788e4614e714aa3b6e6591dad6687b8'
 //});
 
 


class App extends Component {
  constructor () {
    super();
    this.state = {
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtomSubmit = () => {
    console.log ('click');
    //  app.models.predict("4788e4614e714aa3b6e6591dad6687b8", "https://samples.clarifai.com/face-det.jpg").then(
    //     function(response){
      //        console.log(response);
       //   },
     //   function(err){
      //
     //   }
    // );
  }

  componentDidMount(){
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log)
  }
 
loadUser = (data) => {
  this.setState ({ user: {
    id: data.id,
    name:data.name,
    email: data.email,
    entries: 0,
    joined: data.joined

  }})
}


render() {
  const { isSignedIn, imageUrl, route, box } = this.state;
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'home'
        ? <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        : (
           route === 'signin'
           ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
           : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
      }
    </div>
  );
}

}
  



export default App;
