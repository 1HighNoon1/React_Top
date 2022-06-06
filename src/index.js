import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var inventory={
        'food':2,
        'whater':3,
        'suplices':12
}

function callSend(NewText){
        inventory[NewText]=10;
        console.log(inventory);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

        <App inventory={inventory} callSend={callSend}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
