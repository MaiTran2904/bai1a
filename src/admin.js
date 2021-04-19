import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Sidebar from './componentAd/Sidebar/Siderbar';
import FooterAd from './componentAd/Footer/FooterAd';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

ReactDOM.render(
  <React.StrictMode>
    <FooterAd />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Footer />
//   </React.StrictMode>,
//   document.getElementById('footer')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
