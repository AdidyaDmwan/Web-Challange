import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



const hamburger =document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
})