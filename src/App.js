import './App.css';
import { useState } from 'react';
import RenderWeather from './components/RenderWeather';
import RenderBGImage from './components/RenderBGImage';
import { getWeatherData, getBackgroundImg } from './components/Fetching';
import Footer from './components/Footer';
import{Card, FirstLayer, SecondLayer} from './components/Styled'
import Input from './components/Input';

function App() {

  //states @query, location, backgroundImg
  const[query, setQuery]= useState("Delhi");
  const [location, setLocation]= useState({place:"Place", temp:"Temperature", wind:"Wind", humidity:"Humidity"});
  const [backgroundImg, setBackgroundImg] = useState("");
  

  //functions fetching weather data & backgroundImage
  const getStarted=()=>{
    getBackgroundImg(query, setBackgroundImg);  
    getWeatherData(query, setLocation);
      
  }
  
  return (
    <div className="App">
      <h1> Weather App</h1>
      <Input query={query} setQuery={setQuery} getStarted={getStarted}/>

      <Card>
      <FirstLayer>
      <RenderBGImage backgroundImg={backgroundImg}/>
      </FirstLayer>
      <SecondLayer>
        <RenderWeather location={location} />
      </SecondLayer>
      </Card>

      <Footer/>
    </div>
  );
}

export default App;
