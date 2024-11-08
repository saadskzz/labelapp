
import Header from './Components/Header';
import './App.css';
import 'animate.css';

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
    <Header />  {/* Navigation Header */}
    
    <main>
      <section id="home">
        <Pulse />
      </section>
      
      <section id="quote">
        <Qoute />
      </section>

      <section id="product-info">
        <ProductInfo />
      </section>

      <section id="label">
        <Label />
      </section>

      <section id="join">
        <Join />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="marquee">
        <Marquee />
      </section>

      <section id="soon">
        <Soon />
      </section>
    </main>
  </div>
  );
}

export default App;
