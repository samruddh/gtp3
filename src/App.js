
import './App.css';

import {Footer, Blog, Possibility, Features, whatGPT3, Header} from './containers'
import {Article, Brand, CTA, Navbar} from './components'



function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <whatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  ); 
}

export default App;
