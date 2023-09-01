import './App.css';
import Slider from './components/Slider';

function App() {
  const url =[
    'image1.jpg','image2.jpg','image3.jpg','image3.jpg'
    ,'image4.jpg','image5.jpg','image6.jpg',
  ]
  return (
    <>
    <h1>ImageSlider</h1>
    <Slider url={url}></Slider>
    </>
  );
}

export default App;
