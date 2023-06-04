import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
       <Hero Name='Sal Khan'></Hero>
       <Hero Name='Sah Khan'></Hero>
       <Hero Name='Amir Khan'></Hero>
       <Hero Name='Saki khan'></Hero>
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count,setcount] = useState(5);
  const handleClick = () => setcount(count+1);
  return(
    <div>
      <button onClick={handleClick}>Add movie</button>
      <h3>Number of movies:{count}</h3>
    </div>
  )
}

function Hero(props){
  console.log(props.Name)
  const style={
    border:'2px solid red',
    margin:'20px',
  }         
  return (
    <div style={style}>
         <h1>I am Hero-{props.Name}</h1>
         <h2>I have done 5 movies</h2>
    </div>
  )
}

export default App;
