import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Card from './Card';
// import About from './About';
// import ParentComponent from './ParentComponent';
// import Form from './ClassForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="myFirstProps"/>
    {/* <Card /> */}
    {/* <About name="Why Choose Us" response="SUCCESSFUL"/> */}
    {/* <Form /> */}
    {/* <ParentComponent /> */}
    
  </React.StrictMode>
);











// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
