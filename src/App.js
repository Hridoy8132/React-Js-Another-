import React from "react";
import Card from './components/Card';


function App(){
   return <div>
            <h1 className='headingStyle'> My Application </h1>
            <Card titleText= "Call Mother" descText= " This is the desc-1"/> 
            <Card titleText= "Call Father" descText= " This is the desc-2"/>  
            <Card titleText= "Call Brother" descText= " This is the desc-3"/>    
            

        </div>
}



export default App;