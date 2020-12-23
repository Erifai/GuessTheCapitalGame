import React,{Component} from 'react';
import './App.css';
import Header from './header/Header'
import Body from './body/Body'
import Footer from './footer/Footer'
class App extends Component 
{
  render()
  {
    return(
      <div className='main'>
       <Header></Header>
       <Body></Body>
       <Footer></Footer>
      </div>
    )
  }
}


export default App;
