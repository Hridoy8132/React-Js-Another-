// // /////  Anis: Lec-8 start here(Props and destructuring) 
// import React from "react";
// import Card from './components/Card';
// import Data from './L-9-mapping-data.json';


// function App(){

//     console.log(Data)

//    return <div>
//             <h1 className='headingStyle'> My Application </h1>
//             <Card titleText = "Call Mother" descText= " This is the desc-1"/> 
//             <Card titleText = "Call Father" descText= " This is the desc-2"/>  
//             <Card titleText = "Call Brother" descText= " This is the desc-3"/>    
            

//         </div>
// }



// export default App;

// // /////  Anis: Lec-8 Ends here(Props and destructuring)


// // /////  Anis: Lec-9 Start here Mapping data to components: 
 import React from "react";
 import Card from './components/Card';
 import Data from './L-9-mapping-data.json';

  function App(){

    // For using Array below this code:
    // let items = [];
    // for (let x=0; x<Data.length; x++)
    //     { items.push(<Card titleText = {Data[x].title} descText= {Data[x].desc}/>)  }
          


    // console.log(Data)

    return <div className="App">
             <h1 className='headingStyle'> My Application </h1>
             {Data.map((item, index) => <Card key={index}titleText = {item.title} descText= {item.desc}/>)}
             {/* {items} */}
             {/* <Card titleText = {Data[0].title} descText= {Data[0].desc}/>             
             <Card titleText = {Data[1].title} descText= {Data[1].desc}/>              
             <Card titleText = {Data[2].title} descText= {Data[2].desc}/>     */}
            
        </div>
 }



 export default App;
