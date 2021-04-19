import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
// import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';
// import Admin from './admin/Admin';  
// import DangerButton from './App';
import {Content, ContentLeft} from './componentProp/Prop';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
 
  <ContentLeft />
,
document.getElementById('Header')
);

ReactDOM.render(
 
  <Content name="DIGITAL CAMERA" price="2.000.000" image="images/mayanh3.jpg" />
,
document.getElementById('product1')
);
ReactDOM.render(
 
  
  <Content name="VIP CAMERA" price="3.000.000" image="images/mayanh2.jpg" />
,
document.getElementById('product2')
);

ReactDOM.render(
 
  <Content name="LUXURY CAMERA" price="4.000.000" image="images/mayanh1.jpg" />
,
document.getElementById('product3')
);

ReactDOM.render(
 
  <Content name="VIP PRO CAMERA" price="5.000.000" image="images/mayanh3.jpg" />
,
document.getElementById('product4')
);
// ReactDOM.render(
 
//   <Header />
// ,
// document.getElementById('Header')
// );
// ReactDOM.render(
 
//     <Content />
//  ,
//   document.getElementById('root')
// );

// ReactDOM.render(
 
//   <Footer />
// ,
// document.getElementById('Footer')
// );

// ReactDOM.render(
 
//     <One />
//   ,
//   document.getElementById('One')
// );

// ReactDOM.render(
  
//     <Two />
//   ,
//   document.getElementById('Two')
// );

// ReactDOM.render(
 
//     <Three />
//  ,
//   document.getElementById('Three')
// );

// ReactDOM.render(
  
//     <Four />
//   ,
//   document.getElementById('Four')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
