import React from "react";
import Card from './Card';
import data from './data';
import './App.css';

function App(){

  let getData = data.map(item=>{
    return(
      <Card
        key= {item.id}
        info = {item}
      />
    )
  }) 

  return(
    <main className="main-content">
      {getData}
    </main>
  )
}

export default App