import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank'
import Particles from './components/Particle';






function App() {

  return (
    <div className="App">
      <Particles className='particles' />
     <Navigation />
     <Logo />
     <ImageLinkForm />
     <Rank />
     {/*<FaceRecognition /> */}
    </div>
  );
}
  



export default App;
