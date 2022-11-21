import logo from './logo.svg';
import './App.css';

function App() {
  let d = new Date();
  d=d.getHours();
  let z=""

  function time(){
    if (d>=7 && 11>=d){
     z="good morning"
    }
    if (12<=d && d<20){
      z="good afternoon"
      }
      else{
      z="good night"
      }
  }
  time()

  
  return (
    <>
    <h1 className="color" >Hello, {z}</h1>
    
    </>
  );
}



export default App;
