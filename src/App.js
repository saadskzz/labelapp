
import Header from './Components/Header';
import './App.css';
import Qoute from './Components/Qoute';
import ProductInfo from './Components/ProductInfo';
import Label from './Components/Label';
import Join from './Components/Join';
import Contact from './Components/Contact';
import Eyes from './Components/Eyes.png'
import Pulse from './Components/Pulse';
import Marquee from './Components/Marquee';
import Soon from './Components/Soon';

function App() {
  return (
      <div className="App">
      <Header/>  
     <main>
   <Pulse/>   
           <Qoute/>   
          <ProductInfo/> 
          <Label/>
          <Join/> 
          
  {/*  <ProductInfo/> 
    
    <Label/> 
    <Join/>
    <Contact/> 
     <Marquee/>
    <Soon/> */}
     </main>
        </div>
  );
}

export default App;
