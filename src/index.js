import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IgsOrderContextProvider } from './context/igsOrderContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXjxoMMiZPjEKYKWPPFXAKaOlSbD3QxvY",
  authDomain: "instagram-exam.firebaseapp.com",
  projectId: "instagram-exam",
  storageBucket: "instagram-exam.appspot.com",
  messagingSenderId: "38359910551",
  appId: "1:38359910551:web:ae097f96b1f069d65601d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <IgsOrderContextProvider>
    <App />
  </IgsOrderContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
