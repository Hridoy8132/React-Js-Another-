// Anis: Lec-4 start (JSX and JS Expression)
import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitle = "Call Mother";
const todoDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, distinctio!";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='headingStyle'> Todo App </h1>
    <h3> {todoTitle}</h3>
    <p>  {todoDesc}</p>
    <p>  {dateName + "/" + monthName + "/" + currentYear  }</p>

 
  </div>
  
);




