import Header from './Test/Header/header';
import Content from './Test/Content/Show/Content';
import './App.css';
import React, { Component } from 'react';
import {render} from '@testing-library/react';

class App extends Component {

    render() {
        return (
        //    <div><Header/></div>
           <div id="container">
               <Header />
                {/*content*/}
               <Content />
           </div>
        );
    }
}

export default App;

